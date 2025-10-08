<?php
$secretKey = '6Ley2GgrAAAAALkgMsPLXVYAg8fJDWWrRRoG0jdJ';
$recaptchaToken = $_POST['g-recaptcha-response'];
$remoteIp = $_SERVER['REMOTE_ADDR'];

$response = file_get_contents(
  "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$recaptchaToken&remoteip=$remoteIp"
);
$responseKeys = json_decode($response, true);

if (!$responseKeys["success"]) {
    die("Error: no se pudo verificar el captcha.");
}

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitizar datos
    $nombre = htmlspecialchars($_POST["nombre"] ?? "");
    $empresa = htmlspecialchars($_POST["empresa"] ?? "");
    $correo = filter_var($_POST["correo"], FILTER_SANITIZE_EMAIL);
    $telefono = htmlspecialchars($_POST["telefono"] ?? "");
    $recomendado_por = htmlspecialchars($_POST["recomendado-por"] ?? ""); // 👈 nuevo campo
    $ensayo = htmlspecialchars($_POST["ensayo"] ?? "");
    $acepto = isset($_POST["acepto"]) ? "Sí" : "No";

    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Correo inválido."]);
        exit;
    }

    // Configuración del correo
    $destinatario = "afiliaciones@ampirivieranayarit.com";
    $asunto = "Nueva solicitud de asociación AMPI";
    $boundary = md5(uniqid(time()));

    $cabeceras = "From: $correo\r\n";
    $cabeceras .= "Reply-To: $correo\r\n";
    $cabeceras .= "MIME-Version: 1.0\r\n";
    $cabeceras .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    // Parte principal del mensaje
    $mensaje = "--$boundary\r\n";
    $mensaje .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $mensaje .= "Content-Transfer-Encoding: 7bit\r\n\r\n";

    $mensaje .= "Nueva solicitud de asociación AMPI:\n\n";
    $mensaje .= "Nombre del representante legal: $nombre\n";
    $mensaje .= "Empresa: $empresa\n";
    $mensaje .= "Correo electrónico: $correo\n";
    $mensaje .= "Teléfono: $telefono\n";
    $mensaje .= "Recomendado por: $recomendado_por\n"; // 👈 añadido
    $mensaje .= "Ensayo:\n$ensayo\n\n";
    $mensaje .= "Aceptó términos: $acepto\n\n";

    // Campos de archivo y sus etiquetas
    $archivos = [
        "cv" => "CV representante legal",
        "foto" => "Fotografía digital",
        "identificacion" => "Identificación oficial",
        "documento-migratorio" => "Documento migratorio",
        "rfc" => "RFC empresa",
        "acta" => "Acta constitutiva",
        "legal" => "Documento representante legal",
        "recomendacion" => "Cartas recomendación AMPI",
        "licencia" => "Licencia municipal + recibo",
        "factura" => "Factura comisión",
        "curso" => "Curso de bienes raíces",
        "espanol" => "Diploma español o examen",
        "conducta" => "Carta de buena conducta",
        "logo" => "Logotipo empresa"
    ];

    $mensaje .= "Archivos adjuntos:\n";

    foreach ($archivos as $campo => $etiqueta) {
        if (isset($_FILES[$campo]) && $_FILES[$campo]["error"] === UPLOAD_ERR_OK) {
            $rutaTemporal = $_FILES[$campo]["tmp_name"];
            $tipoArchivo = mime_content_type($rutaTemporal);
            $extension = pathinfo($_FILES[$campo]["name"], PATHINFO_EXTENSION);
            $nombreSeguro = preg_replace('/[^a-zA-Z0-9_-]/', '_', $etiqueta);
            $nombreArchivo = $nombreSeguro . '.' . $extension;
            $contenidoArchivo = chunk_split(base64_encode(file_get_contents($rutaTemporal)));

            $mensaje .= "- $etiqueta: $nombreArchivo\n";

            $mensaje .= "--$boundary\r\n";
            $mensaje .= "Content-Type: $tipoArchivo; name=\"$nombreArchivo\"\r\n";
            $mensaje .= "Content-Disposition: attachment; filename=\"$nombreArchivo\"\r\n";
            $mensaje .= "Content-Transfer-Encoding: base64\r\n\r\n";
            $mensaje .= $contenidoArchivo . "\r\n";
        }
    }

    $mensaje .= "--$boundary--";

    // Enviar correo
    if (mail($destinatario, $asunto, $mensaje, $cabeceras)) {
        echo json_encode(["success" => true, "message" => "Formulario enviado correctamente."]);
    } else {
        echo json_encode(["success" => false, "message" => "Hubo un error al enviar el formulario."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Acceso no autorizado."]);
}
?>

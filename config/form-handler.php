<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"] ?? "");
    $apellido_paterno = htmlspecialchars($_POST["apellido-paterno"] ?? "");
    $apellido_materno = htmlspecialchars($_POST["apellido-materno"] ?? "");
    $correo = filter_var($_POST["correo"], FILTER_SANITIZE_EMAIL);
    $asociado = htmlspecialchars($_POST["nombre-asociado"] ?? "");
    $ensayo = htmlspecialchars($_POST["ensayo"] ?? "");
    $acepto = isset($_POST["acepto"]) ? "Sí" : "No";

    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Correo inválido."]);
        exit;
    }

    // Configuración general
    $destinatario = "afiliaciones@ampirivieranayarit.com";
    $asunto = "Nueva solicitud de afiliación AMPI";
    $boundary = md5(uniqid(time()));

    $cabeceras = "From: $correo\r\n";
    $cabeceras .= "Reply-To: $correo\r\n";
    $cabeceras .= "MIME-Version: 1.0\r\n";
    $cabeceras .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    // Cuerpo inicial
    $mensaje = "--$boundary\r\n";
    $mensaje .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $mensaje .= "Content-Transfer-Encoding: 7bit\r\n\r\n";

    $mensaje .= "Nueva solicitud de afiliación AMPI:\n\n";
    $mensaje .= "Nombre completo: $nombre $apellido_paterno $apellido_materno\n";
    $mensaje .= "Correo electrónico: $correo\n";
    $mensaje .= "Asociado patrocinador: $asociado\n";
    $mensaje .= "Ensayo:\n$ensayo\n\n";
    $mensaje .= "Aceptó términos: $acepto\n\n";

    // Adjuntos
    $archivos = [
        "foto" => "Fotografía digital",
        "identificacion" => "Identificación oficial (INE o Pasaporte)",
        "documento-migratorio" => "Documento migratorio vigente (solo extranjeros)",
        "rfc" => "Constancia de situación fiscal (RFC)",
        "recomendacion" => "Carta de recomendación del patrocinador",
        "conducta" => "Carta de buena conducta (si aplica)",
        "diploma-espanol" => "Diploma de español o examen de dominio del idioma"
    ];

    $mensaje .= "Archivos adjuntos:\n";
    foreach ($archivos as $campo => $nombreVisible) {
        if (isset($_FILES[$campo]) && $_FILES[$campo]["error"] === UPLOAD_ERR_OK) {
            $rutaTemporal = $_FILES[$campo]["tmp_name"];
            $tipoArchivo = mime_content_type($rutaTemporal);
            $extension = pathinfo($_FILES[$campo]["name"], PATHINFO_EXTENSION);
            $nombreSeguro = preg_replace('/[^a-zA-Z0-9_-]/', '_', $nombreVisible);
            $nombreArchivo = $nombreSeguro . '.' . $extension;
            $contenidoArchivo = chunk_split(base64_encode(file_get_contents($rutaTemporal)));
    
            // Incluir en mensaje
            $mensaje .= "- $nombreVisible: $nombreArchivo\n";
    
            // Agregar MIME
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

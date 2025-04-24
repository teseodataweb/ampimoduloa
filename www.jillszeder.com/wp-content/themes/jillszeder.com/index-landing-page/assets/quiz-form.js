(function ($) {
  var app = {
    quizForm: function () {
      jQuery(".lpt-banner-qf-next-btn").css('display','block');
      jQuery(".lpt-banner-qf-btn").on("click", function (e) {
        // Disable buttons
        jQuery(".lpt-banner-qf-btn").prop("disabled", true);

        let contentTypesLength = jQuery(".lpt-qf-form-content-type").length;
        let beforeEqIndex = jQuery(".lpt-qf-form-content-type-active").index();

        // Validate
        if (jQuery(this).data("val") == "next") {
          if (
            jQuery(".lpt-qf-form-content-type-active").hasClass(
              "lpt-qf-form-content-community"
            )
          ) {
            // Community
            if (jQuery(".lpt-qf-form-select-community").val() !== null) {
              jQuery(".lpt-qf-form-input-community-type").attr(
                "value",
                jQuery(".lpt-qf-form-select-community").val()
              );
            } else {
              jQuery(".lpt-banner-qf-error-message").text(
                "Please select a community."
              );
              enableButtons(beforeEqIndex);
              return;
            }
          } else if (
            jQuery(".lpt-qf-form-content-type-active").hasClass(
              "lpt-qf-form-content-name"
            )
          ) {
            // Name
            if (
              jQuery(".lpt-qf-form-input-fname").val()
            ) {
              jQuery(".lpt-qf-form-input-fname-type").attr(
                "value",
                jQuery(".lpt-qf-form-input-fname").val()
              );
            } else {
              jQuery(".lpt-banner-qf-error-message").text(
                "Please enter your full name."
              );
              enableButtons(beforeEqIndex);
              return;
            }
          } else if (
            jQuery(".lpt-qf-form-content-type-active").hasClass(
              "lpt-qf-form-content-phone"
            )
          ) {
            // Phone
            if (jQuery(".lpt-qf-form-input-phone").val()) {
              jQuery(".lpt-qf-form-input-phone-type").attr(
                "value",
                jQuery(".lpt-qf-form-input-phone").val()
              );
            } else {
              jQuery(".lpt-banner-qf-error-message").text(
                "Please enter your phone number."
              );
              enableButtons(beforeEqIndex);
              return;
            }
          } else if (
            jQuery(".lpt-qf-form-content-type-active").hasClass(
              "lpt-qf-form-content-email"
            )
          ) {
            let re = /\S+@\S+\.\S+/;
            // Email
            if (
              jQuery(".lpt-qf-form-input-email").val() &&
              re.test(jQuery(".lpt-qf-form-input-email").val())
            ) {
              jQuery(".lpt-qf-form-input-email-type").attr(
                "value",
                jQuery(".lpt-qf-form-input-email").val()
              );
            } else {
              jQuery(".lpt-banner-qf-error-message").text(
                "Please enter a valid email."
              );
              enableButtons(beforeEqIndex);
              return;
            }
          }

          // Send form
          if (beforeEqIndex == contentTypesLength - 1) {
            jQuery(".lpt-qf-submit").trigger("click");

            // Success message
            jQuery(".lpt-banner-qf-form-container-fields").css(
              "display",
              "none"
            );
            jQuery(".lpt-banner-qf-form-container-success").css(
              "display",
              "block"
            );
          }

          // Address
            if (jQuery(".lpt-qf-form-input-address").val()) {
              jQuery(".lpt-qf-form-input-address-type").attr(
                "value",
                jQuery(".lpt-qf-form-input-address").val()
              );
            } else {
              jQuery(".lpt-banner-qf-error-message").text(
                "Please enter your address."
              );
              enableButtons(beforeEqIndex);
              return;
            }
        }

        // Change active
        jQuery(".lpt-qf-form-content-type-active").removeClass(
          "lpt-qf-form-content-type-active"
        );
        if (jQuery(this).data("val") == "next") {
          jQuery(
            ".lpt-qf-form-content-type:eq(" + (beforeEqIndex + 1) + ")"
          ).addClass("lpt-qf-form-content-type-active");
        } else if (jQuery(this).data("val") == "back") {
          jQuery(
            ".lpt-qf-form-content-type:eq(" + (beforeEqIndex - 1) + ")"
          ).addClass("lpt-qf-form-content-type-active");
        }
        // Clear error message
        jQuery(".lpt-banner-qf-error-message").text("");

        let afterEqIndex = jQuery(".lpt-qf-form-content-type-active").index();

        // Show or hide buttons
        if (afterEqIndex == 0) {
          jQuery(".lpt-banner-qf-next-btn").css("display", "block");
          jQuery(".lpt-banner-qf-back-btn").css("display", "none");
        } else if (afterEqIndex <= 2) {
          jQuery(".lpt-banner-qf-next-btn").css("display", "none");
          jQuery(".lpt-banner-qf-back-btn").css("display", "block");
        } else {
          jQuery(".lpt-banner-qf-next-btn").css("display", "block");
          jQuery(".lpt-banner-qf-back-btn").css("display", "block");
        }

        // Update progress bar
        let progressWidth = (100 / contentTypesLength) * (afterEqIndex + 1);
        jQuery(".lpt-banner-qf-progress-bar-progress").css(
          "width",
          progressWidth + "%"
        );

        // Enable buttons
        enableButtons(afterEqIndex);
      });

      function enableButtons(eqIndex) {
        if (eqIndex == 0) {
          jQuery(".lpt-banner-qf-next-btn").prop("disabled", false);
        } else {
          jQuery(".lpt-banner-qf-btn").prop("disabled", false);
        }
      }

      jQuery(".lpt-qf-form-selection").on("click", function (e) {
        let val = jQuery(this).data("val");

        if (jQuery(this).hasClass("lpt-qf-form-selection-property-type")) {
          // Property Type
          jQuery(".lpt-qf-form-input-property-type").attr("value", val);
        } else if (jQuery(this).hasClass("lpt-qf-form-selection-price-type")) {
          // Price
          jQuery(".lpt-qf-form-input-price-type").attr("value", val);
        } else if (jQuery(this).hasClass("lpt-qf-form-selection-date-type")) {
          // Date
          jQuery(".lpt-qf-form-input-date-type").attr("value", val);
        }

        jQuery(".lpt-banner-qf-next-btn").trigger("click");
      });
    },
  };

  jQuery(document).ready(function () {
    app.quizForm();


    jQuery('.wpcf7-response-output').bind("DOMSubtreeModified", function() {
        var _getsuccess = jQuery('.wpcf7-response-output').text();
        if (_getsuccess == "Thank you for your message. It has been sent.") {
            jQuery('#smhf-form').addClass('hide');
            jQuery('#smhf-success').removeClass('hide');
            jQuery('.lpt-banner-qf-stack').attr('style', 'height: 550px !important');
        }
    });
  });
})(jQuery);

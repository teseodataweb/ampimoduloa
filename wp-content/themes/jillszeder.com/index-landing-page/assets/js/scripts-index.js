(function() {

    var app = {

        initFeaturedCommpopup: function (){

            // jQuery('.fp-list a , #menu-item-1327 li a').each(function(){

            //         jQuery(this).click(function(e){

            //          e.preventDefault();
                                
            //                     jQuery('.autopopup').trigger('click');  

            //                     var url = jQuery(this).attr('href');

            //                     console.log('in');

            //                     document.addEventListener( 'wpcf7mailsent', function( event ) {
            //                         location = url;
            //                     }, false );
                                    
            //         });

            // });

        },

        initFormpopup: function() {
            /* Put testimonials code here */
            jQuery('[data-popup-open],.amh-header-right-btn a').on('click', function(e) {
                e.preventDefault();

                jQuery('body').addClass('popup-active');
                jQuery('.popup-wrapper').addClass('active');
            });

            jQuery('[data-popup-close], .popup-wrapper').on('click', function(e) {
                e.preventDefault();

                jQuery('body').removeClass('popup-active');
                jQuery('.popup-wrapper').removeClass('active');
            });

            jQuery('.popup-wrapper .popup-container').on('click', function(e) {
                e.stopImmediatePropagation();
            });
        },

        initCompops: function() {


                if (window.location.href.indexOf("homes-for-sale-results") > -1 || window.location.href.indexOf("listing-report") > -1) {
                   /* Put testimonials code here */
                    var _checkpopup = location.href;
                    // if (_checkpopup.indexOf('pops=1') > -1) {
                    //     jQuery('.autopopup').trigger('click');
                    // }
                    if (typeof(Storage) !== "undefined") {
                        if((!sessionStorage.getItem("cookie"))){
                            console.log("true");
                            jQuery('.autopopup').trigger('click');
                        }
                    }
                }
         
        },

        initAddParameter: function(sParam) {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++)
            {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam)
                {
                    return sParameterName[1];
                }
            }
        },

        initPopup: function(){
            function setCookie(cname,cvalue,exdays) {
              var d = new Date();
              d.setTime(d.getTime() + (exdays*24*60*60*1000));
              var expires = "expires=" + d.toGMTString();
              document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }

            function getCookie(cname) {
              var name = cname + "=";
              var decodedCookie = decodeURIComponent(document.cookie);
              var ca = decodedCookie.split(';');
              for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                  c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                  return c.substring(name.length, c.length);
                }
              }
              return "";
            }
            var current_url = window.location.href;
            if (getCookie('popup') != 1 && current_url.indexOf('/idx/') == -1) {
                setTimeout(function(){
                        jQuery('.join-network-trigger').click();
                        var expires = (new Date(Date.now()+ 86400*1000)).toUTCString();
                        document.cookie = "popup=1; expires=" + expires + 86400 + ";path=/;"

                        //var message = "popupShowed";
                        //parent.postMessage(message, "*");
                },20000)
            }
        },

        landingPage: function(){
            //LP 1,2 and SF 1,2 Settings

            // localStorage.setItem("lastname", "Smith");
            // localStorage.getItem("lastname");

            if(window.location.href == 'https://www.jillszeder.com/homes-for-sale1/'){
                sessionStorage.setItem("dupPage", "true");
                sessionStorage.setItem("dupLP", "lp1");
            }
            if(window.location.href == 'https://www.jillszeder.com/homes-for-sale2/'){
                sessionStorage.setItem("dupPage", "true");
                sessionStorage.setItem("dupLP", "lp2");
            }
            if(window.location.href == 'https://www.jillszeder.com/sell-my-home-sf1/'){
                sessionStorage.setItem("dupPage", "true");
                sessionStorage.setItem("dupLP", "sf1");
            }
            if(window.location.href == 'https://www.jillszeder.com/sell-my-home-sf2/'){
                sessionStorage.setItem("dupPage", "true");
                sessionStorage.setItem("dupLP", "sf2");
            }

            if(sessionStorage.getItem("dupPage") == "true"){
                if(sessionStorage.getItem("dupLP") == "lp1"){
                    jQuery('.site-name').attr('href','https://www.jillszeder.com/homes-for-sale1/');
                    jQuery('#menu-item-home a').attr('href','https://www.jillszeder.com/homes-for-sale1/');
                }
                if(sessionStorage.getItem("dupLP") == "lp2"){
                    jQuery('.site-name').attr('href','https://www.jillszeder.com/homes-for-sale2/');
                    jQuery('#menu-item-home a').attr('href','https://www.jillszeder.com/homes-for-sale2/');
                }
                if(sessionStorage.getItem("dupLP") == "sf1"){
                    jQuery('.site-name').attr('href','https://www.jillszeder.com/sell-my-home-sf1/');
                    jQuery('#menu-item-home a').attr('href','https://www.jillszeder.com/sell-my-home-sf1/');
                }
                if(sessionStorage.getItem("dupLP") == "sf2"){
                    jQuery('.site-name').attr('href','https://www.jillszeder.com/sell-my-home-sf2/');
                    jQuery('#menu-item-home a').attr('href','https://www.jillszeder.com/sell-my-home-sf2/');
                }
            }


            //POP UP JOIN OUR NETWORK SETTINGS

            //set value of pop-up-jon-status for conditional purposes of pop up form.
            var wpcf7Elm = document.querySelector('#pop-up-jon .wpcf7');
            if(wpcf7Elm == null){
                wpcf7Elm = 0;
            } else {
                wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
                    localStorage.setItem('pop-up-jon-status', 'subscribed');
                    setTimeout(function(){
                        jQuery('.aiosp-content.aios-popup-body').hide(400);
                        jQuery('#pop-up-jon').hide();
                    }, 3000)
                }, false );
            }
            

            //pop up default settings
            jQuery('#pop-up-jon').hide();
            // if(window.location.href.indexOf('/homes-for-sale-exclusive-listings/') > -1){
            if(window.location.href.indexOf('/homes-for-sale-listing-page/?i=') > -1 || window.location.href.indexOf('/homes-for-sale-luxury-homes-lp/?i=') > -1 ){
                if(localStorage.getItem('pop-up-jon-status') == 'subscribed'){
                    jQuery('#pop-up-jon').hide();
                } else {
                    jQuery('#pop-up-jon').show();
                }
            }

            //POPULAR SEARCHES ACCORDION
            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                  panel.style.maxHeight = null;
                } else {
                  panel.style.maxHeight = panel.scrollHeight + "px";
                } 
              });
            }

            jQuery('.cycloneslider-pager').remove();

            //Tagline for LP Buyers Page
            if(window.location.href == 'https://www.jillszeder.com/homes-for-sale/' 
                || window.location.href == 'https://www.jillszeder.com/homes-for-sale1/' 
                || window.location.href == 'https://www.jillszeder.com/homes-for-sale2/'
                || window.location.href == 'https://www.jillszeder.com/luxury-penthouse-for-sale/'
                || window.location.href.indexOf('/homes-for-sale/?utm_source') > -1
                ){
                jQuery('#tagline-content-font-term').append('<strong>EXPLORE <br> LUXURY PENTHOUSES <br> IN MIAMI BEACH</strong>');
            }
            //Stars for Testimonials LP Buyers Page
            for (let i = 1; i <= 5; i++) {
              jQuery('.star_rating_display').append('<img alt="'+i+'" src="https://www.jillszeder.com/wp-content/themes/jillszeder.com/modules/testimonials-post-type/images/star-on.png">&nbsp;')
            }

            //pop up join our network - selected disabled first option
            jQuery("#property option:first").prop('disabled',true).prop('selected',true);

            //Tagline for LP Sellers Page
            // if(window.location.href == 'https://www.jillszeder.com/sell-my-home/'){
            //     jQuery('#tagline-content-font-term').append('<h1>WHAT IS YOUR HOME WORTH?</h1>');
            // }
            jQuery('button.aiosp-close').click(function(){
                jQuery('.aiosp-bg').css('display','none');
                jQuery('.aiosp-wrap').css('display', 'none');
            })


            // LP BUYERS INNER PAGES SETTINGS - EXCLUSIVE LISTINGS
            if(window.location.href == 'https://www.jillszeder.com/homes-for-sale-exclusive-listings/'){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.ip-banner').css('height', '475px');
                jQuery('.custom-breadcrumbs').remove();
                // jQuery(".idxb-container").removeClass('hide');
            }
            // LP BUYERS INNER PAGES SETTINGS - LUXURY CONDO
            if(window.location.href == 'https://www.jillszeder.com/homes-for-sale-luxury-condos/'){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.ip-banner').css('height', '475px');
                jQuery('.custom-breadcrumbs').remove();
                // jQuery(".idxb-container").removeClass('hide');
            }
            // LP BUYERS INNER PAGES SETTINGS - LUXURY HOMES
            if(window.location.href == 'https://www.jillszeder.com/homes-for-sale-luxury-homes/'){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.ip-banner').css('height', '475px');
                jQuery('.custom-breadcrumbs').remove();
                // jQuery(".idxb-container").removeClass('hide');
            }
            // LP SELLERS INNER PAGES SETTINGS - RECENT SALES
            if(window.location.href == 'https://www.jillszeder.com/sell-my-home-recent-sales/'){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.ip-banner').css('height', '475px');
                jQuery('.custom-breadcrumbs').remove();
                // jQuery(".idxb-container").removeClass('hide');
            }
            // LP BUYERS INNER PAGES SETTINGS - Contact us
            if(window.location.href == 'https://www.jillszeder.com/homes-for-sale-contact-us/'){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.custom-breadcrumbs').remove();
            }
            // LP SELLERS INNER PAGES SETTINGS - Contact us
            if(window.location.href == 'https://www.jillszeder.com/sell-my-home-contact-us/'){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.custom-breadcrumbs').remove();
            }
            // LP BUYERS INNER PAGES SETTINGS - Testimonials
            if(window.location.href.indexOf('/homes-for-sale-client-testimonials/') > -1 ){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.custom-breadcrumbs').remove();
            }
            // LP SELLERS INNER PAGES SETTINGS - Testimonials
            if(window.location.href.indexOf('/sell-my-home-client-testimonials/') > -1 ){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.custom-breadcrumbs').remove();
            }

            if(window.location.href.indexOf('/homes-for-sale-exclusive-listings/') > -1 ){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.custom-breadcrumbs').remove();
                jQuery('.ip-banner').css('height', '475px');
            }
            if(window.location.href.indexOf('/homes-for-sale-luxury-homes/') > -1 ){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.custom-breadcrumbs').remove();
                jQuery('.ip-banner').css('height', '475px');
            }
            if(window.location.href.indexOf('/sell-my-home-recent-sales/') > -1 ){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.custom-breadcrumbs').remove();
                jQuery('.ip-banner').css('height', '475px');
            }
            if(window.location.href.indexOf('/homes-for-sale-search-result/') > -1 ){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.custom-breadcrumbs').remove();
                jQuery('.ip-banner').css('height', '475px');
                jQuery('.sres-top-r a').eq(0).attr('href','https://www.jillszeder.com/homes-for-sale-search-properties/');
                jQuery('.sres-top-r a').eq(1).attr('href','https://www.jillszeder.com/homes-for-sale-exclusive-listings/');
            }
            if(window.location.href.indexOf('/homes-for-sale-search-properties/') > -1 ){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.custom-breadcrumbs').remove();
                jQuery('.ip-banner').css('height', '475px');
                jQuery('#form-adv form').attr('action', 'https://www.jillszeder.com/homes-for-sale-search-result/?i=\\/idx/results/listings?start=1');
            }


            if(window.location.href == 'https://www.jillszeder.com/homes-for-sale/' || window.location.href == 'https://www.jillszeder.com/homes-for-sale1/' || window.location.href == 'https://www.jillszeder.com/homes-for-sale2/'){

                jQuery('#hp-fl .fl-single.fl-prop>a').each(function(){
                    var oldUrl = jQuery(this).attr("href");
                    var newUrl = oldUrl.replace("https://homes.jillszeder.com/", "https://www.jillszeder.com/homes-for-sale-listing-page/?i=\\");
                    jQuery(this).attr("href", newUrl);
                });

                jQuery('#hp-qs').hover(function(){
                    jQuery('form').attr('action', 'https://www.jillszeder.com/homes-for-sale-search-result/?i=\\/idx/results/listings?start=1');
                })

                // ;(function ($) {
                //   'use strict';
                //   var defaults = {
                //     url: null,
                //     values: null,
                //     method: "POST",
                //     target: null,
                //     traditional: false,
                //     redirectTop: false
                //   };
                //   $.redirect = function (url, values, method, target, traditional, redirectTop) {
                //     var opts = url;
                //     if (typeof url !== "object") {
                //       var opts = {
                //         url: url,
                //         values: values,
                //         method: method,
                //         target: target,
                //         traditional: traditional,
                //         redirectTop: redirectTop
                //       };
                //     }

                //     var config = $.extend({}, defaults, opts);
                //     var generatedForm = $.redirect.getForm(config.url, config.values, config.method, config.target, config.traditional);
                //     $('body', config.redirectTop ? window.top.document : undefined).append(generatedForm.form);
                //     generatedForm.submit();
                //     generatedForm.form.remove();
                //   };

                //   $.redirect.getForm = function (url, values, method, target, traditional) {
                //     method = (method && ["GET", "POST", "PUT", "DELETE"].indexOf(method.toUpperCase()) !== -1) ? method.toUpperCase() : 'POST';

                //     url = url.split("#");
                //     var hash = url[1] ? ("#" + url[1]) : "";
                //     url = url[0];

                //     if (!values) {
                //       var obj = $.parseUrl(url);
                //       url = obj.url;
                //       values = obj.params;
                //     }

                //     values = removeNulls(values);

                //     var form = $('<form>')
                //       .attr("method", method)
                //       .attr("action", url + hash);


                //     if (target) {
                //       form.attr("target", target);
                //     }

                //     var submit = form[0].submit;
                //     iterateValues(values, [], form, null, traditional);

                //     return { form: form, submit: function () { submit.call(form[0]); } };
                //   }

                //   $.parseUrl = function (url) {

                //     if (url.indexOf('?') === -1) {
                //       return {
                //         url: url,
                //         params: {}
                //       };
                //     }
                //     var parts = url.split('?'),
                //       query_string = parts[1],
                //       elems = query_string.split('&');
                //     url = parts[0];

                //     var i, pair, obj = {};
                //     for (i = 0; i < elems.length; i += 1) {
                //       pair = elems[i].split('=');
                //       obj[pair[0]] = pair[1];
                //     }

                //     return {
                //       url: url,
                //       params: obj
                //     };
                //   };

                //   //Private Functions
                //   var getInput = function (name, value, parent, array, traditional) {
                //     var parentString;
                //     if (parent.length > 0) {
                //       parentString = parent[0];
                //       var i;
                //       for (i = 1; i < parent.length; i += 1) {
                //         parentString += "[" + parent[i] + "]";
                //       }

                //       if (array) {
                //         if (traditional)
                //           name = parentString;
                //         else
                //           name = parentString + "[" + name + "]";
                //       } else {
                //         name = parentString + "[" + name + "]";
                //       }
                //     }

                //     return $("<input>").attr("type", "hidden")
                //       .attr("name", name)
                //       .attr("value", value);
                //   };

                //   var iterateValues = function (values, parent, form, isArray, traditional) {
                //     var i, iterateParent = [];
                //     Object.keys(values).forEach(function (i) {
                //       if (typeof values[i] === "object") {
                //         iterateParent = parent.slice();
                //         iterateParent.push(i);
                //         iterateValues(values[i], iterateParent, form, Array.isArray(values[i]), traditional);
                //       } else {
                //         form.append(getInput(i, values[i], parent, isArray, traditional));
                //       }
                //     });
                //   };

                //   var removeNulls = function (values) {
                //     var propNames = Object.getOwnPropertyNames(values);
                //     for (var i = 0; i < propNames.length; i++) {
                //       var propName = propNames[i];
                //       if (values[propName] === null || values[propName] === undefined) {
                //         delete values[propName];
                //       } else if (typeof values[propName] === 'object') {
                //         values[propName] = removeNulls(values[propName]);
                //       } else if (values[propName].length < 1) {
                //         delete values[propName];
                //       }
                //     }
                //     return values;
                //   };
                // }(window.jQuery || window.Zepto || window.jqlite));

                // jQuery('#hp-fl .fl-single>a').click(function (e) {
                //     e.preventDefault();
                //     var url = jQuery(this).attr('href');
                //     // jQuery.ajax({
                //     //     type: 'post',
                //     //     url: 'https://www.jillszeder.com/homes-for-sale-listing-page/',
                //     //     data: {data: url },
                //     //     success:  function( data ) {
                //     //         console.log("sucessfully passed the url "+url);
                //     //         window.location.href = "https://www.jillszeder.com/homes-for-sale-listing-page/";

                //     //     }
                //     //     // complete: function() {
                //     //     // }
                //     // });

                //     var url_qs = 'https://www.jillszeder.com/homes-for-sale-listing-page/'+url.replace('https://homes.jillszeder.com/','');
                    
                //     jQuery.redirect('https://www.jillszeder.com/homes-for-sale-listing-page/', {'url': url, 'url_qs': url_qs});
                // });
            }

            if(window.location.href.indexOf('homes-for-sale-exclusive-listings') > -1 ){
                jQuery('.fl-list').hover(function(){
                    jQuery('.fl-list>.fl-prop>a').each(function(){
                        var oldUrl = jQuery(this).attr("href");
                        var newUrl = oldUrl.replace("https://homes.jillszeder.com/", "https://www.jillszeder.com/homes-for-sale-listing-page/?i=\\");
                        jQuery(this).attr("href", newUrl);
                    });
                })

                jQuery('.fl-top').hover(function(){
                    jQuery('form').attr('action', 'https://www.jillszeder.com/homes-for-sale-exclusive-listings/?i=\\/idx/results/listings?start=1');
                })
            }

            if(window.location.href.indexOf('sell-my-home-recent-sales') > -1 ){
                jQuery('.fl-list').hover(function(){
                    jQuery('.fl-list>.fl-prop>a').each(function(){
                        var oldUrl = jQuery(this).attr("href");
                        var newUrl = oldUrl.replace("https://homes.jillszeder.com/", "https://www.jillszeder.com/sell-my-home-recent-sales/?i=\\");
                        jQuery(this).attr("href", newUrl);
                    });
                })

                jQuery('.fl-top').hover(function(){
                    jQuery('form').attr('action', 'https://www.jillszeder.com/sell-my-home-recent-sales/?i=\\/idx/results/listings?start=1');
                })
            }

            if(window.location.href.indexOf('homes-for-sale-luxury-homes') > -1 ){
              jQuery('.fl-list').hover(function(){
                jQuery('.fl-list>.fl-prop>a').each(function(){
                  var oldUrl = jQuery(this).attr("href");
                  var newUrl = oldUrl.replace("https://homes.jillszeder.com/", "https://www.jillszeder.com/homes-for-sale-luxury-homes-lp/?i=\\");
                  jQuery(this).attr("href", newUrl);
                });
              })
            }

            if(window.location.href.indexOf('homes-for-sale-search-result') > -1 ){
              jQuery('.sres-list').hover(function(){
                jQuery('.sres-list>.sres-prop>a').each(function(){
                  var oldUrl = jQuery(this).attr("href");
                  var newUrl = oldUrl.replace("https://homes.jillszeder.com/", "https://www.jillszeder.com/homes-for-sale-luxury-homes-lp/?i=\\");
                  jQuery(this).attr("href", newUrl);
                });
              })
            }

            if(window.location.href.indexOf('homes-for-sale-luxury-condos') > -1 ){
              // jQuery('.comm-list').hover(function(){
              //   jQuery('.comm-list>.comm-item>a').each(function(){
              //     var oldUrl = jQuery(this).attr("href");
              //     var newUrl = oldUrl.replace("https://www.jillszeder.com/luxury-condos/", "https://www.jillszeder.com/homes-for-sale-luxury-condos-lp/?i=\\");
              //     jQuery(this).attr("href", newUrl);
              //   });
              // })
                jQuery(window).one('scroll',function(){
                    jQuery('.comm-list>.comm-item>a').each(function(){
                      var oldUrl = jQuery(this).attr("href");
                      var newUrl = oldUrl.replace("https://www.jillszeder.com/luxury-condos/", "https://www.jillszeder.com/homes-for-sale-luxury-condos-lp/?i=");
                      // var newUrl = oldUrl.replace(oldUrl, oldUrl+"?lp=1");
                      jQuery(this).attr("href", newUrl);
                    });
                })
            }

            if(window.location.href.indexOf('/homes-for-sale-listing-page/') > -1 ){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.custom-breadcrumbs').remove();
                jQuery('.ip-banner').css('height', '475px');
            }
            if(window.location.href.indexOf('/homes-for-sale-luxury-homes-lp/') > -1 ){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.custom-breadcrumbs').remove();
                jQuery('.ip-banner').css('height', '475px');
            }
            if(window.location.href.indexOf('/homes-for-sale-luxury-condos-lp/') > -1 ){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.custom-breadcrumbs').remove();
                jQuery('.ip-banner').css('height', '475px');
            }
            if(window.location.href == 'https://www.jillszeder.com/homes-for-sale-luxury-condos/?utm_source=google&utm_medium=cpc&utm_campaign=&utm_term='){
                jQuery('#hp-tagline').remove();
                jQuery('#hp-top').remove();
                jQuery('.ip-banner').css('height', '475px');
                jQuery('.custom-breadcrumbs').remove();
                // jQuery(".idxb-container").removeClass('hide');
            }

            // if(window.location.href == 'https://www.jillszeder.com/homes-for-sale-contact-us/' || window.location.href == 'https://www.jillszeder.com/sell-my-home-contact-us/'){
            //     jQuery('.contact-submit').after('<div class="contact-submit btn-talk-to-agent"><a href="tel:305.722.5721" class="">Talk to an Agent</a></div>');
            // }

            //HEADER SETTINGS
            jQuery(document).ready(function(){
                if(window.location.href.indexOf('?lp=1') > -1){
                    jQuery('header').empty();
                    jQuery('header').append('<header class="header"><div class="main-header"><div id="header-container" class="container"><div class="mh-wrapper"><div class="mh-navs"><nav class="navigation"><div class="menu-main-navigation-container"><div class="logo"><a href="https://www.jillszeder.com/homes-for-sale/" class="site-name" aria-label="Logo"><div class="textwidget custom-html-widget"><img src="https://www.jillszeder.com/wp-content/themes/jillszeder.com/images/logo.png" alt="Jills Zeder Group" class="img-responsive"></div></a></div><ul class="aios-split-nav nav" id="ul-nav"><li id="menu-item-home" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-home jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale/" data-title="Home" aria-label="Home">Home</a></li><li id="menu-item-exclusive-listing" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-exclusive-listing jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-exclusive-listings/" data-title="Exclusive Listings" aria-label="Exclusive Listings">Exclusive Listings</a></li><li id="menu-item-sbpt" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-sbpt jquery-nav-tab-parent"><a href="#" data-title="Search by Property Type" aria-label="Search by Property Type" style="cursor:default;pointer-events:none">Search by Property Type</a><ul class="sub-menu"><li id="menu-item-3454" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3454 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-condos/" data-title="List with us">Luxury Condos</a></li><li id="menu-item-3455" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3455 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-homes/" data-title="Our Numbers">Luxury Homes</a></li></ul></li><li id="menu-item-contact-us" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-contact-us jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-contact-us/" data-title="Contact Us" aria-label="Contact Us">Contact Us</a></li></ul></div></nav></div><div class="mh-contact"><div class="textwidget custom-html-widget"><ul class="contact-list"><li><button class="btn btn-lg" id="header-contact-btn"><span class="ai-font-phone" role="icon"></span> Call Us</button><ul><li><a href="tel:+1.305.722.5721"><span>Coral Gables Office</span> 305.722.5721</a></li><li><a href="tel:+1.305.341.7447"><span>Miami Beach Office</span> 305.341.7447</a></li></ul></li></ul></div></div></div></div></div><div class="header-sm blend-white"><div class="sm-wrapper"><div class="textwidget custom-html-widget"><ul class="sm-list"><li><a href="https://www.facebook.com/thejillszedergroup/" target="_blank" aria-label="Facebook" rel="noopener noreferrer"><em role="icon" class="ai-font-facebook"></em> <em class="hidden">Facebook</em></a></li><li><a href="https://www.youtube.com/c/thejillsteam/featured" target="_blank" aria-label="Youtube" rel="noopener noreferrer"><em role="icon" class="ai-font-youtube"></em> <em class="hidden">Youtube</em></a></li><li><a href="https://www.linkedin.com/company/1631196/" target="_blank" aria-label="Linkedin" rel="noopener noreferrer"><em role="icon" class="ai-font-linkedin"></em> <em class="hidden">Linkedin</em></a></li><li><a href="https://twitter.com/jillszeder" target="_blank" aria-label="Twitter" rel="noopener noreferrer"><em role="icon" class="ai-font-twitter"></em> <em class="hidden">Twitter</em></a></li><li class="fixed-instagram"><span><em role="icon" class="ai-font-instagram"></em></span><ul><li><a href="https://www.instagram.com/jillszedergables" target="_blank" aria-label="Instagram" rel="noopener noreferrer"><em role="icon" class="ai-font-instagram"></em> Coral Gables</a></li><li><a href="https://www.instagram.com/jillszederbeach/" target="_blank" aria-label="Instagram" rel="noopener noreferrer"><em role="icon" class="ai-font-instagram"></em> Miami Beach</a></li></ul></li></ul></div></div></div><div class="fixed-header"><div class="fh-wrapper"><div class="fh-logo"><a href="https://www.jillszeder.com/homes-for-sale/" class="site-name"><div class="textwidget custom-html-widget"><img src="https://www.jillszeder.com/wp-content/themes/jillszeder.com/images/logo.png" alt="Jills Zeder Group" class="img-responsive"></div></a></div><div class="fh-nav"><nav class="navigation"><div class="menu-main-navigation-container"><ul id="fixednav" class="menu"><li id="menu-item-home" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-home jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale/" data-title="Home" aria-label="Home">Home</a></li><li id="menu-item-exclusive-listing" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-exclusive-listing jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-exclusive-listings/" data-title="Exclusive Listings" aria-label="Exclusive Listings">Exclusive Listings</a></li><li id="menu-item-sbpt" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-sbpt jquery-nav-tab-parent"><a href="#" data-title="Search by Property Type" aria-label="Search by Property Type" style="cursor:default">Search by Property Type</a><ul class="sub-menu"><li id="menu-item-3454" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3454 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-condos/" data-title="List with us">Luxury Condos</a></li><li id="menu-item-3455" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3455 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-homes/" data-title="Our Numbers">Luxury Homes</a></li></ul></li><li id="menu-item-contact-us" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-contact-us jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-contact-us/" data-title="Contact Us" aria-label="Contact Us">Contact Us</a></li></ul></div></nav></div><div class="fh-contact"><div class="textwidget custom-html-widget"><ul><li><a href="tel:+1.305.722.5721"><span>Coral Gables Office</span> 305.722.5721</a></li><li><a href="tel:+1.305.341.7447"><span>Miami Beach Office</span> 305.341.7447</a></li><li><div class="nav-trigger"><span></span> <span></span> <span></span></div></li></ul></div></div></div></div><div class="mobile-nav"><div class="mobnav-close"><span role="close" class="ai-font-close-b"></span></div><div class="nav-wrapper"><nav class="navigation"><div class="menu-main-navigation-container"><ul id="mobnav" class="menu"><li id="menu-item-home" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-home jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale/" data-title="Home" aria-label="Home">Home</a></li><li id="menu-item-exclusive-listing" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-exclusive-listing jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-exclusive-listings/" data-title="Exclusive Listings" aria-label="Exclusive Listings">Exclusive Listings</a></li><li id="menu-item-sbpt" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-sbpt jquery-nav-tab-parent"><a href="#" data-title="Search by Property Type" aria-label="Search by Property Type" style="cursor:default">Search by Property Type</a><ul class="sub-menu"><li id="menu-item-3454" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3454 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-condos/" data-title="List with us">Luxury Condos</a></li><li id="menu-item-3455" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3455 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-homes/" data-title="Our Numbers">Luxury Homes</a></li></ul></li><li id="menu-item-contact-us" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-contact-us jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-contact-us/" data-title="Contact Us" aria-label="Contact Us">Contact Us</a></li></ul></div></nav></div></div></header>');
                    jQuery('.custom-breadcrumbs').remove();
                    jQuery('.ip-banner').css('height', '475px');
                    
                    jQuery('.lcd-page-links>a').eq(0).attr('href', 'https://www.jillszeder.com/homes-for-sale-luxury-condos/');
                    jQuery('.lcd-page-links>a').eq(1).attr('href', 'https://www.jillszeder.com/homes-for-sale-exclusive-listings/');
                   
                }

                if(window.location.href.indexOf('/homes-for-sale/?utm_source') > -1 
                    || window.location.href.indexOf('/sell-my-home/?utm_source') > -1
                    || window.location.href.indexOf('/homes-for-sale-luxury-homes/?utm_source') > -1
                    || window.location.href.indexOf('/homes-for-sale-luxury-condos/?utm_source') > -1
                    ){
                    jQuery('header').empty();
                    jQuery('main').append('<header class="header"><div class="main-header"><div id="header-container" class="container"><div class="mh-wrapper"><div class="mh-navs"><nav class="navigation"><div class="menu-main-navigation-container"><div class="logo"><a href="https://www.jillszeder.com/homes-for-sale/" class="site-name" aria-label="Logo"><div class="textwidget custom-html-widget"><img src="https://www.jillszeder.com/wp-content/themes/jillszeder.com/images/logo.png" alt="Jills Zeder Group" class="img-responsive"></div></a></div><ul class="aios-split-nav nav" id="ul-nav"><li id="menu-item-home" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-home jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale/" data-title="Home" aria-label="Home">Home</a></li><li id="menu-item-exclusive-listing" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-exclusive-listing jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-exclusive-listings/" data-title="Exclusive Listings" aria-label="Exclusive Listings">Exclusive Listings</a></li><li id="menu-item-sbpt" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-sbpt jquery-nav-tab-parent"><a href="#" data-title="Search by Property Type" aria-label="Search by Property Type" style="cursor:default;pointer-events:none">Search by Property Type</a><ul class="sub-menu"><li id="menu-item-3454" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3454 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-condos/" data-title="List with us">Luxury Condos</a></li><li id="menu-item-3455" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3455 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-homes/" data-title="Our Numbers">Luxury Homes</a></li></ul></li><li id="menu-item-contact-us" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-contact-us jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-contact-us/" data-title="Contact Us" aria-label="Contact Us">Contact Us</a></li></ul></div></nav></div><div class="mh-contact"><div class="textwidget custom-html-widget"><ul class="contact-list"><li><button class="btn btn-lg" id="header-contact-btn"><span class="ai-font-phone" role="icon"></span> Call Us</button><ul><li><a href="tel:+1.305.722.5721"><span>Coral Gables Office</span> 305.722.5721</a></li><li><a href="tel:+1.305.341.7447"><span>Miami Beach Office</span> 305.341.7447</a></li></ul></li></ul></div></div></div></div></div><div class="header-sm blend-white"><div class="sm-wrapper"><div class="textwidget custom-html-widget"><ul class="sm-list"><li><a href="https://www.facebook.com/thejillszedergroup/" target="_blank" aria-label="Facebook" rel="noopener noreferrer"><em role="icon" class="ai-font-facebook"></em> <em class="hidden">Facebook</em></a></li><li><a href="https://www.youtube.com/c/thejillsteam/featured" target="_blank" aria-label="Youtube" rel="noopener noreferrer"><em role="icon" class="ai-font-youtube"></em> <em class="hidden">Youtube</em></a></li><li><a href="https://www.linkedin.com/company/1631196/" target="_blank" aria-label="Linkedin" rel="noopener noreferrer"><em role="icon" class="ai-font-linkedin"></em> <em class="hidden">Linkedin</em></a></li><li><a href="https://twitter.com/jillszeder" target="_blank" aria-label="Twitter" rel="noopener noreferrer"><em role="icon" class="ai-font-twitter"></em> <em class="hidden">Twitter</em></a></li><li class="fixed-instagram"><span><em role="icon" class="ai-font-instagram"></em></span><ul><li><a href="https://www.instagram.com/jillszedergables" target="_blank" aria-label="Instagram" rel="noopener noreferrer"><em role="icon" class="ai-font-instagram"></em> Coral Gables</a></li><li><a href="https://www.instagram.com/jillszederbeach/" target="_blank" aria-label="Instagram" rel="noopener noreferrer"><em role="icon" class="ai-font-instagram"></em> Miami Beach</a></li></ul></li></ul></div></div></div><div class="fixed-header"><div class="fh-wrapper"><div class="fh-logo"><a href="https://www.jillszeder.com/homes-for-sale/" class="site-name"><div class="textwidget custom-html-widget"><img src="https://www.jillszeder.com/wp-content/themes/jillszeder.com/images/logo.png" alt="Jills Zeder Group" class="img-responsive"></div></a></div><div class="fh-nav"><nav class="navigation"><div class="menu-main-navigation-container"><ul id="fixednav" class="menu"><li id="menu-item-home" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-home jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale/" data-title="Home" aria-label="Home">Home</a></li><li id="menu-item-exclusive-listing" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-exclusive-listing jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-exclusive-listings/" data-title="Exclusive Listings" aria-label="Exclusive Listings">Exclusive Listings</a></li><li id="menu-item-sbpt" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-sbpt jquery-nav-tab-parent"><a href="#" data-title="Search by Property Type" aria-label="Search by Property Type" style="cursor:default">Search by Property Type</a><ul class="sub-menu"><li id="menu-item-3454" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3454 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-condos/" data-title="List with us">Luxury Condos</a></li><li id="menu-item-3455" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3455 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-homes/" data-title="Our Numbers">Luxury Homes</a></li></ul></li><li id="menu-item-contact-us" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-contact-us jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-contact-us/" data-title="Contact Us" aria-label="Contact Us">Contact Us</a></li></ul></div></nav></div><div class="fh-contact"><div class="textwidget custom-html-widget"><ul><li><a href="tel:+1.305.722.5721"><span>Coral Gables Office</span> 305.722.5721</a></li><li><a href="tel:+1.305.341.7447"><span>Miami Beach Office</span> 305.341.7447</a></li><li><div class="nav-trigger"><span></span> <span></span> <span></span></div></li></ul></div></div></div></div><div class="mobile-nav"><div class="mobnav-close"><span role="close" class="ai-font-close-b"></span></div><div class="nav-wrapper"><nav class="navigation"><div class="menu-main-navigation-container"><ul id="mobnav" class="menu"><li id="menu-item-home" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-home jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale/" data-title="Home" aria-label="Home">Home</a></li><li id="menu-item-exclusive-listing" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-exclusive-listing jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-exclusive-listings/" data-title="Exclusive Listings" aria-label="Exclusive Listings">Exclusive Listings</a></li><li id="menu-item-sbpt" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-sbpt jquery-nav-tab-parent"><a href="#" data-title="Search by Property Type" aria-label="Search by Property Type" style="cursor:default">Search by Property Type</a><ul class="sub-menu"><li id="menu-item-3454" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3454 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-condos/" data-title="List with us">Luxury Condos</a></li><li id="menu-item-3455" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3455 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-homes/" data-title="Our Numbers">Luxury Homes</a></li></ul></li><li id="menu-item-contact-us" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-contact-us jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-contact-us/" data-title="Contact Us" aria-label="Contact Us">Contact Us</a></li></ul></div></nav></div></div></header>');
                    jQuery('.custom-breadcrumbs').remove();
                    jQuery('.ip-banner').css('height', '475px');
                    
                    jQuery('.lcd-page-links>a').eq(0).attr('href', 'https://www.jillszeder.com/homes-for-sale-luxury-condos/');
                    jQuery('.lcd-page-links>a').eq(1).attr('href', 'https://www.jillszeder.com/homes-for-sale-exclusive-listings/');
                   
                }
            })

		jQuery('#mobnav li.no-sub-menu').each( function(){
			jQuery(this).find('a').addClass('clicked_once');
		});

		//jQuery('#mobnav li.no-sub-menu a').click()


        //LP HOME VALUATION OPTIMIZATION
        setTimeout(function() {
            // jQuery('.cycloneslider-slide canvas').attr('style',"background-image: url('https://www.jillszeder.com/wp-content/uploads/2020/06/slide4-new.jpg');");
        }, 300);

        if(window.location.href == "https://www.jillszeder.com/sell-my-home-sf/"){
            jQuery('.lpt-banner-qf-btn').click(function(){
                jQuery('.lpt-banner-qf-form').css('padding','30px 20px 50px').css('margin','unset');
                jQuery('.wpcf7-response-output').css('margin','20px 0px 20px 0px')
            })
        }
        


        }//end of landingPage();

    }

    jQuery(document).ready(function() {

            app.landingPage();

        app.initPopup();
        // app.initFeaturedCommpopup();
        app.initFormpopup();
        app.initCompops();
        setTimeout(function() {
	        jQuery('a').each(function(){
	            if (jQuery(this).attr('href') != '#') {
	                
	                var link = jQuery(this).attr('href');
	                if (app.initAddParameter('index') || window.location.href.indexOf('/index') > -1) {
	                    if ((link.indexOf('?pops=1') > -1) || link == 'https://www.clientdomain.com/index/' ){
	                        jQuery(this).attr('href');
	                    } else {
	                        
	                        jQuery(this).attr('href', link + '?index=1');
	                    }
	                }
	            }
	        });

	        if(!jQuery('.sres-prop').length || jQuery('#IDX-pagination-pagers-footer option').length == 1){
	    		jQuery('.sres-pagination').hide();
	    	}
        }, 1000);



        jQuery('.popup-form .wpcf7-submit').click(function() {

            setTimeout(function() {
                var _checkok = jQuery('.wpcf7-mail-sent-ok').text();

                if (_checkok) {

                    if (typeof(Storage) !== "undefined") {
					    if(!sessionStorage.getItem("cookie")){
					        console.log("true");
					        sessionStorage.setItem("cookie", 1);
					    }
					}
					jQuery('.popup-close').trigger('click');
                }

            }, 3000);

        });
        
        jQuery(window).resize(function () {
            if (jQuery(window).width() < 992) {
                jQuery(window).scroll(function () {});
            }
            else {
                jQuery(window).scroll(function () {
                    if (jQuery(this).scrollTop() > 100) {
                        jQuery('.header').addClass('fixed');
                        jQuery('#header-container').hide();
                    }
                    else {
                        jQuery('.header').removeClass('fixed');
                        jQuery('#header-container').show();
                    }
                });
            }
        }).resize();
        
        detectWidth();
        jQuery(window).resize(function () {
            detectWidth();
        });

        function detectWidth() {
            var devw = jQuery(window).width();
            if (devw > 991) {
                //console.log("desktop");
                jQuery('.slidehow-content-mob .slideshow-form').appendTo('.slidehow-content .col-md-4');
                jQuery('.slidehow-content-mob .index-home-valuation').appendTo('.slidehow-content .container .row:last-child .col-md-12');
            }
            else if (devw <= 991) {
                //console.log("mobile");
                jQuery('.slidehow-content .slideshow-form').appendTo('.slidehow-content-mob .col-md-4');
                jQuery('.slidehow-content .index-home-valuation').appendTo('.slidehow-content-mob .col-md-12');
            }
        };
        
        jQuery('#idx-custom-form').submit(function (e) {
               e.preventDefault();
               // to be change to results page of the site 
               var _url = 'https://www.clientdomain.com/homes-for-sale-results/';

               // to be changed to organizer login save search of the site
               var _url_2 = 'https://www.clientdomain.com/property-organizer-edit-saved-search-submit/';

               var firstName = jQuery('input[name="firstName"]').val();
               var lastName = jQuery('input[name="lastName"]').val();
               var newEmail = jQuery('input[name="newEmail"]').val();
               var phone = jQuery('input[name="phone"]').val();

               
               var _city = jQuery('select.ccity option:selected').val();
               var _ptype = jQuery('select.cptype option:selected').val();
               var _cbed = jQuery('select.cbed option:selected').val();
               var _cbath = jQuery('select.cbath option:selected').val();
               var _cminListPrice = jQuery('.cminListPrice').val();
               var _cmaxListPrice = jQuery('.cmaxListPrice').val();
               // var _carcres = jQuery('.carcres').val();

               
               var _combine = _url + "/?index=1&cityId=" + _city + "&propertyType=" + _ptype + "&bedrooms=" + _cbed + "&bathCount=" + _cbath + "&minListPrice=" + _cminListPrice + "&maxListPrice=" + _cmaxListPrice;

               var _combine_2 = _url_2 + "/?index=1&pops=1&firstName="+firstName+"&lastName="+lastName+"&newEmail="+newEmail+"&cityId="+_city+"&property-type="+_ptype+"&bed="+_cbed+"&bath="+_cbath+"&minListPrice="+_cminListPrice+"&maxListPrice="+_cmaxListPrice+"&next=next";


               jQuery('.autopopup_confirmation_body').find('.dynamic-email').text(newEmail);
               jQuery('.autopopup_confirmation_body').find('.sprt-link').attr("href", _combine);
               jQuery('.autopopup_confirmation').trigger('click');

               jQuery.ajax({
                url: _url_2 + "/?index=1&pops=1&firstName="+firstName+"&lastName="+lastName+"&newEmail="+newEmail+"&cityId="+_city+"&property-type="+_ptype+"&bed="+_cbed+"&bath="+_cbath+"&minListPrice="+_cminListPrice+"&maxListPrice="+_cmaxListPrice+"&next=next", 
                success: function(result){


                    var counter = 10;
                    var interval = setInterval(function() {
                        counter--;
                        // Display 'counter' wherever you want to display it.
                        if (counter <= 0) {
                                clearInterval(interval);
                                setTimeout(function(){
                                    jQuery('.autopopup_confirmation_body .popup-close').trigger('click');
                                    window.location.href = _combine;
                                },1000)
                                
                            return;
                        }else{
                            jQuery('.autopopup_confirmation_body').find('.timer-sec').text(counter);
                        }
                    }, 1000);
                      
          
                    }
                });
               

               // window.location.href = _combine;
               // window.open(_combine_2);
           });


        // ACCORDION CLOSE BUTTON
        jQuery('#hp-popular-searches-content .close-accordion').on('click', function () {
            jQuery('#hp-popular-searches-content .panel').addClass('close')
            jQuery('#hp-popular-searches-content .accordion').removeClass('active')
        });
        jQuery('#hp-popular-searches-content .accordion').on('click', function () {
            jQuery('#hp-popular-searches-content .panel').removeClass('close')
        });

    });

    jQuery(window).on('load', function() {

    });

    jQuery(window).on('resize', function() {

    });

})();
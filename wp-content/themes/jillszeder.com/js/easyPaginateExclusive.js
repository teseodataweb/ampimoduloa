/*
* jQuery easyShare plugin
* Update on 04 april 2017
* Version 1.2
*
* Licensed under GPL <http://en.wikipedia.org/wiki/GNU_General_Public_License>
* Copyright (c) 2008, St?hane Litou <contact@mushtitude.com>
* All rights reserved.
*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

(function($){
$.fn.easyPaginateExclusive = function (options) {
    var defaults = {
        paginateElement: 'li',
        hashPage: 'page',
        elementsPerPage: 10,
        effect: 'default',
        slideOffset: 200,
        firstButton: false,
        firstButtonText: false,
        lastButton: false,
        lastButtonText: false,        
        prevButton: true,
        prevButtonText: '« PREV',        
        nextButton: true,
        nextButtonText: 'NEXT »'
    }
        
    return this.each (function (instance) {        
        
        var plugin = {};
        var active = '';
        plugin.el = $(this);
        plugin.el.addClass('easyPaginateList');
        
        plugin.settings = {
            pages: 0,
            objElements: Object,
            currentPage: 1
        }
        
        var getNbOfPages = function() {
            return Math.ceil(plugin.settings.objElements.length / plugin.settings.elementsPerPage);         
        };
        
        var displayNav = function() {


            htmlNav = '<div class="easyPaginateNav ip-fp-pagination"><div class="ip-fp-pagi-inner">';
            
            if(plugin.settings.firstButton) {
                htmlNav += '<span><a href="#'+plugin.settings.hashPage+':1" title="First page" rel="1" class="first">'+plugin.settings.firstButtonText+'</a></span>';
            }
            
            if(plugin.settings.prevButton) {
                htmlNav += '<span><a href="" title="Previous" rel="" class="prev" style="display: none;">'+plugin.settings.prevButtonText+'</a></span>';
            }
            
            for(i = 1;i <= plugin.settings.pages;i++) {
                if(plugin.settings.pages < 6){
                    if(i <= plugin.settings.pages){
                        if(i==1){
                            active = 'class="active"';
                        }else{
                            active = '';  
                        }
                        htmlNav += '<span '+active+'><a href="#'+plugin.settings.hashPage+':'+i+'" title="Page '+i+'" rel="'+i+'" class="page">'+i+'</a></span>';
                    }

                }else{
                    if(i < plugin.settings.pages){
                        if(i==1){
                            active = 'class="active"';
                        }else{
                            if(i > 6 && i < plugin.settings.pages){
                                active = 'class="hide"';   
                            }else{
                               active = '';  
                            }
                            
                        }
                        htmlNav += '<span '+active+'><a href="#'+plugin.settings.hashPage+':'+i+'" title="Page '+i+'" rel="'+i+'" class="page">'+i+'</a></span>';
                    }
                    if(i == plugin.settings.pages && plugin.settings.pages > 6){
                        if(i == plugin.settings.pages){
                            active = '';
                        }
                        
                        htmlNav += '<label><a class="page">...</a></label>';
                        htmlNav += '<span '+active+'><a href="#'+plugin.settings.hashPage+':'+i+'" title="Page '+i+'" rel="'+i+'" class="page">'+i+'</a></span>';
                    }
                }
            };
            
            if(plugin.settings.nextButton) {
                htmlNav += '<span><a href="" title="Next" rel="" class="next">'+plugin.settings.nextButtonText+'</a></span>';

            }
            
            if(plugin.settings.lastButton) {
                htmlNav += '<span><a href="#'+plugin.settings.hashPage+':'+plugin.settings.pages+'" title="Last page" rel="'+plugin.settings.pages+'" class="last">'+plugin.settings.lastButtonText+'</a></span>';
            }
            
            htmlNav += '</div></div>';
            plugin.nav = $(htmlNav);
            plugin.nav.css({
                'width': plugin.el.width()
            });
            plugin.el.after(plugin.nav);

            var elSelector = '#' + plugin.el.get(0).id + ' + ';
            $(elSelector + ' .easyPaginateNav a.page,'
                + elSelector + ' .easyPaginateNav a.first,'
                + elSelector + ' .easyPaginateNav a.last').on('click', function(e) {
                e.preventDefault();
                displayPage($(this).attr('rel'));  
                jQuery( '.ip-fp-pagi-inner span' ).each(function() {
                  jQuery( this ).removeClass('active');
                });
                jQuery(this).parents().addClass('active');   

                var lastpage = parseInt($(this).attr('rel')) + 1;
                if(plugin.settings.pages > 6){
                    lastpage = parseInt($(this).attr('rel'));
                }
                if(plugin.settings.pages < 6){
                    lastpage = parseInt($(this).attr('rel'));
                }

                if($(this).attr('rel') == 1){
                    jQuery('.exclusive-section .ip-fp-pagi-inner span .prev').hide(); 
                }else{
                    jQuery('.exclusive-section .ip-fp-pagi-inner span .prev').show(); 
                }
                if(lastpage == plugin.settings.pages || lastpage > plugin.settings.pages){
                    jQuery('.exclusive-section .ip-fp-pagi-inner span .next').hide(); 
                }else{
                    jQuery('.exclusive-section .ip-fp-pagi-inner span .next').show();
                }
                if( $(this).attr('rel') == plugin.settings.pages ){
                    var clast = parseInt($(this).attr('rel')) + 1 ;
                    jQuery('.exclusive-section .ip-fp-pagi-inner span a').removeClass('current'); 
                    jQuery('.exclusive-section .ip-fp-pagi-inner label a').removeClass('current'); 
                    jQuery('.exclusive-section .ip-fp-pagi-inner span:eq('+ clast  +') a').addClass('current');   
                }
                      
            });

            $(elSelector + ' .easyPaginateNav a.prev').on('click', function(e) {
                e.preventDefault();
                page = plugin.settings.currentPage > 1?parseInt(plugin.settings.currentPage) - 1:1;
                displayPage(page);

                jQuery( '.ip-fp-pagi-inner span' ).each(function() {
                    jQuery(this).removeClass('active');
                    var com = jQuery( this ).find('a').attr('rel');
                    if(com == page ){
                        jQuery(this).addClass('active');
                    }
                });

                if(page == 1){
                    jQuery('.exclusive-section .ip-fp-pagi-inner span .prev').hide(); 
                }else{
                    jQuery('.exclusive-section .ip-fp-pagi-inner span .prev').show(); 
                }
                if(page > 6){
                    jQuery('.exclusive-section .ip-fp-pagi-inner span').removeClass('hide');
                    jQuery('.exclusive-section .ip-fp-pagi-inner label').hide();
                }if(page < plugin.settings.pages){
                    jQuery('.exclusive-section .ip-fp-pagi-inner span .next').show()
                }


            });

            $(elSelector + ' .easyPaginateNav a.next').on('click', function(e) {
                e.preventDefault();
                page = plugin.settings.currentPage < plugin.settings.pages?parseInt(plugin.settings.currentPage) + 1:plugin.settings.pages;
                displayPage(page);

                var lastpage = page + 1;
                if(plugin.settings.pages > 6){
                    lastpage = page - 1;
                }
                if(plugin.settings.pages < 6){
                    lastpage = page;
                }

                jQuery( '.exclusive-section .ip-fp-pagi-inner span' ).each(function() {
                    jQuery(this).removeClass('active');
                    var com = jQuery( this ).find('a').attr('rel');
                    if(com == page ){
                        jQuery(this).addClass('active');
                    }
                });

                if(page == 1){
                    jQuery('.exclusive-section .ip-fp-pagi-inner span .prev').hide(); 
                }else{
                    jQuery('.exclusive-section .ip-fp-pagi-inner span .prev').show(); 
                }
                if(page > 6){
                    jQuery('.exclusive-section .ip-fp-pagi-inner span').removeClass('hide');
                    jQuery('.exclusive-section .ip-fp-pagi-inner label').hide();
                    jQuery('.exclusive-section .ip-fp-pagi-inner span:eq(0)').show();
                }if(page == plugin.settings.pages){
                    var last = page + 1;
                    jQuery('.exclusive-section .ip-fp-pagi-inner span:eq('+last+') a').addClass('current');
                    jQuery('.exclusive-section .ip-fp-pagi-inner label').hide();
                    jQuery('.exclusive-section .ip-fp-pagi-inner span .next').hide();
                }else{
                    jQuery('.exclusive-section .ip-fp-pagi-inner span:last-child').show();
                    jQuery('.exclusive-section .ip-fp-pagi-inner span .next').show()              
                }
                if(lastpage == plugin.settings.pages ){
                    jQuery('.exclusive-section .ip-fp-pagi-inner span .next').hide();
                }

            });
        };
        
        var displayPage = function(page, forceEffect) {
            if(plugin.settings.currentPage != page) {
                plugin.settings.currentPage = parseInt(page);
                offsetStart = (page - 1) * plugin.settings.elementsPerPage;
                offsetEnd = page * plugin.settings.elementsPerPage;
                if(typeof(forceEffect) != 'undefined') {
                    eval("transition_"+forceEffect+"("+offsetStart+", "+offsetEnd+")");
                }else {
                    eval("transition_"+plugin.settings.effect+"("+offsetStart+", "+offsetEnd+")");
                }
                
                plugin.nav.find('.current').removeClass('current');
                plugin.nav.find('a.page:eq('+(page - 1)+')').addClass('current');
                
                switch(plugin.settings.currentPage) {
                    case 1:
                        $('.easyPaginateNav a', plugin).removeClass('disabled');
                        $('.easyPaginateNav a.first, .easyPaginateNav a.prev', plugin).addClass('disabled');
                        break;
                    case plugin.settings.pages:
                        $('.easyPaginateNav a', plugin).removeClass('disabled');
                        $('.easyPaginateNav a.last, .easyPaginateNav a.next', plugin).addClass('disabled');
                        break;
                    default:
                        $('.easyPaginateNav a', plugin).removeClass('disabled');
                        break;
                }
            }
        };
        
        var transition_default = function(offsetStart, offsetEnd) {
            plugin.currentElements.hide();
            plugin.currentElements = plugin.settings.objElements.slice(offsetStart, offsetEnd).clone();
            plugin.el.html(plugin.currentElements);
            plugin.currentElements.show();
        };
        
        var transition_fade = function(offsetStart, offsetEnd) {
            plugin.currentElements.fadeOut();
            plugin.currentElements = plugin.settings.objElements.slice(offsetStart, offsetEnd).clone();
            plugin.el.html(plugin.currentElements);
            plugin.currentElements.fadeIn();
        };
        
        var transition_slide = function(offsetStart, offsetEnd) {
            plugin.currentElements.animate({
                'margin-left': plugin.settings.slideOffset * -1,
                'opacity': 0
            }, function() {
                $(this).remove();
            });
            
            plugin.currentElements = plugin.settings.objElements.slice(offsetStart, offsetEnd).clone();
            plugin.currentElements.css({
                'margin-left': plugin.settings.slideOffset,
                'display': 'block',
                'opacity': 0,
                'min-width': plugin.el.width() / 2
            });
            plugin.el.html(plugin.currentElements);
            plugin.currentElements.animate({
                'margin-left': 0,
                'opacity': 1
            });
        };
                
        var transition_climb = function(offsetStart, offsetEnd) {            
            plugin.currentElements.each(function(i) {
                var $objThis = $(this);
                setTimeout(function() {
                    $objThis.animate({
                        'margin-left': plugin.settings.slideOffset * -1,
                        'opacity': 0
                    }, function() {
                        $(this).remove();
                    });
                }, i * 200);
            });
            
            plugin.currentElements = plugin.settings.objElements.slice(offsetStart, offsetEnd).clone();
            plugin.currentElements.css({
                'margin-left': plugin.settings.slideOffset,
                'display': 'block',
                'opacity': 0,
                'min-width': plugin.el.width() / 2
            });
            plugin.el.html(plugin.currentElements);
            plugin.currentElements.each(function(i) {
                var $objThis = $(this);
                setTimeout(function() {
                    $objThis.animate({
                        'margin-left': 0,
                        'opacity': 1
                    });
                }, i * 200);
            });
        };
                
        plugin.settings = $.extend({}, defaults, options);
        
        plugin.currentElements = $([]);
        plugin.settings.objElements = plugin.el.find(plugin.settings.paginateElement);
        plugin.settings.pages = getNbOfPages();
        if(plugin.settings.pages > 1) {
            plugin.el.html();
    
            // Here we go
            displayNav();
            
            page = 1;
            if(document.location.hash.indexOf('#'+plugin.settings.hashPage+':') != -1) {
                page = parseInt(document.location.hash.replace('#'+plugin.settings.hashPage+':', ''));
                if(page.length <= 0 || page < 1 || page > plugin.settings.pages) {
                    page = 1;
                }
            }
            
            displayPage(page, 'default');
        }
    });
};
})(jQuery);
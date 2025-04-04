(function($) {
    "use strict";
    $(document).on('ready', function() {
        $(window).on('scroll', function() {
            var sticky = $('.theme-menu-wrapper'),
                scroll = $(window).scrollTop();
            if (scroll >= 190) sticky.addClass('fixed');
            else sticky.removeClass('fixed')
        });
        var menu = $("#mega-menu-holder");
        if (menu.length) {
            menu.slimmenu({
                resizeWidth: '991',
                animSpeed: 'medium',
                indentChildren: !0,
            })
        }
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 80,
            mobile: !0,
            live: !0,
        });
        wow.init();
        $("input,textarea").each(function() {
            $(this).data('holder', $(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder', '')
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder', $(this).data('holder'))
            })
        });
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 200) {
                $('.scroll-top').fadeIn()
            } else {
                $('.scroll-top').fadeOut()
            }
        });
        $('.scroll-top').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
            return !1
        });
        var banner = $("#theme-main-banner");
        if (banner.length) {
            banner.camera({
                height: '780px',
                pagination: !0,
                navigation: !1,
                thumbnails: !1,
                playPause: !1,
                pauseOnClick: !1,
                autoPlay: !0,
                hover: !1,
                overlayer: !0,
                loader: 'none',
                minHeight: '400px',
                time: 6000,
            })
        };
        var timer = $('.timer');
        if (timer.length) {
            timer.appear(function() {
                timer.countTo()
            })
        }
        var fancy = $(".fancybox");
        if (fancy.length) {
            fancy.fancybox({
                arrows: !0,
                animationEffect: "zoom-in-out",
                transitionEffect: "zoom-in-out",
            })
        }
        var plang = $('#polyglotLanguageSwitcher');
        if (plang.length) {
            plang.polyglotLanguageSwitcher({
                effect: 'fade',
                testMode: !0,
                onChange: function(evt) {
                    alert("The selected language is: " + evt.selectedItem)
                }
            })
        };
        var tSlider = $(".top-features-slide");
        if (tSlider.length) {
            tSlider.owlCarousel({
                loop: !0,
                nav: !1,
                dots: !1,
                autoplay: !0,
                autoplayTimeout: 4000,
                smartSpeed: 1200,
                autoplayHoverPause: !0,
                lazyLoad: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    500: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1300: {
                        items: 4,
                        autoplay: !1,
                    }
                },
            })
        }
        var mSlider = $(".testimonial-slider");
        if (mSlider.length) {
            mSlider.owlCarousel({
                loop: !0,
                nav: !1,
                dots: !0,
                autoplay: !0,
                autoplayTimeout: 4000,
                smartSpeed: 1000,
                autoplayHoverPause: !0,
                lazyLoad: !0,
                items: 1
            })
        }
        var pSlider = $(".partner-slider-1");
        if (pSlider.length) {
            pSlider.owlCarousel({
                loop: !0,
                margin: 30,
                nav: !1,
                dots: !1,
                autoplay: !0,
                autoplayTimeout: 90,
                smartSpeed: 2500,
                responsive: {
                    0: {
                        items: 2
                    },
                    460: {
                        items: 3,
                        margin: 10,
                    },
                    768: {
                        items: 3,
                        margin: 10,
                    },
                    992: {
                        items: 4
                    },
                    1200: {
                        items: 5,
                    }
                },
            })
        }
        var pSlider = $(".partner-slider-2");
        if (pSlider.length) {
            pSlider.owlCarousel({
                loop: !0,
                margin: 30,
                nav: !1,
                dots: !1,
                autoplay: !0,
                autoplayTimeout: 90,
                smartSpeed: 2500,
                lazyLoad: !0,
                responsive: {
                    0: {
                        items: 2
                    },
                    460: {
                        items: 3,
                        margin: 10,
                    },
                    768: {
                        items: 3,
                        margin: 10,
                    },
                    992: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    }
                },
            })
        }
        var pSlider = $(".partner-slider-3");
        if (pSlider.length) {
            pSlider.owlCarousel({
                loop: !0,
                margin: 30,
                nav: !0,
                dots: !1,
                autoplay: !0,
                autoplayTimeout: 1200,
                smartSpeed: 1000,
                lazyLoad: !0,
                navText: ["<div class='partner-btn partner-prev-slide'></div>", "<div class='partner-btn partner-next-slide'></div>"],
                responsive: {
                    0: {
                        items: 2
                    },
                    460: {
                        items: 3,
                        margin: 10,
                    },
                    768: {
                        items: 3,
                        margin: 10,
                    },
                    992: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    }
                },
            })
        }
        var rpSlider = $(".latest-news-slider");
        if (rpSlider.length) {
            rpSlider.owlCarousel({
                loop: !0,
                nav: !1,
                dots: !1,
                autoplay: !0,
                margin: 30,
                autoplayTimeout: 3500,
                smartSpeed: 1200,
                autoplayHoverPause: !0,
                lazyLoad: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                },
            })
        }
        var rpSlider = $(".core-value-slider");
        if (rpSlider.length) {
            rpSlider.owlCarousel({
                loop: !0,
                nav: !1,
                dots: !1,
                autoplay: !0,
                margin: 30,
                autoplayTimeout: 3500,
                smartSpeed: 1200,
                autoplayHoverPause: !0,
                lazyLoad: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                },
            })
        }
        var rpSlider = $(".related-post-slider");
        if (rpSlider.length) {
            rpSlider.owlCarousel({
                loop: !0,
                nav: !1,
                dots: !1,
                autoplay: !0,
                autoplayTimeout: 4000,
                smartSpeed: 1200,
                lazyLoad: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    }
                },
            })
        }
        var rpSlider = $(".related-product-slider");
        if (rpSlider.length) {
            rpSlider.owlCarousel({
                loop: !0,
                nav: !1,
                dots: !1,
                autoplay: !0,
                margin: 30,
                autoplayTimeout: 4000,
                smartSpeed: 1200,
                lazyLoad: !0,
                responsive: {
                    0: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 4
                    }
                },
            })
        }
        var baSlider = $(".address-slider");
        if (baSlider.length) {
            baSlider.owlCarousel({
                loop: !0,
                nav: !1,
                dots: !1,
                autoplay: !0,
                autoplayTimeout: 2000,
                smartSpeed: 1200,
                lazyLoad: !0,
                autoplayHoverPause: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    500: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 4
                    }
                },
            })
        }
        if ($('.form-validation').length) {
            $('.form-validation').validate({
                rules: {
                    name: {
                        required: !0
                    },
                    email: {
                        required: !0,
                        email: !0
                    },
                    web: {
                        required: !0
                    },
                    phone: {
                        required: !0
                    },
                    message: {
                        required: !0
                    }
                },
                submitHandler: function(form) {
                    $(form).ajaxSubmit({
                        success: function() {
                            $('.form-validation :input').attr('disabled', 'disabled');
                            $('.form-validation').fadeTo("slow", 1, function() {
                                $(this).find(':input').attr('disabled', 'disabled');
                                $(this).find('label').css('cursor', 'default');
                                $('#alert-success').fadeIn()
                            })
                        },
                        error: function() {
                            $('.form-validation').fadeTo("slow", 1, function() {
                                $('#alert-error').fadeIn()
                            })
                        }
                    })
                }
            })
        }
        var closeButton = $(".closeAlert");
        if (closeButton.length) {
            closeButton.on('click', function() {
                $(".alert-wrapper").fadeOut()
            });
            closeButton.on('click', function() {
                $(".alert-wrapper").fadeOut()
            })
        }
        if ($('.theme-accordion > .panel').length) {
            $('.theme-accordion > .panel').on('show.bs.collapse', function(e) {
                var heading = $(this).find('.panel-heading');
                heading.addClass("active-panel")
            });
            $('.theme-accordion > .panel').on('hidden.bs.collapse', function(e) {
                var heading = $(this).find('.panel-heading');
                heading.removeClass("active-panel")
            });
            $('.panel-heading a').on('click', function(e) {
                if ($(this).parents('.panel').children('.panel-collapse').hasClass('in')) {
                    e.stopPropagation()
                }
            })
        };
        var inputVal = $("#product-value");
        if (inputVal.length) {
            $("#value-decrease").on('click', function() {
                var v = inputVal.val() - 1;
                if (v >= inputVal.attr('min'))
                    inputVal.val(v)
            });
            $("#value-increase").on('click', function() {
                var v = inputVal.val() * 1 + 1;
                if (v <= inputVal.attr('max'))
                    inputVal.val(v)
            });
        }
    });
    $(window).on('load', function() {
        $('#loader').fadeOut();
        $('#loader-wrapper').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
        if ($("#chartContainer").length) {
            var chart = new CanvasJS.Chart("chartContainer", {
                theme: "light2",
                animationEnabled: !0,
                zoomEnabled: !0,
                data: [{
                    type: "area",
                    dataPoints: []
                }]
            });
            addDataPoints(1000);
            chart.render();

            function addDataPoints(noOfDps) {
                var xVal = chart.options.data[0].dataPoints.length + 1,
                    yVal = 100;
                for (var i = 0; i < noOfDps; i++) {
                    yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
                    chart.options.data[0].dataPoints.push({
                        x: xVal,
                        y: yVal
                    });
                    xVal++
                }
            }
        }
    })
})(jQuery)
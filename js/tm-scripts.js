function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
  }
  
  function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
  };
  
  /* cookie.JS
   ========================================================*/
  include('js/jquery.cookie.js');
  
  /* Easing library
   ========================================================*/
  include('js/jquery.easing.1.3.js');
  
  
  /* Stick up menus  ========================================================*/
  ;(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
      include('js/tmstickup.js');
  
      $(document).ready(function () {
        $('#stuck_container').TMStickUp({})
      });
    }
  })(jQuery);
  
  
  /* ToTop
   ========================================================*/
  ;
  (function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
      include('js/jquery.ui.totop.js');
  
      $(document).ready(function () {
        $().UItoTop({
          easingType: 'easeOutQuart',
          containerClass: 'toTop material-icons-expand_less'
        });
      });
    }
  })(jQuery);
  
  /* EqualHeights
   ========================================================*/
  ;
  (function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
      include('js/jquery.equalheights.js');
    }
  })(jQuery);
  
  
  /* Copyright Year
   ========================================================*/
  ;
  (function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
      $("#copyright-year").text((new Date).getFullYear());
    });
  })(jQuery);
  
  
  ;
  (function ($) {
    function include(url) {
      document.write('<script src="js/' + url + '"></script>');
      return false;
    }
  
    include('superfish.js');
    jQuery(function () {
    })
  })(jQuery);
  
  
  /* Responsive Tabs
   ========================================================*/
  ;
  (function ($) {
    var o = $('.resp-tabs');
    if (o.length > 0) {
      include('js/jquery.responsive.tabs.js');
  
      $(document).ready(function () {
        o.easyResponsiveTabs();
      });
    }
  })(jQuery);
  
  
  /* Navbar
   ========================================================*/
  ;
  (function ($) {
    include('js/jquery.rd-navbar.js');
  })(jQuery);
  
  
  /* PointerEvents
   ========================================================*/
  ;
  (function ($) {
    if (isIE() && isIE() < 11) {
      include('js/pointer-events.js');
      $('html').addClass('lt-ie11');
      $(document).ready(function () {
        PointerEventsPolyfill.initialize({});
      });
    }
  })(jQuery);
  
  /* Stacktable
   ========================================================*/
  ;
  (function ($) {
    var o = $('.table1');
    if (o.length > 0) {
      include('js/stacktable.js');
      $(document).ready(function () {
        o.stacktable();
      });
    }
  })(jQuery);
  
  
  /* Camera
   ========================================================*/
  ;
  (function ($) {
    var o = $('#camera');
    if (o.length > 0) {
      if (!(isIE() && (isIE() > 9))) {
        include('js/jquery.mobile.customized.min.js');
      }
  
      include('js/camera.js');
  
      $(document).ready(function () {
        o.camera({
          autoAdvance: true,
          height: '27.41463414634146%',
          minHeight: '350px',
          pagination: false,
          thumbnails: false,
          playPause: false,
          hover: false,
          loader: 'none',
          navigation: true,
          navigationHover: true,
          mobileNavHover: false,
          fx: 'simpleFade'
        })
      });
    }
  })(jQuery);
  
  /* Google Map
   ========================================================*/
  ;
  (function ($) {
    var o = document.getElementById("google-map");
    if (o) {
      include('//maps.google.com/maps/api/js?sensor=false');
      include('js/jquery.rd-google-map.js');
  
      $(document).ready(function () {
        var o = $('#google-map');
        if (o.length > 0) {
          o.googleMap({
            styles: [{
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
            }, {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]
            }, {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [{"color": "#ffffff"}, {"lightness": 17}]
            }, {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]
            }, {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [{"color": "#ffffff"}, {"lightness": 18}]
            }, {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [{"color": "#ffffff"}, {"lightness": 16}]
            }, {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]
            }, {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [{"color": "#dedede"}, {"lightness": 21}]
            }, {
              "elementType": "labels.text.stroke",
              "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]
            }, {
              "elementType": "labels.text.fill",
              "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]
            }, {"elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [{"color": "#f2f2f2"}, {"lightness": 19}]
            }, {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [{"color": "#fefefe"}, {"lightness": 20}]
            }, {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]
            }]
          });
        }
      });
    }
  })
  (jQuery);
  
  /* Owl Carousel
   ========================================================*/
  ;(function ($) {
    var o = $('.owl-carousel'),
        o2 = $('.owl-carousel-2');
    if (o.length > 0) {
      include('js/owl.carousel.min.js');
      $(document).ready(function () {
        o.owlCarousel({
          smartSpeed: 450,
          animateIn: 'fadeIn',
          animateOut: 'fadeOut',
          loop: true,
          dots: false,
          dotsEach: 1,
          nav: true,
          navClass: ['owl-prev material-icons-chevron_left', 'owl-next material-icons-chevron_right'],
          responsive: {
            0: {items: 1}
          }
        });
      });
    }
    if (o2.length > 0) {
      include('js/owl.carousel.min.js');
      $(document).ready(function () {
        o2.owlCarousel({
          //autoplay: true,
          margin: 30,
          smartSpeed: 450,
          //animateIn: 'fadeIn',
          //animateOut: 'fadeOut',
          //mouseDrag: false,
          loop: true,
          dots: false,
          dotsEach: 1,
          nav: true,
          navClass: ['owl-prev fa  fa-angle-double-left', 'owl-next fa  fa-angle-double-right'],
          responsive: {
            0: {items: 1},
            768: {items: 2},
            992: {items: 3}
          }
        });
      });
    }
  })(jQuery);
  
  
  /* WOW
   ========================================================*/
  ;
  (function ($) {
    var o = $('html');
  
    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
      if (o.hasClass('desktop')) {
        include('js/wow.js');
  
        $(document).ready(function () {
          new WOW().init();
        });
      }
    }
  })(jQuery);
  
  
  /* Orientation tablet fix
   ========================================================*/
  $(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,
  
        gestureStart = function () {
          viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },
  
        scaleFix = function () {
          if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
            viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
            document.addEventListener("gesturestart", gestureStart, false);
          }
        };
  
    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
      var regM = /ipod|ipad|iphone/gi,
          result = ua.match(regM);
      if (!result) {
        $('.sf-menus li').each(function () {
          if ($(">ul", this)[0]) {
            $(">a", this).toggle(
                function () {
                  return false;
                },
                function () {
                  window.location.href = $(this).attr("href");
                }
            );
          }
        })
      }
    }
  });
  var ua = navigator.userAgent.toLocaleLowerCase(),
      regV = /ipod|ipad|iphone/gi,
      result = ua.match(regV),
      userScale = "";
  if (!result) {
    userScale = ",user-scalable=0"
  }
  document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');
  
  
  /* Search.js
   ========================================================*/
  ;
  (function ($) {
    var o = $('.search-form');
    if (o.length > 0) {
      include('js/TMSearch.js');
    }
  })(jQuery);
  
  /* Waypoints
   ========================================================*/
  ;
  (function ($) {
    include('js/jquery.waypoints.min.js');
  })(jQuery);
  
  /**
   * @module     RD Input Label
   * @description Enables RD Input Label Plugin
   */
  ;
  (function ($) {
    var o = $('.form-label');
    if (o.length) {
      include('js/mailform/jquery.rd-input-label.js');
  
      $(document).ready(function () {
        o.RDInputLabel();
      });
    }
  })(jQuery);
  
  /* Mailform
   =============================================*/
  ;
  (function ($) {
    var o = $('.rd-mailform');
    if (o.length > 0) {
      include('js/mailform/jquery.form.min.js');
      include('js/mailform/jquery.rd-mailform.min.js');
  
      $(document).ready(function () {
        var o = $('.rd-mailform');
  
        if (o.length) {
          o.rdMailForm({
            validator: {
              'constraints': {
                '@LettersOnly': {
                  message: 'Please use letters only!'
                },
                '@NumbersOnly': {
                  message: 'Please use numbers only!'
                },
                '@NotEmpty': {
                  message: 'Field should not be empty!'
                },
                '@Email': {
                  message: 'Enter valid e-mail address!'
                },
                '@Phone': {
                  message: 'Enter valid phone number!'
                },
                '@Date': {
                  message: 'Use MM/DD/YYYY format!'
                },
                '@SelectRequired': {
                  message: 'Please choose an option!'
                }
              }
            }
          }, {
            'MF000': 'Sent',
            'MF001': 'Recipients are not set!',
            'MF002': 'Form will not work locally!',
            'MF003': 'Please, define email field in your form!',
            'MF004': 'Please, define type of your form!',
            'MF254': 'Something went wrong with PHPMailer!',
            'MF255': 'There was an error submitting the form!'
          });
        }
      });
    }
  })(jQuery);
  
  ///* Touch Touch Gallery
  // =============================================*/
  //;
  //(function ($) {
  //  var o = $('.thumb');
  //  if (o.length > 0) {
  //    include('js/jquery.touch-touch.js');
  //
  //    $(document).ready(function () {
  //      o.touchTouch();
  //    });
  //  }
  //})(jQuery);
  
  
  /* Menu Trigger
   =============================================*/
  // $(document).ready(function () {
  //     $('body').delegate('.trig','click', function (e) {
  //         var $this = $(this);
  //         e.preventDefault();
  //         $this.parents('.stuck_container').find('.sf-menu').toggleClass('active-menu');
  //         $this.parents('.stuck_container').find('.trig').toggleClass('trig-active');
  //     });
  
  //     $(document).on('click', function (e) {
  //         var container = $("nav");
  //         if (!container.is(e.target)
  //             && container.has(e.target).length === 0 && container.find('.trig').hasClass('trig-active')) {
  //             container.find('.trig-active').removeClass('trig-active').parent().find('.active-menu').removeClass('active-menu');
  //         }
  //     })
  
  // })
  
  
  /* Cross rotate
   ============================================*/
  
  $(document).ready(function () {
    $(".cross").mouseenter(function () {
      $(this).addClass('cross-active');
      var test = $(this);
      setTimeout(function () {
        test.removeClass('cross-active')
      }, 1300);
  
  
    });
  });
  
  
  /**
   * @module       Isotope
   * @description  Enables Isotope Plugin
   */
  ;
  (function ($) {
    var o = $(".isotope");
    if (o.length) {
      include('js/isotope.pkgd.min.js');
  
      $(document).ready(function () {
        o.each(function () {
          var _this = this
              , iso = new Isotope(_this, {
            itemSelector: '[class*="col-"], .isotope-item',
            layoutMode: _this.getAttribute('data-layout') ? _this.getAttribute('data-layout') : 'masonry'
          });
  
          $(window).on("resize", function () {
            iso.layout();
          });
  
          $(window).load(function () {
            iso.layout();
            setTimeout(function () {
              _this.className += " isotope--loaded";
              iso.layout();
            }, 600);
          });
        });
  
        $(".isotope-filters-trigger").on("click", function () {
          $(this).parents(".isotope-filters").toggleClass("active");
        });
  
        $("[data-isotope-filter]").on("click", function () {
          $('[data-isotope-filter][data-isotope-group="' + this.getAttribute("data-isotope-group") + '"]').removeClass("active");
          $(this).addClass("active");
          $(this).parents(".isotope-filters").removeClass("active");
          $('.isotope[data-isotope-group="' + this.getAttribute("data-isotope-group") + '"]')
              .isotope({filter: this.getAttribute("data-isotope-filter") == '*' ? '*' : '[data-filter="' + this.getAttribute("data-isotope-filter") + '"]'});
        })
      });
    }
  })(jQuery);
  
  
  /**
   * @module       Swiper Slider
   * @description  Enables Swiper Plugin
   */
  ;
  (function ($, undefined) {
    var o = $(".swiper-slider");
    if (o.length) {
      include('js/jquery.swiper.min.js');
  
      function getSwiperHeight(object, attr) {
        var val = object.attr("data-" + attr),
            dim;
  
        if (!val) {
          return undefined;
        }
  
        dim = val.match(/(px)|(%)|(vh)$/i);
  
        if (dim.length) {
          switch (dim[0]) {
            case "px":
              return parseFloat(val);
            case "vh":
              return $(window).height() * (parseFloat(val) / 100);
            case "%":
              return object.width() * (parseFloat(val) / 100);
          }
        } else {
          return undefined;
        }
      }
  
      function toggleSwiperInnerVideos(swiper) {
        var videos;
  
        $.grep(swiper.slides, function (element, index) {
          var $slide = $(element),
              video;
  
          if (index === swiper.activeIndex) {
            videos = $slide.find("video");
            if (videos.length) {
              videos.get(0).play();
            }
          } else {
            $slide.find("video").each(function () {
              this.pause();
            });
          }
        });
      }
  
      function toggleSwiperCaptionAnimation(swiper) {
        if (isIE() && isIE() < 10) {
          return;
        }
  
        var prevSlide = $(swiper.container),
            nextSlide = $(swiper.slides[swiper.activeIndex]);
  
        prevSlide
            .find("[data-caption-animate]")
            .each(function () {
              var $this = $(this);
              $this
                  .removeClass("animated")
                  .removeClass($this.attr("data-caption-animate"))
                  .addClass("not-animated");
            });
  
        nextSlide
            .find("[data-caption-animate]")
            .each(function () {
              var $this = $(this),
                  delay = $this.attr("data-caption-delay");
  
              setTimeout(function () {
                $this
                    .removeClass("not-animated")
                    .addClass($this.attr("data-caption-animate"))
                    .addClass("animated");
              }, delay ? parseInt(delay) : 0);
            });
      }
  
      $(document).ready(function () {
        o.each(function () {
          var s = $(this);
  
          var pag = s.find(".swiper-pagination"),
              next = s.find(".swiper-button-next"),
              prev = s.find(".swiper-button-prev"),
              bar = s.find(".swiper-scrollbar"),
              h = getSwiperHeight(o, "height"), mh = getSwiperHeight(o, "min-height");
          s.find(".swiper-slide")
              .each(function () {
                var $this = $(this),
                    url;
                if (url = $this.attr("data-slide-bg")) {
                  $this.css({
                    "background-image": "url(" + url + ")",
                    "background-size": "cover"
                  })
                }
              })
              .end()
              .find("[data-caption-animate]")
              .addClass("not-animated")
              .end()
              .swiper({
                autoplay: s.attr('data-autoplay') ? s.attr('data-autoplay') === "false" ? undefined : s.attr('data-autoplay') : 5000,
                direction: s.attr('data-direction') ? s.attr('data-direction') : "horizontal",
                effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide",
                speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600,
                keyboardControl: s.attr('data-keyboard') === "true",
                mousewheelControl: s.attr('data-mousewheel') === "true",
                mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true",
                nextButton: next.length ? next.get(0) : null,
                prevButton: prev.length ? prev.get(0) : null,
                pagination: pag.length ? pag.get(0) : null,
                paginationClickable: pag.length ? pag.attr("data-clickable") !== "false" : false,
                paginationBulletRender: pag.length ? pag.attr("data-index-bullet") === "true" ? function (index, className) {
                  return '<span class="' + className + '">' + (index + 1) + '</span>';
                } : null : null,
                scrollbar: bar.length ? bar.get(0) : null,
                scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
                scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
                loop: s.attr('data-loop') !== "false",
                onTransitionStart: function (swiper) {
                  toggleSwiperInnerVideos(swiper);
                },
                onTransitionEnd: function (swiper) {
                  toggleSwiperCaptionAnimation(swiper);
                },
                onInit: function (swiper) {
                  toggleSwiperInnerVideos(swiper);
                  toggleSwiperCaptionAnimation(swiper);
  
                  var o = $(swiper.container).find('.rd-parallax');
                  if (o.length && window.RDParallax) {
                    o.RDParallax({
                      layerDirection: ($('html').hasClass("smoothscroll") || $('html').hasClass("smoothscroll-all")) && !isIE() ? "normal" : "inverse"
                    });
                  }
                }
              });
  
          $(window)
              .on("resize", function () {
                var mh = getSwiperHeight(s, "min-height"),
                    h = getSwiperHeight(s, "height");
                if (h) {
                  s.css("height", mh ? mh > h ? mh : h : h);
                }
              })
              .load(function () {
                s.find("video").each(function () {
                  if (!$(this).parents(".swiper-slide-active").length) {
                    this.pause();
                  }
                });
              })
              .trigger("resize");
        });
      });
    }
  })(jQuery);
  
  
  /* Parallax
   =============================================*/
  ;
  (function ($) {
    include('js/jquery.rd-parallax.js');
  })(jQuery);
  
  
  /* JQuery UI Accordion
   ========================================================*/
  ;
  (function ($) {
    var o = $('.accordion');
    if (o.length > 0) {
      include('js/jquery.ui.accordion.min.js');
  
      $(document).ready(function () {
        o.accordion({
          active: 0,
          header: '.accordion_header',
          heightStyle: 'content',
          collapsible: true
        });
      });
    }
  })(jQuery);
  
  /**
   * @module       Magnific Popup
   * @description  Enables Magnific Popup Plugin
   */
  ;
  (function ($) {
  
    var o = $('[data-lightbox]').not('[data-lightbox="gallery"] [data-lightbox]'),
        g = $('[data-lightbox^="gallery"]');
  
    if (o.length > 0 || g.length > 0) {
      include('js/jquery.magnific_popup.js');
  
      $(document).ready(function () {
        if (o.length) {
          o.each(function () {
            var $this = $(this);
            $this.magnificPopup({
              type: $this.attr("data-lightbox")
            });
          })
        }
  
        if (g.length) {
          g.each(function () {
            var $gallery = $(this);
            $gallery
                .find('[data-lightbox]').each(function () {
                  var $item = $(this);
                  $item.addClass("mfp-" + $item.attr("data-lightbox"));
                })
                .end()
                .magnificPopup({
                  delegate: '[data-lightbox]',
                  type: "image",
                  gallery: {
                    enabled: true
                  }
                });
          })
        }
      });
    }
  })(jQuery);
  
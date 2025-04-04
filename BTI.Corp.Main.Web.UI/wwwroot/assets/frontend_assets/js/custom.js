"use strict";
$(document).ready(function (e) {
    var s = 1199;
    function i() {
        e(".cd-nav-trigger").removeClass("nav-is-visible"),
            e(".cd-main-header").removeClass("nav-is-visible"),
            e(".cd-primary-nav").removeClass("nav-is-visible"),
            e(".has-children ul").addClass("is-hidden"),
            e(".has-children a").removeClass("selected"),
            e(".moves-out").removeClass("moves-out"),
            e(".cd-main-content").removeClass("nav-is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
                e("body").removeClass("overflow-hidden");
            });
    }
    function n(i) {
        "close" == i ? (e(".cd-search").removeClass("is-visible"),
            e(".cd-search-trigger").removeClass("search-is-visible"),
            e(".cd-overlay").removeClass("search-is-visible")) : (e(".cd-search").toggleClass("is-visible"),
                e(".cd-search-trigger").toggleClass("search-is-visible"),
                e(".cd-overlay").toggleClass("search-is-visible"),
                e(window).width() > s && e(".cd-search").hasClass("is-visible") && e(".cd-search").find('input[type="search"]').focus(),
                e(".cd-search").hasClass("is-visible") ? e(".cd-overlay").addClass("is-visible") : e(".cd-overlay").removeClass("is-visible"));
    }
    function a() {
        var e = window
            , i = "inner";
        return "innerWidth" in window || ((i = "client"),
            (e = document.documentElement || document.body)),
            e[i + "Width"] >= s;
    }
    function l() {
        var s = e(".cd-nav");
        a() ? (s.detach(),
            s.insertBefore(".cd-header-buttons")) : (s.detach(),
                s.insertAfter(".cd-main-content"));
    }
    l(),
        e(window).on("resize", function () {
            window.requestAnimationFrame ? window.requestAnimationFrame(l) : setTimeout(l, 300);
        }),
        e(".cd-nav-trigger").on("click", function (s) {
            s.preventDefault(),
                e(".cd-main-content").hasClass("nav-is-visible") ? (i(),
                    e(".cd-overlay").removeClass("is-visible")) : (e(this).addClass("nav-is-visible"),
                        e(".cd-primary-nav").addClass("nav-is-visible"),
                        e(".cd-main-header").addClass("nav-is-visible"),
                        e(".cd-main-content").addClass("nav-is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
                            e("body").addClass("overflow-hidden");
                        }),
                        n("close"),
                        e(".cd-overlay").addClass("is-visible"));
        }),
        e(".cd-search-trigger").on("click", function (e) {
            e.preventDefault(),
                n(),
                i();
        }),
        e(".cd-overlay").on("swiperight", function () {
            e(".cd-primary-nav").hasClass("nav-is-visible") && (i(),
                e(".cd-overlay").removeClass("is-visible"));
        }),
        e(".nav-on-left .cd-overlay").on("swipeleft", function () {
            e(".cd-primary-nav").hasClass("nav-is-visible") && (i(),
                e(".cd-overlay").removeClass("is-visible"));
        }),
        e(".cd-overlay").on("click", function () {
            i(),
                n("close"),
                e(".cd-overlay").removeClass("is-visible");
        }),
        e(".cd-primary-nav").children(".has-children").children("a").on("click", function (e) {
            e.preventDefault();
        }),
        e(".has-children").children("a").on("click", function (s) {
            a() || s.preventDefault();
            var i = e(this);
            i.next("ul").hasClass("is-hidden") ? (i.addClass("selected").next("ul").removeClass("is-hidden").end().parent(".has-children").parent("ul").addClass("moves-out"),
                i.parent(".has-children").siblings(".has-children").children("ul").addClass("is-hidden").end().children("a").removeClass("selected"),
                e(".cd-overlay").addClass("is-visible")) : (i.removeClass("selected").next("ul").addClass("is-hidden").end().parent(".has-children").parent("ul").removeClass("moves-out"),
                    e(".cd-overlay").removeClass("is-visible")),
                n("close");
        }),
        e(".go-back").on("click", function () {
            e(this).parent("ul").addClass("is-hidden").parent(".has-children").parent("ul").removeClass("moves-out");
        });
});
$(document).ready(function () {
    var counted = 0;
    $(document).scroll(function () {
        if ($('.states-sect,.hlis-counter').offset()) {
            var oTop = $('.states-sect,.hlis-counter').offset().top - window.innerHeight;
            if (counted == 0 && $(window).scrollTop() > oTop) {
                $('.counter-sts').each(function () {
                    var $this = $(this)
                        , countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    }, {
                        duration: 1100,
                        easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
                });
                counted = 1;
            }
        }
      
    });
});
$(document).ready(function () {
    var swiper = new Swiper(".comp-logos-swip", {
        slidesPerView: 7,
        spaceBetween: 0,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 20
            },
            1400: {
                slidesPerView: 7,
                spaceBetween: 20
            }
        }
    });
    var swiper1 = new Swiper(".main-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 2800,
            disableOnInteraction: false
        }
    });
    var swiper2 = new Swiper(".event-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 2800,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".main-slider-nxt",
            prevEl: ".main-slider-prev"
        }
    });
    var swiper3 = new Swiper(".tech-logos-swip", {
        slidesPerView: 5,
        spaceBetween: 0,
        speed: 1500,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20
            }
        }
    });
    var swiper4 = new Swiper(".admin-swip", {
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 1500,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
    var swiper5 = new Swiper(".clients-say-slider", {
        slidersPerView: 2,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 2800,
            disableOnInteraction: false
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
    var swiper6 = new Swiper(".partnership-models-slider2", {
        effect: "fade",
        slidersPerView: 1,
        spaceBetween: 0,
        slideToClickedSlide: false,
        simulateTouch: false,
        loop: true,
        autoplayDisableOnInteraction: false,
        paginationClickable: false,
        speed: 1500,
        navigation: {
            nextEl: ".partnership-models-nxt",
            prevEl: ".partnership-models-prev"
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        }
    });
    var swiper7 = new Swiper(".process-we-follow-mob,.services-we-offer-mob,.partnership-models-mob,.industries-we-serve-mob,.case-studies-mob", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3300,
            disableOnInteraction: false
        },
        pagination: {
            el: ".mob-clutch-swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        }
    });
    var swiper8 = new Swiper(".mob-clutch", {
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: false,
        loop: true,
        autoplay: {
            delay: 2800,
            disableOnInteraction: false
        },
        pagination: {
            el: ".mob-clutch-swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        }
    });
    var swiper9 = new Swiper(".our-key-features", {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        },
        autoplay: {
            delay: 2500,
        }
    });
    var mySwiper = new Swiper('.services-we-offer-slider', {
        freeMode: false,
        slidesPerView: 'auto',
        speed: 1500,
        spaceBetween: 15,
        scrollbar: {
            el: '.js-swiper-scrollbar',
            draggable: true,
            snapOnRelease: false
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 15
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 15
            }
        }
    });
    var swiper10 = new Swiper(".latest-blog-slider", {
        spaceBetween: 20,
        grabCursor: false,
        slidesPerView: 3,
        loop: true,
        noSwiping: true,
        allowTouchMove: false,
        centeredSlides: true,
        navigation: {
            nextEl: ".latest-blog-nxt",
            prevEl: ".latest-blog-prev"
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 15,
            }
        }
    });
    var swiper11 = new Swiper(".latest-blog-contain-slider", {
        fadeEffect: {
            crossFade: true
        },
        effect: "fade",
        spaceBetween: 0,
        loop: true,
        grabCursor: false,
        slidesPerView: 1,
        allowTouchMove: false,
        navigation: {
            nextEl: ".latest-blog-nxt",
            prevEl: ".latest-blog-prev"
        }
    });
    var swiper12 = new Swiper(".case-study-slider", {
        speed: 1200,
        spaceBetween: 50,
        loop: true,
        grabCursor: false,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        }
    });
    var swiper13 = new Swiper(".life-at-hlis-swiper", {
        fadeEffect: {
            crossFade: true
        },
        effect: "fade",
        speed: 1500,
        spaceBetween: 0,
        loop: true,
        grabCursor: false,
        centeredSlides: true,
        slidesPerView: 1,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".life-at-hlis-nxt",
            prevEl: ".life-at-hlis-prev"
        }
    });
    var swiper14 = new Swiper(".team-slider", {
        speed: 1500,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        centeredSlides: false,
        autoplay: {
            delay: 4000,
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 15
            },
            577: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 15,
            }
        }
    });
    var swiper15 = new Swiper(".portfolio-slider", {
        speed: 1500,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 2,
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 15
            }
        }
    });
    var swiper16 = new Swiper(".industries-slider", {
        speed: 1500,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 2,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 15
            }
        }
    });
});
(function ($, window) {
    var pluginName = 'articleProgress';
    var defaults = {
        target: null,
        mode: 'width',
        advance: 30,
        circleBg: '#fff',
        circleFg: 'green'
    };
    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        if (!this.options.target) {
            var progress = $('<div style="position: fixed; top: 0; left: 0; right: 0; height: 2px; background: transparent;"></div>').append('<div style="position: absolute; width: 0%; height: 100%; left: 0; top: 0; background: green;"></div>');
            $('body').append(progress);
            this.options.target = progress.children();
        }
        this._default = defaults;
        this._name = pluginName;
        this.lastValue = -1;
        this.init();
    }
    Plugin.prototype.init = function () {
        var t = this;
        $(window).on('resize scroll', function () {
            t.update();
        });
        this.update();
    }
        ;
    Plugin.prototype.update = function () {
        var $el = $(this.element).eq(0);
        var offset = $el.offset();
        var scrollTop = $(window).scrollTop();
        var articleHeight = $el.height();
        var advanceHeight = $(window).height() * this.options.advance / 100;
        var beforeArticle = scrollTop - offset.top + advanceHeight < 0;
        var behindArticle = offset.top + articleHeight - scrollTop - advanceHeight < 0;
        var onArticle = !beforeArticle && !behindArticle;
        var percent = 0;
        if (behindArticle) {
            percent = 100;
        } else if (!beforeArticle) {
            percent = (scrollTop - offset.top + advanceHeight) / articleHeight * 100;
            if (percent < 0)
                percent = 0;
        }
        if (percent === this.lastValue)
            return;
        this.lastValue = percent;
        this.change(percent);
    }
        ;
    Plugin.prototype.change = function (percent) {
        var modes = this.options.mode.split(" ");
        var $target = $(this.options.target);
        for (var i in modes) {
            var mode = modes[i];
            switch (mode) {
                case 'width':
                    $target.css('width', percent + '%');
                    break;
                case 'text':
                    $target.text(Math.round(percent) + '%');
                    break;
                case 'circle':
                    if (percent === 100) {
                        $target.css('background-image', 'none');
                    } else {
                        var deg = 90 + (360 * percent / 100);
                        var col1 = percent < 50 ? 'transparent' : this.options.circleFg;
                        var col2 = percent < 50 ? this.options.circleBg : 'transparent';
                        $target.css('background-image', 'linear-gradient(' + deg + 'deg, ' + col1 + ' 50%, ' + col2 + ' 50%), linear-gradient(90deg, ' + this.options.circleBg + ' 50%, transparent 50%)');
                    }
                    break;
            }
        }
    }
        ;
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            new Plugin(this, options);
        });
    }
        ;
}
)(jQuery, window);
$('.blog-article').articleProgress({
    target: '.ap-text',
    mode: 'text'
});
$('.filters ul li').click(function () {
    $('.filters ul li').removeClass('active');
    $(this).addClass('active');
    var data = $(this).attr('data-filter');
    $grid.isotope({
        filter: data
    })
});
var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: false,
    masonry: {
        columnWidth: ".all"
    }
});
const items = document.querySelectorAll(".accordion button");
function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    for (var i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }
    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}
items.forEach(item => item.addEventListener('click', toggleAccordion));
$(document).ready(function () {
    $('#cookie-accept').click(function () {
        $('.cookie-alert').hide();
    });
    $('.sidebar-toggle').click(function () {
        $('.sidebar-contact').toggleClass('active');
        $('.sidebar-toggle').toggleClass('active');
    });
});
$('#serv-nav-tabs li a').hover(function () {
    $(this).tab('show');
});
document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages;
    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        var imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        }
        );
        lazyloadImages.forEach(function (image) {
            imageObserver.observe(image);
        });
    } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");
        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }
            lazyloadThrottleTimeout = setTimeout(function () {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function (img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
                if (lazyloadImages.length == 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
        }
        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }
});
$('a.anc-link').click(function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
        var scrollTo = target.offset().top;
        $('body, html').animate({
            scrollTop: scrollTo + 'px'
        }, 800);
    }
});
(function ($) {
    "use strict";
    $(document).ready(function () {
        "use strict";
        var progressPath = document.querySelector('.back-to-top path');
        if (progressPath) {
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        }

        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            if (progressPath)
                progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.back-to-top').addClass('active-progress');
            } else {
                jQuery('.back-to-top').removeClass('active-progress');
            }
        });
        jQuery('.back-to-top').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        })
    });
}
)(jQuery);
new WOW().init();

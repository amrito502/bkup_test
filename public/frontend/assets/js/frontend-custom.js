(function ($) {
    "use strict"; // Start of use strict

// Preloader Start
    $(window).on('load', function () {
        $('#preloader_status').fadeOut();
        $('#preloader')
            .delay(350)
            .fadeOut('slow');
        $('body')
            .delay(350);

        // Onload Scroll To Top
        $(window).scrollTop(0);
    });
// Preloader End

// Courses Page Filter Show/Hide Start
    if($(window).width() > 767) {
    var allCourseArea = $(".show-all-course-area-wrap");
    var filter = $("#filter");
    var coursesGgrids = $(".courses-grids");
    var coursesSidebar = $(".coursesLeftSidebar");
    var grid = coursesGgrids.find(".col-xl-4");

    filter.on("click", function() {

        coursesSidebar.toggleClass("bang");
        allCourseArea.toggleClass("col-md-12 col-lg-12 col-sm-12 col-xl-12");

        if( (grid.hasClass("col-xl-4")) || grid.hasClass("col-lg-6")) {
            grid.removeClass("col-xl-4").addClass("col-xl-3");
            grid.removeClass("col-lg-6").addClass("col-lg-4");
        } else {
            grid.addClass("col-xl-4").removeClass("col-xl-3");
            grid.addClass("col-lg-6").removeClass("col-lg-3");
        }

    })

}
// Courses Page Filter Show/Hide End

/// MAIN MENU SCRIPT START

    // Multilevel Dropdown Menu Script Start
    document.addEventListener("DOMContentLoaded", function(){

        /////// Prevent closing from click inside dropdown
        document.querySelectorAll('.dropdown-menu').forEach(function(element){
            element.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        })

        // make it as accordion for smaller screens
        if (window.innerWidth < 992) {

            // close all inner dropdowns when parent is closed
            document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
                everydropdown.addEventListener('hidden.bs.dropdown', function () {
                    // after dropdown is hidden, then find all submenus
                    this.querySelectorAll('.submenu').forEach(function(everysubmenu){
                        // hide every submenu as well
                        everysubmenu.style.display = 'none';
                    });
                })
            });

            document.querySelectorAll('.dropdown-menu a').forEach(function(element){
                element.addEventListener('click', function (e) {

                    let nextEl = this.nextElementSibling;
                    if(nextEl && nextEl.classList.contains('submenu')) {
                        // prevent opening link if link needs to open dropdown
                        e.preventDefault();
                        console.log(nextEl);
                        if(nextEl.style.display == 'block'){
                            nextEl.style.display = 'none';
                        } else {
                            nextEl.style.display = 'block';
                        }

                    }
                });
            })
        }
        // end if innerWidth

    });
    // DOMContentLoaded  end
    // Multilevel Dropdown Menu Script End

    // Dropdown 991 width fixed start
    if($(window).width() <= 991) {
        var flag = $(".menu-language-btn");
        var notification = $(".menu-notification-btn");
        var userBtn = $(".menu-user-btn");

        flag.find("> a").addClass("dropdown-toggle").attr("data-bs-toggle", "dropdown");
        notification.find("> a").addClass("dropdown-toggle").attr("data-bs-toggle", "dropdown");
        userBtn.find("> a").addClass("dropdown-toggle").attr("data-bs-toggle", "dropdown");
    }
    // Dropdown 991 width fixed end

    // Jquery counterUp Start
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // Jquery counterUp End

    // Course Slider Owl Carousel Start
    $('#myTab a').on('shown.bs.tab', function () {
        destroy_owl($('.owl-carousel'));
        initialize_owl($('.owl-carousel'));
    }),
    $('#myTab1 a').on('shown.bs.tab', function () {
        destroy_owl($('.owl-carousel'));
        initialize_owl($('.owl-carousel'));
    })

    function initialize_owl(el) {
        $('.direction-ltr .course-slider-items').owlCarousel({
            items:4,
            loop: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: false,
            smartSpeed: 1000,
            margin: 30,
            rtl: false,
            nav: true,
            navText: [
                "<span class=\"iconify\" data-icon=\"la:angle-left\"></span>",
                "<span class=\"iconify\" data-icon=\"la:angle-right\"></span>",
            ],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items:1,
                },
                576: {
                    items:1,
                },
                768: {
                    items:2,
                },
                1200: {
                    items:4,
                }
            },
        });

        $('.direction-rtl .course-slider-items').owlCarousel({
            items:4,
            loop: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: false,
            smartSpeed: 1000,
            margin: 30,
            rtl: true,
            nav: true,
            navText: [
                "<span class=\"iconify\" data-icon=\"la:angle-left\"></span>",
                "<span class=\"iconify\" data-icon=\"la:angle-right\"></span>",
            ],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items:1,
                },
                576: {
                    items:1,
                },
                768: {
                    items:2,
                },
                1200: {
                    items:4,
                }
            },
        });
    }

    initialize_owl();

    function destroy_owl(el) {
        el.trigger("destroy.owl.carousel");
        el.find('.owl-stage-outer').children(':eq(0)').unwrap();
    }
    // Course Slider Owl Carousel End

    // Blog Page Slider Owl Carousel Start
    $('.direction-ltr .blog-slider-items-wrap').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 30,
        rtl: false,
        nav: true,
        navText: [
            "<span class=\"iconify\" data-icon=\"la:angle-left\"></span>",
            "<span class=\"iconify\" data-icon=\"la:angle-right\"></span>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items:1,
            },
            576: {
                items:1,
            },
            768: {
                items:1,
            },
            1200: {
                items:1,
            }
        },
    });
    $('.direction-rtl .blog-slider-items-wrap').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 30,
        rtl:true,
        nav: true,
        navText: [
            "<span class=\"iconify\" data-icon=\"la:angle-left\"></span>",
            "<span class=\"iconify\" data-icon=\"la:angle-right\"></span>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items:1,
            },
            576: {
                items:1,
            },
            768: {
                items:1,
            },
            1200: {
                items:1,
            }
        },
    });
    // Blog Page Slider Owl Carousel End

    /*---------------------------------
    Feather Icon JS
   -----------------------------------*/
    feather.replace();

    /*---------------------------------
    venobox
   -----------------------------------*/
    // $('.venobox').venobox();
    new VenoBox({
        selector: ".venobox"
    });

    /*---------------------------------
    Review Progress-Bar
   -----------------------------------*/
    $('.barra-nivel').each(function() {
        var valorLargura = $(this).data('nivel');
        var valorNivel = $(this).html("<span class='valor-nivel'>"+valorLargura+"</span>");
        $(this).animate({
            width: valorLargura
        });
    });

    // Image Size Resize JS
    var boxBgSetting = $(".box-bg-image");
    boxBgSetting.each(function(index){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    /*---------------------------------
    account-page- dropdown menu
    -----------------------------------*/
    $( ".menu-has-children" ).on("click", function() {
        $(this).toggleClass( "has-open" );
    });

    // Show/Hide Password/ Toggle Password Script Start
    $(".toggle").on("click", function () {

        if ($(".password").attr("type") == "password")
        {
            //Change type attribute
            $(".password").attr("type", "text");
            $(this).removeClass("fa-eye");
            $(this).addClass("fa-eye-slash");
        } else
        {
            //Change type attribute
            $(".password").attr("type", "password");
            $(this).addClass("fa-eye");
            $(this).removeClass("fa-eye-slash");
        }
    });
    // Show/Hide Password/ Toggle Password Script End

    /*---------------------------------
    Add Question Form Block Js Start
    -----------------------------------*/
        $('.add-question-form-btn').on('click', function () {
            $('.add-more-question-form-block').removeClass('d-none')
        })
    /*---------------------------------
    Add Question Form Block Js End
    -----------------------------------*/

    /*---------------------------------
    Course Details Discussion button Start
    -----------------------------------*/
    $('.start-conversation-btn-wrap > button').on('click', function(){
        // $('.main-navigation').toggleClass('open');
        $('.discussion-righ-wrap').toggleClass('show-editor');
        return false;
    });
    /*---------------------------------
    Course Details Discussion button End
    -----------------------------------*/

    /*---------------------------------
    Upload Course Multi Step Form Js Start
    -----------------------------------*/
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $(".upload-course-step-item").length;

    setProgressBar(current);

    $(".next").on("click", function(){

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($(".upload-course-step-item").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({'opacity': opacity});
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    $(".previous").on("click", function(){

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($(".upload-course-step-item").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({'opacity': opacity});
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep){
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        // $(".progress-bar").css("width",percent+"%")
    }

    $(".submit").on("click", function() {
        return false;
    })
    // Upload Course Multi Step Form Js End

    // Onclick Add or Remove Class from Stepper Form Start


    // Show Tooltip Start
    $(document).on('ready', function(){
        $('[data-toggle="popover"]').popover();
    });


    $(document).on("click", ".deleteItem", function () {
        let form_id = this.dataset.formid;
        Swal.fire({
            title: 'Sure! You want to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete It!'
        }).then((result) => {
            if (result.value) {
                $("#" + form_id).submit();
            } else if (result.dismiss === "cancel") {
                Swal.fire(
                    "Cancelled",
                    "Your imaginary file is safe :)",
                    "error"
                )
            }
        })
    });

    /** ============ my script ===============**/
    $(document).on("click", "a.delete", function () {
        const selector = $(this);
        Swal.fire({
            title: 'Sure! You want to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete It!'
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'GET',
                    url: $(this).data("url"),
                    success: function (data) {
                        location.reload();
                    }
                })
            }
        })
    });

    /*---------------------------------
    Consultation On Click Add slot Modal Script Start
    -----------------------------------*/

    var maxField = 50; //Input fields increment limitation
    var addButton = $('.add_button'); //Add button selector
    var wrapper = $('.slot_field_wrap'); //Input field wrapper
    var fieldHTML = '<div class="col-sm-6 col-md-6"><div class="input-group add-slot-day-item mb-3"><input type="text" class="form-control" name="field_name[]" placeholder="Ex. 9:00 AM - 10:00 AM"><span class="input-group-text bg-transparent border-0 cursor remove_button"><span class="iconify" data-icon="fluent:delete-48-filled"></span></span></div></div>'; //New input field html
    var x = 1; //Initial field counter is 1

    //Once add button is clicked
    $(addButton).click(function(){
        //Check maximum number of input fields
        if(x < maxField){
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); //Add field html
        }
    });

    //Once remove button is clicked
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });

    /*---------------------------------
    Consultation On Click Add slot Modal Script End
    -----------------------------------*/


    /*---------------------------------
    Disable copy Start
    -----------------------------------*/

//   $('body').bind('cut copy paste', function (e) {
//     e.preventDefault();
//   });

//   $("body").on("contextmenu",function(e){
//     return false;
//   });


})(jQuery); // End of use strict

//这里实际上是匿名函数
// function(arg){...}
// 这就定义了一个匿名函数，参数为arg
// 而调用函数 时，是在函数后面写上括号和实参的，由于操作符的优先级，函数本身也需要用括号，即：
// (function(arg){...})(param)
// 这 就相当于定义了一个参数为arg的匿名函数，并且将param作为参数来调用这个匿名函数
// 而(function($){...}) (jQuery)则是一样的，之所以只在形参使用$，是为了不与其他库冲突，所以实参用jQuery
(function ($) {
    "use strict"; // Start of use strict

    // Floating label headings for the contact form
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });

    // Show the navbar when the page is scrolled up, 992 screen width is Large devices
    const MQL = 992;

    //primary navigation slide-in effect
    //  只有当屏幕宽度大于992时，向上滑动才会自动浮现导航栏
    if ($(window).width() > MQL) {
        let headerHeight = $('#mainNav').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function () {
                let currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
                        $('#mainNav').addClass('is-visible');
                    } else {
                        $('#mainNav').removeClass('is-visible is-fixed');
                    }
                } else if (currentTop > this.previousTop) {
                    //if scrolling down...
                    $('#mainNav').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }

})(jQuery); // End of use strict

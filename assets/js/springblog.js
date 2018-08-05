function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

hasClass(document.querySelector("html"), 'no-js');
if (window.screen.width > 992) {
    let headerHeight = document.getElementById('mainNav').offsetHeight;
    window.addEventListener("scroll", function() {
        if (window.screen.height > 992) {
            let scrollY = window.scrollY;
            if (scrollY>0 && hasClass(document.getElementById("mainNav"), "is-fixed")) {
                $("#mainNav").addClass("")
            } else {
                $('#mainNav').removeClass('is-visible is-fixed');
            }

        }
    });

}

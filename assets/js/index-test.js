// auto hide navbar
(function () {
    const MQL = 992;
    if (screen.width > MQL) {
        let header = document.getElementById("site-navigation");
        let headerHeight = header.offsetHeight;
        let previousTop = 0;
        // 监听滚动事件
        window.onscroll = function () {
            let currentTop = window.scrollY;
            // 如果向上滚动
            if (currentTop < previousTop) {
                if (currentTop > 0 && header.classList.contains("is-fixed")) {
                    header.classList.add("is-visible");
                } else {
                    header.classList.remove("is-visible", "is-fixed")
                }
            } else if (currentTop > previousTop) {
                header.classList.remove("is-visible");
                if (currentTop > headerHeight && !header.classList.contains("is-fixed")) {
                    header.classList.add("is-fixed");
                }
            }
            previousTop = currentTop;
        }
    }
})();
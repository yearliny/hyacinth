// auto hide navbar
let previousTop = 0;

function auto_nav() {
    // 只有在屏幕宽度大于 992，bootstrap-md 宽度的情况下，才会进行自动隐藏 bar
    const MQL = 992;
    if (screen.width > MQL) {
        let header = document.getElementById("site-navigation");
        let headerHeight = header.offsetHeight;
        // let previousTop = 0;

        // 监听滚动事件
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

function progress_bar(progress) {
    progress.max = window.scrollMaxY;
    progress.value = window.scrollY;
}

window.addEventListener("scroll", auto_nav);
let reading_progress = document.getElementById("reading-progress");
if (reading_progress != null) {
    window.addEventListener("scroll", progress_bar);
}

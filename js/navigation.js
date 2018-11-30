// auto hide navbar
// let previousTop = 0;

function auto_nav() {
    let header = document.getElementById("site-navigation");
    let headerHeight = header.offsetHeight;

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

let auto_nav_bate = function () {
    this.header = document.getElementById("site-navigation");
    this.headerHeight = this.header.offsetHeight;
    // 设定默认值
    this.previousTop = 0;
};

auto_nav_bate.prototype.handleEvent = function () {
    // 监听滚动事件
    let currentTop = window.scrollY;
    // 如果向上滚动
    if (currentTop < this.previousTop) {
        if (currentTop > 0 && this.header.classList.contains("is-fixed")) {
            this.header.classList.add("is-visible");
        } else {
            this.header.classList.remove("is-visible", "is-fixed")
        }
    } else if (currentTop > this.previousTop) {
        this.header.classList.remove("is-visible");
        if (currentTop > this.headerHeight && !this.header.classList.contains("is-fixed")) {
            this.header.classList.add("is-fixed");
        }
    }
    this.previousTop = currentTop;
};

// 只有在屏幕宽度大于 992，grid-lg(桌面设备) 宽度的情况下，才会进行自动隐藏 bar
if (screen.width > 992) {
    window.addEventListener("scroll", new auto_nav_bate());
}

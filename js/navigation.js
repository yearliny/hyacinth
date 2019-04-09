/**
 * 导航栏自动隐藏
 */
"use strict";
class auto_nav {

    constructor(){
        this.header = document.getElementById("site-navigation");
        this.headerHeight = this.header.offsetHeight;
        // 设定默认值
        this.previousTop = 0;
    }

    handleEvent() {
        // 监听滚动事件
        const currentTop = window.scrollY;
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
    }
}

// 只有在屏幕宽度大于 992，grid-lg(桌面设备) 宽度的情况下，才会进行自动隐藏 bar
if (screen.width > 992) {
    window.addEventListener("scroll", new auto_nav());
}

window.onscroll = function () {
    if (document.body.clientWidth > 991) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("header").style.backgroundColor = "#0A2640";
            document.getElementById("header").style.boxShadow = "2px 2px 16px rgba(0, 0, 0, .2)";
        } else {
            document.getElementById("header").style.backgroundColor = "transparent";
            document.getElementById("header").style.boxShadow = "none";
        }
    }
}

if (document.body.clientWidth < 992) {
    document.getElementById("header").style.backgroundColor = "#0A2640";
    document.getElementById("header").style.boxShadow = "2px 2px 16px rgba(0, 0, 0, .2)";

}

function navToggle() {
    document.querySelector(".nav_menu").classList.add("show");
}

document.querySelector(".nav_overlay").addEventListener("click", function () {
    document.querySelector(".nav_menu").classList.remove("show");
});
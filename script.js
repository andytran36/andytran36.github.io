var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    if (window.innerWidth <= 768) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-60px";
        }
        prevScrollpos = currentScrollPos;
    } else {
        document.getElementById("navbar").style.top = "0";
    }
}
window.addEventListener('resize', function() {
    var width = window.innerWidth;

    if (width >= 992 && width <= 1600) {
        document.body.style.zoom = "0.1"; // 90% shrink
    } else if (width >= 700 && width <= 767) {
        document.body.style.zoom = "0.2"; // 80% shrink
    } else if (width >= 600 && width < 700) {
        document.body.style.width = "75%";
    } else if (width <= 600) {
        document.body.style.width = "50%";
    } else {
        // Reset zoom if outside specified ranges
        document.body.style.zoom = "1";
        document.body.style.width = "auto";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // زر تفعيل الوضع الليلي
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // زر الرجوع للأعلى
    const scrollToTop = document.getElementById("scrollToTop");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTop.style.display = "block";
        } else {
            scrollToTop.style.display = "none";
        }
    });

    scrollToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // رسالة ترحيب
    setTimeout(() => {
        alert("مرحبًا بك في موقع الذكاء الاصطناعي!");
    }, 500);
});

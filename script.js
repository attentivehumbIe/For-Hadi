document.addEventListener("DOMContentLoaded", function() {
    // Массив котиков
    const catImages = [
        "https://cdn2.thecatapi.com/images/1.jpeg",
        "https://cdn2.thecatapi.com/images/2.jpeg",
        "https://cdn2.thecatapi.com/images/3.jpeg",
        "https://cdn2.thecatapi.com/images/4.jpeg",
        "https://cdn2.thecatapi.com/images/5.jpeg"
    ];

    // Заполнение галереи котиков
    const catGallery = document.querySelector(".cat-grid");
    catImages.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Котик";
        img.classList.add("cat-img");
        img.addEventListener("click", () => {
            alert("Ты нашел котика! 😻");
        });
        catGallery.appendChild(img);
    });

    // Сюрприз для Хади
    const surpriseBtn = document.getElementById("surpriseBtn");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    surpriseBtn.addEventListener("click", () => {
        popup.style.display = "flex";
    });

    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Открытие секретных сообщений
    const showMessageBtn = document.getElementById("showMessageBtn");
    const hiddenMessages = document.querySelectorAll(".message");

    showMessageBtn.addEventListener("click", () => {
        hiddenMessages.forEach(msg => msg.classList.add("visible"));
    });
});

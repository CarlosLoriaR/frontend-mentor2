document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", function () {

        const answer = this.nextElementSibling.querySelector(".answer");
        const btn = this.querySelector(".toggle");

        const wasOpen = answer.classList.contains("open");

        document.querySelectorAll(".answer").forEach(a => a.classList.remove("open"));
        document.querySelectorAll(".toggle").forEach(b => {
            b.textContent = "+";
            b.style.backgroundColor = "#8f32ff";
        });

        if (!wasOpen) {
            answer.classList.add("open");
            btn.textContent = "−";
            btn.style.backgroundColor = "black";
        }
    });
});


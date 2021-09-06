!function (d) {

    let questions = d.querySelectorAll(".question"),
        answers = d.querySelectorAll(".answer");
    images = d.querySelectorAll(".faq-box > img");

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", function () {
            questions[i].classList.toggle("active-question");
            answers[i].classList.toggle("answer");
            answers[i].classList.toggle("active-answer");
            images[i].classList.toggle("active-image");
        }
        );

        images[i].addEventListener("click", function () {
            questions[i].classList.toggle("active-question");
            answers[i].classList.toggle("answer");
            answers[i].classList.toggle("active-answer");
            images[i].classList.toggle("active-image");
        }
        );

        questions[i].addEventListener("mouseover", function () {
            questions[i].classList.add("hover-question");
        }
        );

        questions[i].addEventListener("mouseout", function () {
            questions[i].classList.remove("hover-question");
        }
        );

        images[i].addEventListener("mouseover", function () {
            images[i].classList.add("hover-image");
        }
        );

        images[i].addEventListener("mouseout", function () {
            images[i].classList.remove("hover-image");
        }
        );
    }

}(document);
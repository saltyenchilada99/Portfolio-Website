

var typed = new Typed(".text", {
    strings: ["Matthew Weber"],
    typeSpeed: 100,
});

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.about-text, .about-img, .portfolio, .contact-text, .contact-form, .row');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

const btn = document.getElementById('submit');
btn.addEventListener('click', () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const text = document.getElementById('text');

    emailjs.init("MLW7xsEXcg5yk7Gm6");
    emailjs.send("service_tfxg0po", "template_5ouds0k", { name: name.value, email: email.value, subject: subject.value, text: text.value })
        .then(() => {
            alert("Message sent successfully!");
        });

});


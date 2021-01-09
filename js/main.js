const cards = document.querySelectorAll('.card');
const alternateRedirectLink = "http://www.codearc.ml/";

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        if (card.getAttribute('data-redirect')) {
            window.location.href = card.getAttribute('data-redirect');
        } else {
            window.location.href = alternateRedirectLink;
        }

    });
});
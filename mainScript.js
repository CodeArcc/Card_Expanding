//get all the panels using queryselector
const panels = document.querySelectorAll('.panel');

//For each loop for adding random images to background of panel.
panels.forEach((panel, index) => {
    //screen width is used for image resolution.
    const screeWidth = Math.round(screen.width / 1.5);

    //add index to screen size for random images
    const screeWidthadd = screeWidth + index;

    //get Random image from unsplash url
    //if we want image 1080x1920 random image then use URL https://source.unsplash.com/random/1080x1920
    panel.style.backgroundImage = 'url("https://source.unsplash.com/random/' + screeWidth + 'x' + screeWidthadd + ')';

    //add event Listener of click when click happens it add active class to current panel and remove active class from other panels.
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
});

//function is used to remove active classes from all the panels.
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
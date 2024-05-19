// below code adapted by use of cs50.ai teaching assistant
let titles = document.querySelectorAll('strong');

titles.forEach(function(e) {
    e.style.fontSize = "1.1em";

    e.addEventListener('mouseover', function() {
        e.style.fontSize = "1.2em";
        e.style.color = "rgb(255, 255, 255)";
    });

    e.addEventListener('mouseout', function() {
        e.style.fontSize = "1.1em";
        e.style.color = "rgb(11, 78, 173)";
    });
});

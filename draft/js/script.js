let isScrolling = false;

window.addEventListener('scroll', myScrolling, false);

function myScrolling(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function() {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);


let two = document.querySelector('.child');
let one = document.querySelector('.fri');

function scrolling(e) {
    if (fullVisible(two)) {
        two.classList.add("active");
    } else{
        two.classList.remove("active");
    }
    if (fullVisible(one)) {
        one.classList.add("active");
    } else{
        one.classList.remove("active");
    }
}


function fullVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}

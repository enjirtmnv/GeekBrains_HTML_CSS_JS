document.addEventListener("DOMContentLoaded", callPhone, false);

let phone = document.querySelector('.reservation a');
let callThePhone = document.querySelector('.callThePhone');
let closePopup = document.querySelector('.closePopup');


let h2 = document.querySelector('.reservationTitleH2');

function callPhone() {
    phone.onclick = function () {
        callThePhone.style.display = 'block';
    };

    closePopup.addEventListener('click', function () {
        callThePhone.style.display = 'none';
    });
}


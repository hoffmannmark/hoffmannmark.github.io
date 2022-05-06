document.addEventListener('DOMContentLoaded', function () {
    let hamburgerBtn = document.getElementById('toggle');
    let overlayId = document.getElementById('overlay');

    hamburgerBtn.addEventListener('click', function () {
        overlayId.classList.toggle('open');
        document.querySelector('.hamburger__box').classList.toggle('active')
        document.querySelector('body').classList.toggle('overflow');
    })
});

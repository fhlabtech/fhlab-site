// =========================================
// SMOOTH SCROLL
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});

// =========================================
// NAVBAR SHADOW ON SCROLL
// =========================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        navbar.style.background = 'rgba(0,0,0,0.92)';

        navbar.style.boxShadow =
            '0 10px 30px rgba(0,0,0,0.35)';

    }

    else{

        navbar.style.background =
            'rgba(0,0,0,0.7)';

        navbar.style.boxShadow = 'none';
    }

});
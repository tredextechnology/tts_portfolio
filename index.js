document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header
    document.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // IntersectionObserver for scrolling animations from right
    const rightObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-from-right');
                entry.target.classList.add('show'); // Add show class to trigger fade-in
            } else {
                entry.target.classList.remove('animate-from-right');
                entry.target.classList.remove('show'); // Remove show class
            }
        });
    });

    const hiddenElementsRight = document.querySelectorAll('.hidden-right');
    hiddenElementsRight.forEach((el) => rightObserver.observe(el));

    // IntersectionObserver for left scrolling animation
    const leftObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-from-left');
                entry.target.classList.add('show'); // Add show class to trigger fade-in
            } else {
                entry.target.classList.remove('animate-from-left');
                entry.target.classList.remove('show'); // Remove show class
            }
        });
    });

    const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
    hiddenElementsLeft.forEach((el) => leftObserver.observe(el));
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('fade-out'); // Fade out the preloader
    setTimeout(() => {
        preloader.style.display = 'none'; // Completely hide after fade out
    }, 500); // Match this delay with the CSS transition time
});



//// FADE IN STARTS
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    const options = {
        root: null, // Use the viewport as the container
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add visible class
                
                // Re-add the observer after the fade-in
                setTimeout(() => {
                    entry.target.classList.remove('visible'); // Remove the class to reset
                }, 99999999999999999); // Adjust time to match your desired visibility duration
            } else {
                entry.target.classList.remove('visible'); // Remove visible class when not in view
            }
        });
    }, options);

    fadeElements.forEach(element => {
        fadeInObserver.observe(element); // Observe each fade-in element
    });
});


//// FADE IN ENDS


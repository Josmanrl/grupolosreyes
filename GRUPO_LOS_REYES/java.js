// JavaScript for Grupo Los Reyes website

document.addEventListener('DOMContentLoaded', () => {
    console.log('Grupo Los Reyes website loaded.');

    // --- Scroll Animation Logic using Intersection Observer ---

    // Select all elements that should be animated
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-bottom');

    // Configuration for the observer
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Callback function when an element intersects
    const intersectionCallback = (entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the animation
                entry.target.classList.add('is-visible');
                // Stop observing the element after it has become visible
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(intersectionCallback, observerOptions);

    // Observe each animated element
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // --- End Scroll Animation Logic ---

    // Add other interactive features here if needed in the future.
});

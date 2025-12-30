// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

/*
 * Developed for Anunzio International by Anzul Aqeel
 * Contact +971545822608 or +971585515742
 */

document.addEventListener('DOMContentLoaded', () => {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    document.body.appendChild(overlay);

    const img = document.createElement('img');
    img.id = 'lightbox-img';
    overlay.appendChild(img);

    // Open Lightbox
    const triggers = document.querySelectorAll('.lightbox-trigger');
    triggers.forEach(trigger => {
        trigger.addEventListener('click', e => {
            e.preventDefault();
            img.src = trigger.src;
            overlay.classList.add('active');
        });
    });

    // Close Lightbox
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    // Close on ESC
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
        }
    });
});

// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

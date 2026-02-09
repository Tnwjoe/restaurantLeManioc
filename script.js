// Ajouter une transition de fondu lors du chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';

    // Faire apparaître la page
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Ajouter un effet de transition au départ
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        const originalHref = button.getAttribute('onclick');
        if (originalHref) {
            button.addEventListener('click', (e) => {
                document.body.style.opacity = '0';
                setTimeout(() => {
                    eval(originalHref.replace('window.location.href=', 'window.location.href = '));
                }, 500);
                e.preventDefault();
            });
        }
    });
});
// RESPONSIVE MENU INTERACTION
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-nav');

    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', () => {
            siteNav.classList.toggle('open');
            // Change button icon or state for accessibility
            const isOpen = siteNav.classList.contains('open');
            menuToggle.textContent = isOpen ? '✕' : '☰';
            menuToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    // Interactive feedback for mock templates download
    const mockButtons = document.querySelectorAll('.mock-download-btn');
    mockButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Aviso Técnico: Las plantillas de los anexos están integradas estructuralmente en el repositorio. En un entorno real en producción, este botón descargará los archivos normalizados en formato editable .docx o .pdf.');
        });
    });
});

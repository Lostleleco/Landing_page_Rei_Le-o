document.addEventListener("DOMContentLoaded", function() {
    const elements = [
        document.querySelector('.hero__content h1'),
        document.querySelector('.hero__content h5'),
        document.querySelector('.button.login-button'),
        ...document.querySelectorAll('.navigation__links')
    ];
    
    elements.forEach(element => {
        if (element) {
            element.classList.add('fade-in');
            setTimeout(() => {
                element.classList.add('visible');
            }, 100); // Pequeno atraso para garantir que a classe .fade-in seja aplicada primeiro
        }
    });

    // Scroll suave ao clicar nos links de navegação
    const navigationLinks = document.querySelectorAll('.navigation__links');

    navigationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Corrigido: deve ser e.preventDefault() para evitar o comportamento padrão do link

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

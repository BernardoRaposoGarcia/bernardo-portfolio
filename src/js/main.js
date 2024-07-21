// Import our custom CSS
import '../scss/main.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import Individually plugins
// import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';

// const myModal = document.querySelector('#myModal')

// myModal.addEventListener('show.bs.modal', event => {
//   return event.preventDefault() // stops modal from being shown
// })


document.addEventListener('DOMContentLoaded', () => {
    
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');
    const header = document.querySelector('.navbar');

    const updateNavItems = () => {
        let activeSectionIndex = 0;
        const scrollPosition = window.scrollY + header.offsetHeight;

        sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSectionIndex = index;
        }
        });

        navItems.forEach(item => item.classList.remove('active'));
        if (navItems[activeSectionIndex]) {
        navItems[activeSectionIndex].classList.add('active');
        }
    };

    const onScroll = () => {
        const scrollPosition = window.scrollY;
        updateNavItems();
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial call to set the correct state on page load




    // Cria a loading page dinamicamente
    const contentHidden = document.querySelectorAll('.content')
    const loadingContainer = document.createElement('div');

    loadingContainer.classList.add('loading-container', 'd-flex', 'flex-column', 'vh-100', 'align-items-center', 'justify-content-center', 'gap-4');
    loadingContainer.innerHTML = `
        <div class="spinner-border text-lbluefox" role="status">
        </div>
        <p>Loading...</p>
    `;
    document.body.appendChild(loadingContainer);

    // Simula um tempo de carregamento (por exemplo, 2 segundos)
    setTimeout(() => {
        // Remove completamente o conteúdo HTML da loading page
        // document.body.innerHTML = '';

        document.body.removeChild(loadingContainer);
        contentHidden.forEach(element => {
            element.classList.toggle('visually-hidden');
        });
    }, 1000);
});



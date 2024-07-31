// Import our custom CSS
import '../scss/main.scss'

// Import bootstrap-icons 
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import * as functions from './functions.js';

// Import Individually plugins
// import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';

// const myModal = document.querySelector('#myModal')

// myModal.addEventListener('show.bs.modal', event => {
//   return event.preventDefault() // stops modal from being shown
// })

document.addEventListener('DOMContentLoaded', () => {
    functions.dinamicScroll();
    functions.loadPage();
    functions.colorModeToggler();
});



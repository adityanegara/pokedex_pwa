import 'regenerator-runtime';
import '../styles/main.scss';
import App from './views/app';

const app = new App({
    navbar : document.querySelector('#navbar_element'),
    content : document.querySelector('#main_element'),
    footer  : document.querySelector('#footer_element')
});

window.addEventListener('hashchange', ()=>{
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});
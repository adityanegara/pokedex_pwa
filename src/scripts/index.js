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

if('serviceWorker' in navigator){
    window.addEventListener('load', () =>{
        navigator.serviceWorker.register('/service-worker.js').then(registration =>{
            console.log('SW registered', registration);
        }).catch(registrationError =>{
            console.log('SW Registration failed', registrationError);
        });
    });
}

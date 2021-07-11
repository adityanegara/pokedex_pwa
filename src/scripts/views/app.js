import UrlParser from '../routes/url-parser';
import routes from '../routes/route';

class App {
    constructor({navbar, content, footer}){
        this._navbar = navbar;
        this._content = content;
        this._footer = footer;
    }

    async renderPage(){
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;
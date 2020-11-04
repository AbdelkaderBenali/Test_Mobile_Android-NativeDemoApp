const WebView_ICON = '~WebView';
const HOME_ICON = '~Home';

describe('2- La page : WebView', () =>{   
    it('2.1- Acceder à la page : WebView', () =>{
        // Accèder au menu : Home
        $(HOME_ICON).click();
        // Accèder au menu : WebView
        $(WebView_ICON).click();
        browser.pause(15000);
    })
})
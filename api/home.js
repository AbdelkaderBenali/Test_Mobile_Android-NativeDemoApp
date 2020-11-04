const LOGIN_ICON = '~Login';
const FORMS_ICON = '~Forms';
const SWIPE_ICON = '~Swipe';
const WebView_ICON = '~WebView';
const HOME_ICON = '~Home';

describe('1-Page d accueil', () => {
    it('1.1- accèder aux differents menus de la page d accueil', () =>{
        // Accèder au menu : WebView
        $(WebView_ICON).click();
        browser.pause(10000);

        // Accèder au menu : Login
        $(LOGIN_ICON).click();
        browser.pause(2000);
        

        // Accèder au menu : Forms
        $(FORMS_ICON).click();
        browser.pause(2000);

        // Accèder au menu : Swipe
        $(SWIPE_ICON).click();
        browser.pause(2000);

        // Accèder au menu : Home
        $(HOME_ICON).click();
        browser.pause(2000);
    })
})



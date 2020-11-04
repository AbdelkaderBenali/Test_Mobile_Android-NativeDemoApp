const HOME_ICON = '~Home';
const LOGIN_ICON = '~Login';
const LOGIN_MENU = '~button-login-container';
const Email = '~input-email';
const Password = '~input-password';
const LOGIN_BUTTON = '~button-LOGIN';
const OK_POPUP = '//*[@text="OK"]';

describe('3- La page : Login', () => {
    it('3.1- Acceder à la page Login et se connecter', () =>{
         // Accèder au menu : Home
         $(HOME_ICON).click();

        // Cliquer sur l'icone "Login"
        $(LOGIN_ICON).click();
        // Aller sur LOGIN
        $(LOGIN_MENU).click();
        // Saisir Email
        $(Email).setValue('kader@test.fr');
        // Saisir Mot de passe
        $(Password).setValue('12345678');
        // Cliquer sur le bouton LOGIN
        $(LOGIN_BUTTON).click();
        // Cliquer sur OK pour fermer la PopUp
        $(OK_POPUP).click();
        browser.pause(3000);
    });
});
const LOGIN_ICON = '~Login';
const SIGN_UP_MENU = '~button-sign-up-container';
const Email = '~input-email';
const Password = '~input-password';
const RepeatPassword = '~input-repeat-password';
const SIGN_UP_BUTTON = '~button-SIGN UP';
const OK_POPUP = '//*[@text="OK"]';

describe('4- La page : SignUp', () =>{
    it('4.1- Acceder à la page Login et s inscrire', function(){
        // Cliquer sur l'icone "Login"
        $(LOGIN_ICON).click();

        // Aller sur le menu SIGN UP
        $(SIGN_UP_MENU).click();
        // Saisir Email
        $(Email).setValue('abdel@test.fr');
        // Saisir Mot de passe
        $(Password).setValue('12345678');
        // Confirmer le Mdp
        $(RepeatPassword).setValue('12345678');
        // Cliquer sur le bouton SIGN UP
        $(SIGN_UP_BUTTON).click();
        // Cliquer sur OK pour fermer la PopUp
        $(OK_POPUP).click();
        browser.pause(3000);
    });
});
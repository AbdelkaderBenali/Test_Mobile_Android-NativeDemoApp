//const wdio = require('webdriverio')
const FORMS_ICON = '~Forms';
const FIELD_INPUT = '~text-input';
const Display_Result = '~input-text-result'
const Text = 'Je teste ce champ'
const SWITCH = '~switch';
const Dropdown = '~select-Dropdown';
const MenuWdio   = '//*[@text="webdriver.io is awesome"]'
const MenuAppium = '//*[@text="Appium is awesome"]'
const MenuApp = '//*[@text="This app is awesome"]'

describe('5- La page : Forms', () => {
    it('5.1- Saisir un texte et vérifier le champ de retour', () =>{
         // Cliquer sur l'icone "Forms"
        $(FORMS_ICON).click();
        // Saisir une texte dans le champ input
        $(FIELD_INPUT).setValue(Text);
        // Vérifier le contenu du champ refletant le champ input
        const Result = $(Display_Result).getText();
        expect(Result).toEqual(Text);
    });
    it('5.2- Switch', function(){
        // Switcher la poignée ON/OFF
        $(SWITCH).click();
        browser.pause(5000)
    });
    
    it('5.3- Menu deroulant : Dropdown', () =>{
        // Ouvrir le menu deroulant et selectionner la valeur : webdriver.io is awesome
        $(Dropdown).click();
        $(MenuWdio).click();
        browser.pause(2000);
        // Ouvrir le menu deroulant et selectionner la valeur : Appium is awesome
        $(Dropdown).click();
        $(MenuAppium).click();
        browser.pause(2000);
        // Ouvrir le menu deroulant et selectionner la valeur : This app is awesome
        $(Dropdown).click();
        $(MenuApp).click();
        browser.pause(4000);
    });

    // Reste à faire : scrolle vertical et accèder au bouton "Active"
});
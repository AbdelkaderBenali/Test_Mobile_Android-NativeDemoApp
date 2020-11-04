const SWIPE_ICON = '~Swipe';
const HOME_ICON = '~Home';
const CAROUSEL = '~Swipe-screen'

describe('6- La page : Swipe', () =>{   
    it('6.1- Acceder à la page : Swipe', () =>{
        // Accèder au menu : Home
        $(HOME_ICON).click();
        // Accèder au menu : Swipe
        $(SWIPE_ICON).click();
        browser.pause(5000);
        const screen = $(CAROUSEL);
    
        // defiler les elements
        screen.touchAction([
            'press',
            { action: 'moveTo', x: 500, y: 600 },
            { action: 'moveTo', x: 120, y: 600 },
            'release'
        ]);
        browser.pause(2000);

        screen.touchAction([
            'press',
            { action: 'moveTo', x: 500, y: 600 },
            { action: 'moveTo', x: 120, y: 600 },
            'release'
        ]);
        browser.pause(2000);

        screen.touchAction([
            'press',
            { action: 'moveTo', x: 500, y: 600 },
            { action: 'moveTo', x: 120, y: 600 },
            'release'
        ]);
        browser.pause(2000);

        screen.touchAction([
            'press',
            { action: 'moveTo', x: 500, y: 600 },
            { action: 'moveTo', x: 120, y: 600 },
            'release'
        ]);
        browser.pause(2000);
        
        screen.touchAction([
            'press',
            { action: 'moveTo', x: 500, y: 600 },
            { action: 'moveTo', x: 120, y: 600 },
            'release'
        ]);
    });
});
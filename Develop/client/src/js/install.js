const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {});
    console.log('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.remove('hidden');   
    });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {;
    console.log('Install button clicked');
    const promptEvent = window.deferredPrompt;
    if (promptEvent) {
        promptEvent.prompt();
        const userChoice = await promptEvent.userChoice;
        if (userChoice.outcocme === 'accepted') {
            console.log('User accepted the PWA install');
        } else {
            console.log('User declined the PWA install')
        }
        window.deferredPrompt = null;
        butInstall.classList.add('hidden');
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});

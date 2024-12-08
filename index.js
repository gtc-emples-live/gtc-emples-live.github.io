"use strict";
// Define a variable to hold the deferred install prompt event
let deferredPrompt = null;
// Get a reference to the install button
const installButton = document.getElementById('installButton');
// Ensure the install button is initially hidden
if (installButton) {
    installButton.style.display = 'none';
}
// Add an event listener for the 'beforeinstallprompt' event
window.addEventListener('beforeinstallprompt', (event) => {
    // Cast the event to BeforeInstallPromptEvent type
    const installEvent = event;
    // Prevent the default browser behavior (e.g., showing a mini-infobar)
    installEvent.preventDefault();
    // Store the event for later use
    deferredPrompt = installEvent;
    // Display the install button if it exists
    if (installButton) {
        installButton.style.display = 'block';
        // Attach a click event listener to the install button
        installButton.addEventListener('click', async () => {
            if (!deferredPrompt)
                return;
            try {
                // Trigger the installation prompt
                await deferredPrompt.prompt();
                // Wait for the user's response
                const choiceResult = await deferredPrompt.userChoice;
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the PWA installation.');
                }
                else {
                    console.log('User dismissed the PWA installation.');
                }
            }
            catch (error) {
                console.error('Error during the installation prompt:', error);
            }
            finally {
                // Reset the deferredPrompt variable
                deferredPrompt = null;
            }
        });
    }
});
// Add an event listener for the 'appinstalled' event
window.addEventListener('appinstalled', () => {
    console.log('PWA has been successfully installed.');
    // Hide the install button if it exists
    if (installButton) {
        installButton.style.display = 'none';
    }
    // Clear the deferred prompt
    deferredPrompt = null;
    window.location.href = "gotopwa.html";
});

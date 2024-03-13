// Function to dispatch a custom event
function dispatchCustomEvent() {
    const customEvent = new CustomEvent('customEvent', {
        detail: { message: 'This is a custom event!' }
    });
    document.dispatchEvent(customEvent);
}

// Function to listen for the custom event
function listenForCustomEvent() {
    document.addEventListener('customEvent', function(event) {
        console.log('Custom event received:', event.detail.message);
    });
}

// Attach event listener to the button
document.getElementById('dispatchButton').addEventListener('click', dispatchCustomEvent);

// Start listening for the custom event
listenForCustomEvent();
const dialog = document.getElementById('productNone');
const closeDialog = document.getElementById('close');
const warning = document.getElementById('warning-text');

document.addEventListener('DOMContentLoaded', function() {
    dialog.showModal();
    console.log(`The dialog ${dialog} has been opened.`);
});

warning.addEventListener('animationstart', function(){
    closeDialog.setAttribute('disabled', 'true');
});

warning.addEventListener('animationend', function(){
    closeDialog.removeAttribute('disabled');
});

closeDialog.addEventListener('click', function() {
    dialog.close();
    console.log(`The dialog ${dialog} has been closed.`);
});

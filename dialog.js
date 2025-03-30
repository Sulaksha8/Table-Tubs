const dialog = document.getElementById('productNone');
const closeDialog = document.getElementById('close');

document.addEventListener('DOMContentLoaded', function() {
    dialog.showModal();
    console.log(`The dialog ${dialog} has been opened.`)
});

closeDialog.addEventListener('click', function() {
    dialog.close();
    console.log(`The dialog ${dialog} has been closed.`)
});

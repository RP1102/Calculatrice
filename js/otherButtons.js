const popupEl = document.getElementById("popup")
const openDialogBtn = document.getElementById("open-popup-btn")
const closeDialogBtn = document.getElementById("close-popup-btn")

openDialogBtn.onclick = openDialog
closeDialogBtn.onclick = closeDialog

function openDialog(){
    popupEl.style.opacity = "100%"
    popupEl.style.top = "50%"
}

function closeDialog(){
    popupEl.style.opacity = "0%"
    popupEl.style.top = "0%"
}

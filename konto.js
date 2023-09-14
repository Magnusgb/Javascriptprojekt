//Get modal element
let modal = document.getElementById('simpleModal');
//Get open modal button
let modalBtn = document.getElementById('modalBtn');
//Get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click', openModal)
//Listen for close click
closeBtn.addEventListener('click', closeModal)
//Listen for outside click
window.addEventListener('click', outsideClick)

//funcion to open modal
function openModal(){
    modal.style.display = 'block';
}

//funcion to close modal
function closeModal(){
    modal.style.display = 'none';
}

//funcion to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

const mail = ["johndoe@gmail.dk", "loremipsum@mail.dk", "tiyam@gmail.com", "stine@gmail.dk", "emma@gmail.com"];

mail.push("tiyam@gmail.com")
console.log(mail);

if (mail[0]=="tiyam@gmail.com") {
    text ="Korrekt, Logger ind!"
} else {
    text = "Forkert, prøv igen"
}



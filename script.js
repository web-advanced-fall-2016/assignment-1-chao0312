// document.getElementById("click").onclick = function(){
//     document.getElementById("modal").className = "";    
//     document.getElementById("modal").classList.add("show");
//     document.body.style.backgroundColor = "darkcyan";  
// }

// document.getElementById("X").onclick = function(){
//     document.getElementById("modal").className = "";    
//     document.getElementById("modal").classList.add("hide");
//     document.body.style.backgroundColor = "cyan"; 
// }

let close = document.querySelectorAll('.X');

for(let i=0; i < close.length; i++) {
  close[i].addEventListener("click", closeModal, false);
}

function closeModal(evnt){
    console.log("triggered1!");
  let x = this.parentNode.parentNode.parentNode.querySelector('.modal');
  x.style.display = "none";
}


let openers = document.querySelectorAll('.modalOpener');

for(let opener of openers){
    opener.addEventListener('click',function(){
        let contentToOpen = this.dataset.modalId;
        let content = document.getElementById(contentToOpen).innerHTML;
        // console.log(content);
        let modal = document.querySelector('#modal');
        modal.innerHTML = content;
        modal.style.display = "block";
        document.body.style.backgroundColor = "darkcyan"; 
    });
}

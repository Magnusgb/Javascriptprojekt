let carousel = document.querySelector('.carousel1'); 

arrowIcons = document.querySelectorAll('.wrapper i');

let firstImg = carousel.querySelectorAll("img")[0];
 
const showHideIcons = () => {
if(carousel.scrollLeft == 0){
  arrowIcons[0].style.display = "none";
} else {
  arrowIcons[0].style.display = "block";
}

if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
  arrowIcons[1].style.display = "none"; 
} else {
  arrowIcons[1].style.display = "block"; 
}
}

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () =>{
    showHideIcons();
    setTimeout(() => showHideIcons(), 60);
  });
});

for (let i = 0; i < arrowIcons.length; i++) {
  
  arrowIcons[i].addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth;

    if (arrowIcons[i].id == "left") {
      carousel.scrollLeft -= firstImgWidth;
    } else {
      carousel.scrollLeft += firstImgWidth;
    }
  });
}




 

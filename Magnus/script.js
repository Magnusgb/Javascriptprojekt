arrowIcons = document.querySelectorAll('.wrapper i');
let carousel = document.querySelector('.carousel1'); 
firstImg = carousel.querySelectorAll("img") [0];

let firstImgWidth = firstImg.clientWidth + 14;


arrowIcons.forEach(icon => {
   icon.addEventListener("click",() => {
      if(icon.id == "left") {
        carousel.scrollLeft -= firstImgWidth;
      } else {
        carousel.scrollLeft += firstImgWidth;
      }
   }); 
})

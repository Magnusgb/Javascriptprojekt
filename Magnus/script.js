let arrowIcons = document.querySelectorAll('.wrapper i');
let carousel = document.querySelector('.carousel1'); 
let firstImg = carousel.querySelectorAll("img")[0];
let firstImgWidth = firstImg.clientWidth;

for (let i = 0; i < arrowIcons.length; i++) {

  arrowIcons[i].addEventListener("click", () => {
    
    if (arrowIcons[i].id == "left") {
      carousel.scrollLeft -= firstImgWidth;
    } else {
      carousel.scrollLeft += firstImgWidth;
    }
  });
}


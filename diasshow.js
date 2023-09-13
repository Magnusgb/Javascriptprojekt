// Load udløses, når hele HTML-siden er blevet indlæst i browseren//
window.addEventListener("load", function(){ //funktion der udføres efter load//
  
    //Oprettelse af variable//
    //Timeout bruges at til ændre billedet til det oprindelige billede igen, når mussen fjernes fra billedet igen//
    //Item-container fra HTML//
  let items_container = document.getElementById("items_container");
  let thumbtimer, ti=0, billeder="";

  //Oprettelse af objeketerne, der indeholder produktbilleder og produktbillederne til hoverfunktion//
  let obj1 = {name:"samber season", pics:["billeder/amber-season.jpg","billeder/amber-season-hover.jpg"]}
  let obj2 = {name:"amber caramel", pics:["billeder/amber-caramel.jpg","billeder/amber-caramel-hover.jpg"]}
  let obj3 = {name:"liquorice", pics:["billeder/lisquorice.jpg","billeder/liquorice-hover.jpg"]}
  
  //Array med objekterne//
  let ary = [obj1,obj2,obj3];


  for(var i=0; i < ary.length; i++){
        let div= document.createElement("div");
        let img = document.createElement("img");//Oprettelse af billederne//
        let text = document.createElement("h1"); //Overskift/titel til hvert billede/produkt//
        let price = document.createElement("h2"); // Underoverskift/pris til hvert billede/produkt//
      
        
 div.className = "item"; //tilføjer class "Item" til oprettelse af container//
    img.oi = i;
    img.src = billeder + ary[i].pics[0];
    items_container.appendChild(div);
        div.appendChild(img);
        div.appendChild(text);
        div.appendChild(price); 
        


    //Teksten og prisen under billederne/produkterne, værdierne i viser hvilket billede der skrives under//
        if (i === 0) {
            text.textContent = "Amber Season Giftbag";
         }
         else if (i === 1) {
            text.textContent = "Amber Caramel"; 
        }
        else if (i === 2) {
            text.textContent = "Liquorice Dragee"; 
        }


        if (i === 0) {
            price.textContent = "274,00 kr";
        }
        else if (i === 1) {
            price.textContent = "82,00 kr"; 
        }
        else if (i === 2) {
            price.textContent = "60,00 kr"; 
          }




    // Billederne der skifter når man kører over dem med musen//
        img.addEventListener("mouseenter", function (event) {
            ti = 0; 
            event.target.src = billeder + ary[event.target.oi].pics[1]; 
        });
        img.addEventListener("mouseleave", function (event) {
            
            thumbtimer = setTimeout(function () {
                ti = 0;
                event.target.src = billeder + ary[event.target.oi].pics[0]; 
            }, 700); // Er fonsinkelsen på 0,7 sek//
        });
    
     
        div.addEventListener("mouseenter", function () {
            clearTimeout(thumbtimer);
        });
    
    
        div.addEventListener("mouseleave", function (event) {
            ti = 0;
            event.target.children[0].src = billeder + ary[event.target.children[0].oi].pics[0];
        });
    }
});
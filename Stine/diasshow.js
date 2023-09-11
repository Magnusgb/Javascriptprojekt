window.addEventListener("load", function(){
  
    let items_container = document.getElementById("items_container");
  let thumbtimer, ti=0, billeder="";
  let obj1 = {name:"summerbird", pics:["amber-season.jpg","amber-season-hover.jpg"]}
  let obj2 = {name:"summerbir", pics:["amber-caramel.jpg","amber-caramel-hover.jpg"]}
  let obj3 = {name:"summerbi", pics:["lisquorice.jpg","liquorice-hover.jpg"]}
  let ary = [obj1,obj2,obj3];
  for(var i=0; i < ary.length; i++){
        let div= document.createElement("div");
        let img = document.createElement("img");
        let span = document.createElement("span");
        div.className = "item";
        img.oi = i;
        img.src = billeder + ary[i].pics[0];
        span.innerHTML = ary[i].name;
        items_container.appendChild(div);
        div.appendChild(img);
        div.appendChild(span);
        img.addEventListener("mouseover", function(event){
            thumbtimer= setInterval(function(){
                ti++;
                if(ti == ary[event.target.oi].pics.length){
                    ti = 0;
                }
                event.target.src = billeder + ary[event.target.oi].pics[ti];
            }, 700);
        
});
img.addEventListener("mouseout", function(event){
    clearInterval(thumbtimer);
    ti=0;
    event.target.src=billeder + ary[event.target.oi].pics[ti];
});
}
});
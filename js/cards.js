const images = [
    {
      caption: 'Zombie Horde Structure Deck',
      alt: 'StructureDeck1',
      image: "https://vignette.wikia.nocookie.net/yugioh/images/7/7d/SR07-DeckIT.png/revision/latest?cb=20190308011533",
      price: "11.99"
    },
        
    {
      caption: 'Master of Pendulum Structure Deck ',
      alt: 'Structuredeck2',
    image: "https://images-na.ssl-images-amazon.com/images/I/916FBEe6BSL._AC_SL1500_.jpg",
    price: "12.99"
    },
    {
      caption: 'Shaddoll Showdown Structure Deck',
      alt: 'structuredeck3',
      image: "https://vignette.wikia.nocookie.net/yugioh/images/3/3e/SD37-DeckJP.png/revision/latest?cb=20191022081909",
      price: "13.99"
    },
    {
      caption: 'Marik Structure Deck',
      alt: 'structuredeck4',
      image: "https://vignette.wikia.nocookie.net/yugioh/images/3/30/SDMA-DeckEN.png/revision/latest/top-crop/width/360/height/450?cb=20160222105118",
      price: "14.99"
        
    },
    {
      caption: 'Soulburner Structure Deck',
      alt: 'structuredeck5',
      image: "https://i5.walmartimages.ca/images/Enlarge/588/453/6000199588453.jpg",
      price: "11.99"
        
    }
  ];
  

  function YugiohDeck(e){
    var HTMLID=document.getElementById("images");
    var FigureElement = document.createElement("figure");
    var IDtoFigure = HTMLID.appendChild(FigureElement);
    for(var i=0;i<images.length;i++){
      var NewDiv = document.createElement("div")
      var ImageElement = document.createElement("img");
      ImageElement.setAttribute('src',images[i].image);
      ImageElement.setAttribute('alt',images[i].image);
      ImageElement.setAttribute('width',150);
      ImageElement.setAttribute('height',200);
      FigureElement.setAttribute('style',"display:inline-flex")
      ImageElement.setAttribute("class","card");
      ImageElement.setAttribute('margin-top',50);
      ImageElement.setAttribute('margin-left',50);
      var BreakElement = document.createElement("br");
      NewDiv.setAttribute("class","card2")
   
      /*
    
      */



      var CaptionElement = document.createElement("figcaption");
      var CaptionText = document.createTextNode(images[i].caption);
      var Caption = CaptionElement.appendChild(CaptionText);
      NewDiv.appendChild(ImageElement);
      NewDiv.appendChild(BreakElement);
      NewDiv.appendChild(Caption)
      NewDiv.appendChild(BreakElement);
      
      IDtoFigure.appendChild(NewDiv)
      

  
      
    
    
    }
/* FORM */


    for(var i=0;i<images.length;i++){
      if(i==0){
        var x = document.createElement("SELECT");
        x.setAttribute("id", "mySelect");
        x.setAttribute("form", "PurchaseForm");
        document.body.appendChild(x);
        }
      
        var z = document.createElement("option");
        z.setAttribute("value", i);
        var t = document.createTextNode(images[i].caption + ' $' + images[i].price);
        z.appendChild(t);
        document.getElementById("mySelect").appendChild(z);
  

    }
{
  var f = document.createElement("form");
f.setAttribute('method',"get");
f.setAttribute('action',"submit.html");
f.setAttribute('id',"PurchaseForm");


var s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Buy Now!");

f.appendChild(s);



document.getElementsByTagName('body')[0].appendChild(f);
}
    

  };

  document.getElementsByTagName("body").addEventListener('load' ,YugiohDeck());




function feedbad()
{
    x=document.getElementById("feedback_name");
    y=document.getElementById("review_name");
    y.innerHTML=x.value;
    x2=document.getElementById("feedback_comment");
    y2=document.getElementById("review_comment");
    y2.innerHTML=x2.value;
    rate=document.getElementById("rating");
    r=rate.value;
    star=document.getElementById("stars")
    x.value="";
    x2.value="";
    rate.value="";
    email.value="";
    nu=document.getElementById("number-ph");
    nu.value="";
    
    if(r==1)
   {
        s1.className="fas fa-star";
        s2.className="far fa-star";
        s3.className="far fa-star";
        s4.className="far fa-star";
        s5.className="far fa-star";
    }
    else if(r==2)
    {
        s1.className="fas fa-star";
        s2.className="fas fa-star";
        s3.className="far fa-star";
        s4.className="far fa-star";
        s5.className="far fa-star";
    }
    else if(r==3)
    {
        s1.className="fas fa-star";
        s2.className="fas fa-star";
        s3.className="fas fa-star";
        s4.className="far fa-star";
        s5.className="far fa-star";
    }
    else if(r==4)
    {
        s1.className="fas fa-star";
        s2.className="fas fa-star";
        s3.className="fas fa-star";
        s4.className="fas fa-star";
        s5.className="far fa-star";
    }
    else
    {
        s1.className="fas fa-star";
        s2.className="fas fa-star";
        s3.className="fas fa-star";
        s4.className="fas fa-star";
        s5.className="fas fa-star";
    }
}
function myFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

  function myFunction2() {
    var x = document.getElementById("Demo2");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

  function myFunction3() {
    var x = document.getElementById("Demo3");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

  function myFunction4() {
    var x = document.getElementById("Demo4");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

  function myFunction5() {
    var x = document.getElementById("Demo5");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  function myFunction6() {
    var x = document.getElementById("Demo6");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  var item=0;
   function burger1()
  {  item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item1"
      alert("added veg cheese burger to the cart");
      container.appendChild(x);
      con=document.getElementById("item1");
      y=document.createElement("i");
      y.setAttribute("onlick","b1()");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/burger/veg.jpg"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="Veg cheese burger";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function burger2()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item2"
      alert("added Panner crunchy to the cart");
      container.appendChild(x);
      con=document.getElementById("item2");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/burger/b2.jpg"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="Panner crunchy burger";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function burger3()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item3"
      alert("added soya tikki burger to the cart");
      container.appendChild(x);
      con=document.getElementById("item3");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/burger/b3.jpg"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="soya tikki burger";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function burger4()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item4"
      alert("added egg and cheese burger to the cart");
      container.appendChild(x);
      con=document.getElementById("item4");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/burger/b4.jpeg"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="egg and cheese burger";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function burger5()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item5"
      alert("crispy chicken burger to the cart");
      container.appendChild(x);
      con=document.getElementById("item5");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/burger/b5.jpg"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="crispy chicken burger";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function burger6()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item6"
      alert("added mutton seekh burger to the cart");
      container.appendChild(x);
      con=document.getElementById("item6");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/burger/b6.jpg"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="mutton seekh burger";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function pizza1()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item1-1"
      alert("added veg cheese burger to the cart");
      container.appendChild(x);
      con=document.getElementById("item1-1");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/pizza/p1.jpg"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="cheese and corn pizza";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function pizza2()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item1-2"
      alert("added chicken suace pizza to the cart");
      container.appendChild(x);
      con=document.getElementById("item1-2");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/pizza/p2.jpg"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="chicken sausage pizza";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function pizza3()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item1-3"
      alert("added chicken suace pizza to the cart");
      container.appendChild(x);
      con=document.getElementById("item1-3");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/pizza/p3.jpg"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="chicken BBQ pizza";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function pizza4()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item1-4"
      alert("added delux veg pizza to the cart");
      container.appendChild(x);
      con=document.getElementById("item1-4");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/pizza/p4.jpg"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="delux veg pizza";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function pizza5()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item1-5"
      alert("added marghretia pizza to the cart");
      container.appendChild(x);
      con=document.getElementById("item1-5");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/pizza/p5.jpg"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="margherita pizza";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function pizza6()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item1-6"
      alert("added chicken tikka pizza to the cart");
      container.appendChild(x);
      con=document.getElementById("item1-6");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/pizza/p6.jpg"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="chicken tikka pizza";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function chicken1()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item2-1"
      alert("added BBQ chicken drumsticks to the cart");
      container.appendChild(x);
      con=document.getElementById("item2-1");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/chicken/c1.png"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="BBQ chicken drumsticks pizza";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function chicken2()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item2-2"
      alert("added BBQ chicken wings to the cart");
      container.appendChild(x);
      con=document.getElementById("item2-2");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/chicken/c2.png"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="BBQ chicken wings pizza";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function chicken3()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item2-3"
      alert("added chicken lolipops to the cart");
      container.appendChild(x);
      con=document.getElementById("item2-3");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/chicken/c3.png"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="chicken lolipop pizza";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function chicken4()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item2-4"
      alert("added chicken-65 to the cart");
      container.appendChild(x);
      con=document.getElementById("item2-4");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/chicken/c4.png"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="chicken-65 pizza";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function chicken5()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item2-5"
      alert("added tandoori chicken to the cart");
      container.appendChild(x);
      con=document.getElementById("item2-5");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/chicken/c5.png"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="BBQ chicken drumsticks pizza";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function chicken6()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item2-6"
      alert("added chicken kebab to the cart");
      container.appendChild(x);
      con=document.getElementById("item2-6");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/chicken/c6.png"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="chicken kebab pizza";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }

  function side1()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item3-1"
      alert("added french fries to the cart");
      container.appendChild(x);
      con=document.getElementById("item3-1");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/sides/s1.jpg"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="french fries";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
  function side2()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item3-2"
      alert("added ranch dip to the cart");
      container.appendChild(x);
      con=document.getElementById("item3-2");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/sides/s2.jpg"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="ranch dip";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }
   
  function side2()
  {  
    item++;
    var container=document.getElementById("box-cart");
    var con;
    if( confirm("do you want to add this item to cart?")==true)
    {
      x=document.createElement("div");
      x.classList.add("box");
      x.id="item3-2"
      alert("added ranch dip to the cart");
      container.appendChild(x);
      con=document.getElementById("item3-2");
      y=document.createElement("i");
      con.appendChild(y);
      y.classList.add("fas", "fa-times");
      image=document.createElement("IMG");
      image.src="menu/sides/s2.jpg"
      con.appendChild(image);
      head=document.createElement("h3");
      head.innerHTML="ranch dip";
      con.appendChild(head);
      bro=document.createElement("BR");
      price=document.createElement("SPAN");
      price.innerHTML="price:";
      pri=document.createElement("SPAN");
      pri.classList.add("price");
      pri.classList.add("price");
      pri.innerHTML="₹55"
      con.appendChild(bro);
      con.appendChild(price);
      con.appendChild(pri);
      price.style.color="grey";
      price.style.fontSize="20px"
      pri.style.color="red";
      pri.style.fontSize="20px";
    }
    else
    {
      alert("you canceled")
    }
  }


function side3()
{ 
  item++; 
  var container=document.getElementById("box-cart");
  var con;
  if( confirm("do you want to add this item to cart?")==true)
  {
    x=document.createElement("div");
    x.classList.add("box");
    x.id="item3-3"
    alert("added red pepper dip to the cart");
    container.appendChild(x);
    con=document.getElementById("item3-3");
    y=document.createElement("i");
    con.appendChild(y);
    y.classList.add("fas", "fa-times");
    image=document.createElement("IMG");
    image.src="menu/sides/3.jpg"
    con.appendChild(image);
    head=document.createElement("h3");
    head.innerHTML="red pepper dip";
    con.appendChild(head);
    bro=document.createElement("BR");
    price=document.createElement("SPAN");
    price.innerHTML="price:";
    pri=document.createElement("SPAN");
    pri.classList.add("price");
    pri.classList.add("price");
    pri.innerHTML="₹55"
    con.appendChild(bro);
    con.appendChild(price);
    con.appendChild(pri);
    price.style.color="grey";
    price.style.fontSize="20px"
    pri.style.color="red";
    pri.style.fontSize="20px";
  }
  else
  {
    alert("you canceled")
  }
}

function side4()
{  item++;
  var container=document.getElementById("box-cart");
  var con;
  if( confirm("do you want to add this item to cart?")==true)
  {
    x=document.createElement("div");
    x.classList.add("box");
    x.id="item3-4"
    alert("added cheese nuggets to the cart");
    container.appendChild(x);
    con=document.getElementById("item3-4");
    y=document.createElement("i");
    con.appendChild(y);
    y.classList.add("fas", "fa-times");
    image=document.createElement("IMG");
    image.src="menu/sides/s4.jpg"
    con.appendChild(image);
    head=document.createElement("h3");
    head.innerHTML="cheese nuggets";
    con.appendChild(head);
    bro=document.createElement("BR");
    price=document.createElement("SPAN");
    price.innerHTML="price:";
    pri=document.createElement("SPAN");
    pri.classList.add("price");
    pri.classList.add("price");
    pri.innerHTML="₹55"
    con.appendChild(bro);
    con.appendChild(price);
    con.appendChild(pri);
    price.style.color="grey";
    price.style.fontSize="20px"
    pri.style.color="red";
    pri.style.fontSize="20px";
  }
  else
  {
    alert("you canceled")
  }
}

function side5()
{  item++;
  var container=document.getElementById("box-cart");
  var con;
  if( confirm("do you want to add this item to cart?")==true)
  {
    x=document.createElement("div");
    x.classList.add("box");
    x.id="item3-5"
    alert("added garlic bread to the cart");
    container.appendChild(x);
    con=document.getElementById("item3-5");
    y=document.createElement("i");
    con.appendChild(y);
    y.classList.add("fas", "fa-times");
    image=document.createElement("IMG");
    image.src="menu/sides/s5.jpg"
    con.appendChild(image);
    head=document.createElement("h3");
    head.innerHTML="garlic bread";
    con.appendChild(head);
    bro=document.createElement("BR");
    price=document.createElement("SPAN");
    price.innerHTML="price:";
    pri=document.createElement("SPAN");
    pri.classList.add("price");
    pri.classList.add("price");
    pri.innerHTML="₹55"
    con.appendChild(bro);
    con.appendChild(price);
    con.appendChild(pri);
    price.style.color="grey";
    price.style.fontSize="20px"
    pri.style.color="red";
    pri.style.fontSize="20px";
  }
  else
  {
    alert("you canceled")
  }
}

function pasta1()
{  item++;
  var container=document.getElementById("box-cart");
  var con;
  if( confirm("do you want to add this item to cart?")==true)
  {
    x=document.createElement("div");
    x.classList.add("box");
    x.id="item4-1"
    alert("added panner tikka pasta to the cart");
    container.appendChild(x);
    con=document.getElementById("item4-1");
    y=document.createElement("i");
    con.appendChild(y);
    y.classList.add("fas", "fa-times");
    image=document.createElement("IMG");
    image.src="menu/pasta/p1.jpg"
    con.appendChild(image);
    head=document.createElement("h3");
    head.innerHTML="panner tikka pasta";
    con.appendChild(head);
    bro=document.createElement("BR");
    price=document.createElement("SPAN");
    price.innerHTML="price:";
    pri=document.createElement("SPAN");
    pri.classList.add("price");
    pri.classList.add("price");
    pri.innerHTML="₹55"
    con.appendChild(bro);
    con.appendChild(price);
    con.appendChild(pri);
    price.style.color="grey";
    price.style.fontSize="20px"
    pri.style.color="red";
    pri.style.fontSize="20px";
  }
  else
  {
    alert("you canceled")
  }
}
function pasta2()
{  item++;
  var container=document.getElementById("box-cart");
  var con;
  if( confirm("do you want to add this item to cart?")==true)
  {
    x=document.createElement("div");
    x.classList.add("box");
    x.id="item4-2"
    alert("added masala n mac pasta to the cart");
    container.appendChild(x);
    con=document.getElementById("item4-2");
    y=document.createElement("i");
    con.appendChild(y);
    y.classList.add("fas", "fa-times");
    image=document.createElement("IMG");
    image.src="menu/pasta/p2.jpg"
    con.appendChild(image);
    head=document.createElement("h3");
    head.innerHTML="masala n mac pasta";
    con.appendChild(head);
    bro=document.createElement("BR");
    price=document.createElement("SPAN");
    price.innerHTML="price:";
    pri=document.createElement("SPAN");
    pri.classList.add("price");
    pri.classList.add("price");
    pri.innerHTML="₹55"
    con.appendChild(bro);
    con.appendChild(price);
    con.appendChild(pri);
    price.style.color="grey";
    price.style.fontSize="20px"
    pri.style.color="red";
    pri.style.fontSize="20px";
  }
  else
  {
    alert("you canceled")
  }
}
function pasta3()
{  item++;
  var container=document.getElementById("box-cart");
  var con;
  if( confirm("do you want to add this item to cart?")==true)
  {
    x=document.createElement("div");
    x.classList.add("box");
    x.id="item4-3"
    alert("added chicken  pasta to the cart");
    container.appendChild(x);
    con=document.getElementById("item4-3");
    y=document.createElement("i");
    con.appendChild(y);
    y.classList.add("fas", "fa-times");
    image=document.createElement("IMG");
    image.src="menu/pasta/p3.jpeg"
    con.appendChild(image);
    head=document.createElement("h3");
    head.innerHTML="chicken pasta";
    con.appendChild(head);
    bro=document.createElement("BR");
    price=document.createElement("SPAN");
    price.innerHTML="price:";
    pri=document.createElement("SPAN");
    pri.classList.add("price");
    pri.classList.add("price");
    pri.innerHTML="₹55"
    con.appendChild(bro);
    con.appendChild(price);
    con.appendChild(pri);
    price.style.color="grey";
    price.style.fontSize="20px"
    pri.style.color="red";
    pri.style.fontSize="20px";
  }
  else
  {
    alert("you canceled")
  }
}
function pasta4()
{  item++;
  var container=document.getElementById("box-cart");
  var con;
  if( confirm("do you want to add this item to cart?")==true)
  {
    x=document.createElement("div");
    x.classList.add("box");
    x.id="item4-4"
    alert("added white sauce pasta to the cart");
    container.appendChild(x);
    con=document.getElementById("item4-4");
    y=document.createElement("i");
    con.appendChild(y);
    y.classList.add("fas", "fa-times");
    image=document.createElement("IMG");
    image.src="menu/pasta/p2.jpg"
    con.appendChild(image);
    head=document.createElement("h3");
    head.innerHTML="white sauce pasta";
    con.appendChild(head);
    bro=document.createElement("BR");
    price=document.createElement("SPAN");
    price.innerHTML="price:";
    pri=document.createElement("SPAN");
    pri.classList.add("price");
    pri.classList.add("price");
    pri.innerHTML="₹55"
    con.appendChild(bro);
    con.appendChild(price);
    con.appendChild(pri);
    price.style.color="grey";
    price.style.fontSize="20px"
    pri.style.color="red";
    pri.style.fontSize="20px";
  }
  else
  {
    alert("you canceled")
  }
}
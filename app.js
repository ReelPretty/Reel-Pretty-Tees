
function getCart(){
 return JSON.parse(localStorage.getItem("cart")||"[]");
}
function saveCart(c){localStorage.setItem("cart",JSON.stringify(c));}

function addToCart(id){
 const cart=getCart();
 const item=cart.find(i=>i.id===id);
 if(item){item.qty+=1;}
 else{cart.push({id,qty:1});}
 saveCart(cart);
 alert("Added to cart");
}

function renderProducts(){
 const grid=document.getElementById("grid");
 if(!grid) return;
 grid.innerHTML="";
 products.forEach(p=>{
  const div=document.createElement("div");
  div.className="card";
  div.innerHTML=`
   <img src="${p.image}">
   <h3>${p.name}</h3>
   <p>$${p.price}</p>
   <button onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  grid.appendChild(div);
 });
}
window.onload=renderProducts;

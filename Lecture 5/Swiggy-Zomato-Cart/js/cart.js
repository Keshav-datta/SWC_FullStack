let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const cartContainer =
document.getElementById("cart");

function renderCart()
{
cartContainer.innerHTML="";

let total = 0;

cart.forEach((item,index)=>
{
total +=
item.price * item.quantity;

cartContainer.innerHTML += `
<div class="card">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button
onclick="decrease(${index})"
>
-
</button>

${item.quantity}

<button
onclick="increase(${index})"
>
+
</button>

</div>
`;
});

document.getElementById("total")
.innerText =
`Total: ₹${total}`;

localStorage.setItem(
"cart",
JSON.stringify(cart)
);
}

function increase(index)
{
cart[index].quantity++;
renderCart();
}

function decrease(index)
{
if(cart[index].quantity > 1)
{
cart[index].quantity--;
}
else
{
cart.splice(index,1);
}

renderCart();
}

renderCart();

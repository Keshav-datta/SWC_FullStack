const menuItems = [
{
id:1,
name:"Veg Burger",
price:149
},
{
id:2,
name:"Cheese Burger",
price:199
},
{
id:3,
name:"French Fries",
price:99
}
];

const menu =
document.getElementById("menu");

menuItems.forEach(item =>
{
menu.innerHTML += `
<div class="card">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<label>
<input
type="checkbox"
value="30"
>
Extra Cheese (+₹30)
</label>

<br><br>

<button
onclick="addToCart(${item.id})"
>
Add To Cart
</button>

</div>
`;
});

function addToCart(id)
{
const item =
menuItems.find(i => i.id === id);

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

cart.push({
...item,
quantity:1
});

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert("Item Added");
}

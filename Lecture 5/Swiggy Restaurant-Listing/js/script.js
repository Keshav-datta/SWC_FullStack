const restaurants = [
{
    id:1,
    name:"Burger Hub",
    category:"Fast Food",
    rating:4.5,
    cuisine:"American",
    deliveryTime:"25 mins",
    image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
},
{
    id:2,
    name:"Spice Garden",
    category:"Indian",
    rating:4.3,
    cuisine:"North Indian",
    deliveryTime:"30 mins",
    image:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600"
},
{
    id:3,
    name:"Dragon Bowl",
    category:"Chinese",
    rating:4.6,
    cuisine:"Chinese",
    deliveryTime:"20 mins",
    image:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600"
},
{
    id:4,
    name:"Pizza Point",
    category:"Fast Food",
    rating:4.4,
    cuisine:"Italian",
    deliveryTime:"35 mins",
    image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
},
{
    id:5,
    name:"Desi Tadka",
    category:"Indian",
    rating:4.7,
    cuisine:"Punjabi",
    deliveryTime:"28 mins",
    image:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600"
}
];

const container =
document.getElementById("restaurantContainer");

function displayRestaurants(data)
{
    container.innerHTML = "";

    data.forEach((restaurant) =>
    {
        container.innerHTML += `
        <div class="card">
            <img src="${restaurant.image}" alt="${restaurant.name}">
            
            <div class="card-content">
                <h3>${restaurant.name}</h3>

                <p class="rating">
                    ⭐ ${restaurant.rating}
                </p>

                <p>
                    Cuisine: ${restaurant.cuisine}
                </p>

                <p>
                    Delivery: ${restaurant.deliveryTime}
                </p>
            </div>
        </div>
        `;
    });
}

displayRestaurants(restaurants);

function filterRestaurants(category)
{
    if(category === "All")
    {
        displayRestaurants(restaurants);
        return;
    }

    const filtered =
    restaurants.filter(
        restaurant =>
        restaurant.category === category
    );

    displayRestaurants(filtered);
}

document
.getElementById("searchInput")
.addEventListener("keyup", function()
{
    const searchValue =
    this.value.toLowerCase();

    const filtered =
    restaurants.filter(
        restaurant =>
        restaurant.name
        .toLowerCase()
        .includes(searchValue)
    );

    displayRestaurants(filtered);
});

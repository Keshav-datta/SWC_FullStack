const itemContainer =
    document.getElementById("itemContainer");

const pagination =
    document.getElementById("pagination");

const ITEMS_PER_PAGE = 10;
let currentPage = 1;

/*
    Sample Data
*/
const products = [];

for(let i = 1; i <= 100; i++){
    products.push(`Product ${i}`);
}

/*
    Render Items
*/
function renderItems(page){

    itemContainer.innerHTML = "";

    const start =
        (page - 1) * ITEMS_PER_PAGE;

    const end =
        start + ITEMS_PER_PAGE;

    const currentItems =
        products.slice(start, end);

    currentItems.forEach(product => {

        const div =
            document.createElement("div");

        div.classList.add("item");

        div.textContent = product;

        itemContainer.appendChild(div);
    });
}

/*
    Render Pagination
*/
function renderPagination(){

    pagination.innerHTML = "";

    const totalPages =
        Math.ceil(
            products.length /
            ITEMS_PER_PAGE
        );

    // Previous Button
    const prevBtn =
        document.createElement("button");

    prevBtn.textContent = "Previous";

    prevBtn.disabled =
        currentPage === 1;

    prevBtn.addEventListener("click", () => {

        currentPage--;

        updateUI();
    });

    pagination.appendChild(prevBtn);

    // Page Numbers
    for(let i = 1; i <= totalPages; i++){

        const pageBtn =
            document.createElement("button");

        pageBtn.textContent = i;

        if(i === currentPage){
            pageBtn.classList.add("active");
        }

        pageBtn.addEventListener("click", () => {

            currentPage = i;

            updateUI();
        });

        pagination.appendChild(pageBtn);
    }

    // Next Button
    const nextBtn =
        document.createElement("button");

    nextBtn.textContent = "Next";

    nextBtn.disabled =
        currentPage === totalPages;

    nextBtn.addEventListener("click", () => {

        currentPage++;

        updateUI();
    });

    pagination.appendChild(nextBtn);
}

/*
    Update Entire UI
*/
function updateUI(){

    renderItems(currentPage);

    renderPagination();
}

/*
    Initial Load
*/
updateUI();

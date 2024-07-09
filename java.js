const items = [
    { 
        title: "Vintage Chair", 
        price: 50, 
        image: "item1.jpg", 
        description: "A beautiful vintage chair with intricate carvings and plush velvet upholstery." 
    },
    { 
        title: "Antique Desk", 
        price: 100, 
        image: "item2.jpg", 
        description: "An antique wooden desk with multiple drawers and brass fittings." 
    },
    { 
        title: "Handcrafted Jewelry", 
        price: 75, 
        image: "item3.jpg", 
        description: "Handmade jewelry set with semi-precious stones and sterling silver." 
    },
    { 
        title: "Artisanal Pottery", 
        price: 120, 
        image: "item4.jpg", 
        description: "Artisan-crafted pottery vase with a unique glaze finish." 
    },
    { 
        title: "Rare Books Collection", 
        price: 90, 
        image: "item5.jpg", 
        description: "A collection of rare books spanning various genres and periods." 
    },
    { 
        title: "Designer Handbag", 
        price: 60, 
        image: "item6.jpg", 
        description: "Designer handbag made from genuine leather with gold-plated hardware." 
    },
    { 
        title: "Original Paintings", 
        price: 80, 
        image: "item7.jpg", 
        description: "Original oil paintings by a local artist, framed and ready to hang." 
    },
    { 
        title: "Custom Furniture Set", 
        price: 110, 
        image: "item8.jpg", 
        description: "Custom-made furniture set including a sofa, coffee table, and side chairs." 
    },
    { 
        title: "Vintage Vinyl Records", 
        price: 70, 
        image: "item9.jpg", 
        description: "A collection of vintage vinyl records from various artists and genres." 
    },
    { 
        title: "Collectible Figurines", 
        price: 95, 
        image: "item10.jpg", 
        description: "Collectible figurines including characters from movies and comic books." 
    }
];

const itemList = document.getElementById('item-list');
const shoppingCart = document.getElementById('shopping-cart');
let totalAmount = 0;
let itemCount = 0;

items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');

    const imgElement = document.createElement('img');
    imgElement.src = item.image;
    itemElement.appendChild(imgElement);

    const titleElement = document.createElement('div');
    titleElement.classList.add('item-title');
    titleElement.textContent = item.title;
    itemElement.appendChild(titleElement);

    const descElement = document.createElement('div');
    descElement.textContent = item.description;
    itemElement.appendChild(descElement);

    const priceElement = document.createElement('div');
    priceElement.classList.add('item-price');
    priceElement.textContent = `$${item.price}`;
    itemElement.appendChild(priceElement);

    // Create Contact Seller button
    const contactButton = document.createElement('button');
    contactButton.classList.add('offer-button');
    contactButton.textContent = 'Contact Seller';

    // Toggle contact form visibility on button click
    contactButton.addEventListener('click', () => {
        const form = document.getElementById('fs-frm');
        form.classList.add('show-form'); // Show the form

        // Update shopping cart
        totalAmount += item.price;
        itemCount++;
        updateShoppingCart();
    });

    itemElement.appendChild(contactButton);
    itemList.appendChild(itemElement);
});

// Function to update shopping cart display
function updateShoppingCart() {
    shoppingCart.innerHTML = `Shopping Cart: <span id="item-count">${itemCount} items</span> - Total: $<span id="total-amount">${totalAmount.toFixed(2)}</span>`;
}

// Function to clear the shopping cart
function clearCart() {
    totalAmount = 0;
    itemCount = 0;
    updateShoppingCart();
}

// Function to toggle contact form visibility
function toggleForm() {
    const form = document.getElementById('fs-frm');
    form.classList.remove('show-form'); // Hide the form
}

// Initial update of shopping cart display
updateShoppingCart();
// Product Array
const products = [
    { id: 1, name: "Laptop Pro X" },
    { id: 2, name: "Smartphone Ultra 5G" },
    { id: 3, name: "Wireless Headphones" },
    { id: 4, name: "Smart Watch Elite" },
    { id: 5, name: "4K LED TV" }
];

// Dynamically Populate Dropdown
const productDropdown = document.getElementById('product');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productDropdown.appendChild(option);
});

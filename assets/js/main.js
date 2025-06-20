document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuBtn.addEventListener('click', function () {
        mainNav.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            mainNav.classList.remove('active');
        });
    });

    // T-Shirt Products Data
    // Updated tshirts array with Minimalist collection instead of Classic
    const tshirts = [
        {
            id: 1,
            name: "T-shirt",
            price: 600.00,
            category: "new",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/small/new-collection/t-shirt1.jpg",
            description: "Ultra-minimal crew neck with clean lines and perfect drape. The foundation of any wardrobe.",
            code: "T1"
        },
        {
            id: 2,
            name: "T-shirt",
            price: 600.0,
            category: "new",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/small/new-collection/t-shirt2.jpg",
            description: "Relaxed fit with a chest pocket. Designed for ultimate comfort with extra room through the body.",
            code: "T2"
        },
        {
            id: 3,
            name: "T-shirt",
            price: 600.00,
            category: "new",
            colors: ["White", "Black"],
            sizes: ["M", "L"],
            image: "assets/images/small/new-collection/t-shirt3.jpg",
            description: "Special screen-printed design celebrating our local artists. Each piece is numbered.",
            code: "T3"
        },
        {
            id: 4,
            name: "T-shirt",
            price: 600.00,
            category: "new",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/small/new-collection/t-shirt4.jpg",
            description: "Clean v-neck silhouette with hidden seams for a barely-there feel.",
            code: "T4"
        },
        {
            id: 5,
            name: "T-shirt",
            price: 600.00,
            category: "new",
            colors: ["White", "Black"],
            sizes: ["M", "L"],
            image: "assets/images/small/new-collection/t-shirt5.jpg",
            description: "Modern cropped length with a boxy fit. Designed to pair perfectly with high-waisted bottoms.",
            code: "T5"
        },
        {
            id: 6,
            name: "T-shirt",
            price: 600.00,
            category: "new",
            colors: ["White", "Black"],
            sizes: ["M", "L"],
            image: "assets/images/small/new-collection/t-shirt6.jpg",
            description: "Special edition striped tee inspired by traditional maritime wear. Made in small batches.",
            code: "T6"
        },
        {
            id: 7,
            name: "T-shirt",
            price: 600.00,
            category: "new",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/small/new-collection/t-shirt7.jpg",
            description: "Luxuriously soft with a barely-there feel. Our most minimal design yet.",
            code: "T7"
        },
        {
            id: 8,
            name: "T-shirt",
            price: 600.00,
            category: "new",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/big/new-collection/t-shirt1.jpg",
            description: "Luxuriously soft with a barely-there feel. Our most minimal design yet.",
            code: "T8"
        },
        {
            id: 9,
            name: "T-shirt",
            price: 600.00,
            category: "new",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/big/new-collection/t-shirt2.jpg",
            description: "Luxuriously soft with a barely-there feel. Our most minimal design yet.",
            code: "T9"
        },
        {
            id: 10,
            name: "T-shirt",
            price: 600.00,
            category: "new",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/big/new-collection/t-shirt3.jpg",
            description: "Luxuriously soft with a barely-there feel. Our most minimal design yet.",
            code: "T10"
        },
        {
            id: 11,
            name: "T-shirt",
            price: 600.00,
            category: "new",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/big/new-collection/t-shirt4.jpg",
            description: "Luxuriously soft with a barely-there feel. Our most minimal design yet.",
            code: "T11"
        }
        ,
        {
            id: 12,
            name: "T-shirt",
            price: 600.00,
            category: "new",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/big/new-collection/t-shirt5.jpg",
            description: "Luxuriously soft with a barely-there feel. Our most minimal design yet.",
            code: "T12"
        },
        {
            id: 13,
            name: "T-shirt",
            price: 600.00,
            category: "new",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/big/new-collection/t-shirt6.jpg",
            description: "Luxuriously soft with a barely-there feel. Our most minimal design yet.",
            code: "T13"
        },
        {
            id: 14,
            name: "T-shirt",
            price: 600.00,
            category: "new",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/big/new-collection/t-shirt7.jpg",
            description: "Luxuriously soft with a barely-there feel. Our most minimal design yet.",
            code: "T14"
        },
        {
            id: 15,
            name: "T-shirt",
            price: 600.00,
            category: "new",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/big/new-collection/t-shirt8.jpg",
            description: "Luxuriously soft with a barely-there feel. Our most minimal design yet.",
            code: "T15"
        },
        {
            id: 16,
            name: "T-shirt",
            price: 600.00,
            category: "big-sale",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/small/big-sale/t-shirt1.jpg",
            description: "Luxuriously soft with a barely-there feel. Our most minimal design yet.",
            code: "T16"
        },
        {
            id: 17,
            name: "T-shirt",
            price: 600.00,
            category: "big-sale",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/small/big-sale/t-shirt2.jpg",
            description: "Luxuriously soft with a barely-there feel. Our most minimal design yet.",
            code: "T17"
        },
        {
            id: 18,
            name: "T-shirt",
            price: 600.00,
            category: "big-sale",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/small/big-sale/t-shirt3.jpg",
            description: "Luxuriously soft with a barely-there feel. Our most minimal design yet.",
            code: "T18"
        },
        {
            id: 19,
            name: "T-shirt",
            price: 600.00,
            category: "big-sale",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/big/big-sale/t-shirt1.jpg",
            description: "Luxuriously soft with a barely-there feel. Our most minimal design yet.",
            code: "T19"
        },
        {
            id: 20,
            name: "T-shirt",
            price: 600.00,
            category: "big-sale",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/big/big-sale/t-shirt2.jpg",
            description: "Luxuriously soft with a barely-there feel. Our most minimal design yet.",
            code: "T20"
        },
        {
            id: 21,
            name: "Offer!",
            price: 1400.00,
            category: "offer",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/offer.jpg",
            description: "You can take any three desings with only 1600 pound",
            details: ""
        },
        {
            id: 22,
            name: "Offer!",
            price: 2110.00,
            category: "offer",
            colors: ["White", "Black"],
            sizes: ["M", "L", "XL"],
            image: "assets/images/offer2.jpg",
            description: "You can take any four desings with only 2110 pound",
            details: ""
        }
    ];
    // Render Products
    const productsGrid = document.querySelector('.products-grid');

    function renderProducts(filter = 'all') {
        productsGrid.innerHTML = '';

        const filteredTshirts = filter === 'all'
            ? tshirts
            : tshirts.filter(tshirt => tshirt.category === filter);

        filteredTshirts.forEach(tshirt => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image" style="background-image: url(${tshirt.image})"></div>
                <div class="product-info">
                    <h3 class="product-title">${tshirt.name}</h3>
                    <p class="product-price">${tshirt.price.toFixed(2)} جنيه</p>
                    <button class="btn quick-view-btn" data-id="${tshirt.id}">Quick View</button>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });

        // Add event listeners to quick view buttons
        document.querySelectorAll('.quick-view-btn').forEach(button => {
            button.addEventListener('click', showQuickView);
        });
    }

    // Filter Products
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderProducts(this.dataset.filter);
        });
    });

    // Quick View Modal
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close-modal');

    function showQuickView(e) {
        const productId = parseInt(e.target.dataset.id);
        const tshirt = tshirts.find(item => item.id === productId);

        const modalContent = `
            <div class="modal-product-image" style="background-image: url(${tshirt.image});   background-size: cover; height: 90%;">
            </div>
            <div class="modal-product-details">
                <h2>${tshirt.name}</h2>
                <p class="modal-price">${tshirt.price.toFixed(2)} جنيه</p>
                <p class="modal-description" style = "margin: var(--space-sm) 0;">Oversized Boxfit T-shirt with new design</p>
                
                <div class="size-options">
                    <h4>Size</h4>
                    <div class="size-selector">
                        ${tshirt.sizes.map(size => `
                            <button class="size-btn" data-size="${size}">${size}</button>
                        `).join('')}
                    </div>
                </div>
                
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeO1lsxHGcWhx0yHp7sER32WqPMzkhSy1VSTSDklG0NVBJtxQ/viewform?usp=dialog" class="btn add-to-cart-btn" style = "margin: var(--space-sm) 0;">Buy Now</a>
                
                <div class="product-details">
                    <p style="font-size: var(--font-lg);">T-shirt Code: ${tshirt.code}</p>
                </div>
            </div>`
            ;

        document.querySelector('.modal-product-view').innerHTML = modalContent;
        modal.classList.add('active');

        // Add event listeners to new elements
        document.querySelector('.add-to-cart-btn').addEventListener('click', function () {
            addToCart(tshirt.id);
        });
    }

    function getColorHex(colorName) {
        const colors = {
            "White": "#ffffff",
            "Black": "#111111",
            "Heather Grey": "#9e9e9e",
            "Ecru": "#f5f3e5",
            "Dark Grey": "#555555",
            "Natural": "#e8d8c3",
            "Navy": "#001f3f",
            "Olive": "#556b2f",
            "Cream": "#f5f5dc",
            "Navy/White": "#001f3f", // Simplified for demo
            "Black/White": "#111111"  // Simplified for demo
        };
        return colors[colorName] || "#cccccc";
    }

    closeModal.addEventListener('click', function () {
        modal.classList.remove('active');
    });

    // Close modal when clicking outside
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Cart Functionality
    let cart = [];
    const cartCount = document.querySelector('.cart-count');

    function addToCart(productId) {
        const product = tshirts.find(item => item.id === productId);
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1,
                selectedColor: "White", // Default
                selectedSize: "M" // Default
            });
        }

        updateCartCount();
        showAddToCartMessage(product.name);
        modal.classList.remove('active');
    }

    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    function showAddToCartMessage(productName) {
        const message = document.createElement('div');
        message.className = 'cart-message';
        message.textContent = `${productName} added to cart`;
        document.body.appendChild(message);

        setTimeout(() => {
            message.classList.add('show');
        }, 10);

        setTimeout(() => {
            message.classList.remove('show');
            setTimeout(() => {
                message.remove();
            }, 300);
        }, 3000);
    }

    // Initialize
    renderProducts();

    // Add cart message styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .cart-message {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #111;
            color: white;
            padding: 12px 24px;
            border-radius: 4px;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1000;
        }
        .cart-message.show {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});

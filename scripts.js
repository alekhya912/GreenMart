// Function to add product to cart
function addToCart(productName, price) {
  // Get the product image (this assumes the image is in the same card)
  const productImage = event.target.closest('.product-card').querySelector('img').src;
  
  // Format the price
  const priceFormatted = `₹ ${price.toFixed(2)} / kg`;
  
  // Get or create cart in localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Check if product already exists in cart
  const existingItem = cart.find(item => item.name === productName);
  
  if (existingItem) {
      existingItem.quantity += 1;
  } else {
      cart.push({
          name: productName,
          price: price,
          priceFormatted: priceFormatted,
          image: productImage,
          quantity: 1
      });
  }
  
  // Save cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Update cart count
  updateCartCount();
  
  // Show animation message
  const message = document.getElementById('add-to-cart-message');
  message.classList.remove('hidden');
  message.classList.add('show');

  // Hide message after 3 seconds
  setTimeout(() => {
      message.classList.remove('show');
      message.classList.add('hidden');
  }, 3000);
}

// Function to update cart count in navbar
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelector('.cart-count').textContent = totalCount;
}

// Initialize the slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Reset to first slide if we go past the end
  if (n > slides.length) {
    slideIndex = 1;
  }
  
  // Go to last slide if we go before the first
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show the current slide and activate the corresponding dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Auto advance slides
function autoAdvanceSlides() {
  plusSlides(1);
}

// Start auto-advancing slides every 3 seconds
setInterval(autoAdvanceSlides, 3000);

// Initialize dropdowns
document.addEventListener('DOMContentLoaded', function() {
  // Close dropdowns when clicking outside
  window.addEventListener('click', function(e) {
    if (!e.target.matches('.dropbtn') && !e.target.matches('.dropbtn1')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      const dropdowns1 = document.getElementsByClassName("dropdown-content1");
      
      Array.from(dropdowns).forEach(dropdown => {
        if (dropdown.style.display === "block") {
          dropdown.style.display = "none";
        }
      });
      
      Array.from(dropdowns1).forEach(dropdown => {
        if (dropdown.style.display === "flex") {
          dropdown.style.display = "none";
        }
      });
    }
  });
});
// Load cart items from localStorage when page loads
document.addEventListener('DOMContentLoaded', function() {
  loadCart();
  updateCartCount();
});
// Function to load cart items
function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  
  if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
          <div class="empty-cart">
              <p>Your cart is empty</p>
              <a href="index copy.html" class="continue-shopping">Continue Shopping</a>
          </div>
      `;
      document.getElementById('cart-summary').style.display = 'none';
      return;
  }
}

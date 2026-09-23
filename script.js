const products = [
  {
    name: "Galaxy S26 Ultra",
    category: "SMARTPHONE",
    price: 169999,
    description: "A flagship smartphone experience designed around power, precision, and intelligent everyday use.",
    accent: "#5ad8ff",
    art: `
      <svg viewBox="0 0 500 650" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="phoneFrame" x1="80" y1="80" x2="430" y2="590">
            <stop stop-color="#DDE7F0"/>
            <stop offset=".45" stop-color="#687583"/>
            <stop offset="1" stop-color="#202630"/>
          </linearGradient>
          <linearGradient id="phoneScreen" x1="120" y1="100" x2="380" y2="550">
            <stop stop-color="#16212E"/>
            <stop offset=".5" stop-color="#071017"/>
            <stop offset="1" stop-color="#020407"/>
          </linearGradient>
        </defs>

        <rect x="95" y="45" width="310" height="560" rx="48"
          fill="url(#phoneFrame)"
          stroke="rgba(255,255,255,.5)"
          stroke-width="3"/>

        <rect x="113" y="64" width="274" height="522" rx="38"
          fill="url(#phoneScreen)"
          stroke="#8C99A8"
          stroke-opacity=".45"
          stroke-width="2"/>

        <rect x="198" y="76" width="104" height="25" rx="13"
          fill="#030407"/>

        <circle cx="164" cy="122" r="25"
          fill="#0D141B"
          stroke="#788692"
          stroke-width="5"/>

        <circle cx="164" cy="122" r="9" fill="#050709"/>

        <circle cx="164" cy="185" r="25"
          fill="#0D141B"
          stroke="#788692"
          stroke-width="5"/>

        <circle cx="164" cy="185" r="9" fill="#050709"/>

        <circle cx="164" cy="248" r="25"
          fill="#0D141B"
          stroke="#788692"
          stroke-width="5"/>

        <circle cx="164" cy="248" r="9" fill="#050709"/>

        <path d="M218 350C260 280 335 280 365 345C330 425 257 450 218 350Z"
          fill="url(#phoneScreen)"
          opacity=".8"/>

        <path d="M230 350C265 320 320 320 352 348"
          stroke="currentColor"
          stroke-width="3"
          opacity=".8"/>

        <path d="M240 380C275 355 318 355 343 377"
          stroke="currentColor"
          stroke-width="2"
          opacity=".45"/>
      </svg>
    `
  },

  {
    name: "911 Carrera",
    category: "AUTOMOTIVE",
    price: 16500000,
    description: "Iconic Porsche design, exhilarating performance, and premium comfort brought together in one machine.",
    accent: "#ff5b6e",
    art: `
      <svg viewBox="0 0 700 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="carBody" x1="80" y1="120" x2="600" y2="300">
            <stop stop-color="#F6F7F9"/>
            <stop offset=".35" stop-color="#AEB5BD"/>
            <stop offset=".7" stop-color="#505862"/>
            <stop offset="1" stop-color="#181C21"/>
          </linearGradient>
          <linearGradient id="window" x1="250" y1="90" x2="420" y2="190">
            <stop stop-color="#53616F"/>
            <stop offset="1" stop-color="#090C10"/>
          </linearGradient>
        </defs>

        <ellipse cx="350" cy="310" rx="255" ry="28"
          fill="#000"
          opacity=".6"/>

        <path
          d="M88 273C105 232 155 220 208 207L269 139C287 119 318 105 355 104H404C439 106 468 123 490 149L523 188C565 194 603 211 620 239L633 269C641 286 625 300 605 300H111C88 300 78 288 88 273Z"
          fill="url(#carBody)"
          stroke="#D9DEE4"
          stroke-opacity=".45"
          stroke-width="3"/>

        <path
          d="M267 139L300 119C315 110 335 106 356 106H399C430 108 453 123 472 146L505 187H230L267 139Z"
          fill="url(#window)"
          stroke="#BFC7D0"
          stroke-opacity=".35"
          stroke-width="3"/>

        <path d="M351 108V187"
          stroke="#A8B1BA"
          stroke-opacity=".35"/>

        <path d="M231 187H505"
          stroke="#F2F4F7"
          stroke-opacity=".22"/>

        <circle cx="190" cy="294" r="48" fill="#11151A"/>
        <circle cx="190" cy="294" r="25" fill="#68727C"/>
        <circle cx="190" cy="294" r="11" fill="#181C21"/>

        <circle cx="527" cy="294" r="48" fill="#11151A"/>
        <circle cx="527" cy="294" r="25" fill="#68727C"/>
        <circle cx="527" cy="294" r="11" fill="#181C21"/>

        <path d="M107 250C132 234 157 228 190 225"
          stroke="white"
          stroke-opacity=".6"
          stroke-width="4"
          stroke-linecap="round"/>

        <path d="M544 224C573 227 594 238 612 251"
          stroke="white"
          stroke-opacity=".4"
          stroke-width="4"
          stroke-linecap="round"/>
      </svg>
    `
  },

  {
    name: "Premium Sneakers",
    category: "FASHION",
    price: 7200,
    description: "A futuristic everyday sneaker built around comfort, clean lines, and modern streetwear style.",
    accent: "#a98cff",
    art: `
      <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shoe" x1="130" y1="100" x2="480" y2="390">
            <stop stop-color="#FFFFFF"/>
            <stop offset=".5" stop-color="#AFA8C9"/>
            <stop offset="1" stop-color="#403A56"/>
          </linearGradient>
        </defs>

        <ellipse cx="310" cy="395" rx="210" ry="25"
          fill="#000"
          opacity=".65"/>

        <path
          d="M120 330C151 316 185 295 210 262L252 149C262 124 283 108 309 112L357 120C377 123 394 137 404 156L445 231C464 263 495 278 526 293C550 305 563 325 555 345C547 366 522 375 489 375H151C113 375 96 351 120 330Z"
          fill="url(#shoe)"
          stroke="#E9E8F1"
          stroke-opacity=".5"
          stroke-width="4"/>

        <path
          d="M211 262C258 285 315 298 379 290C419 285 449 274 470 260"
          stroke="currentColor"
          stroke-width="5"
          opacity=".7"/>

        <path d="M252 149L326 205L388 157"
          stroke="currentColor"
          stroke-width="4"
          opacity=".55"/>

        <path d="M180 321C270 341 388 343 513 330"
          stroke="#111"
          stroke-opacity=".35"
          stroke-width="15"
          stroke-linecap="round"/>

        <path d="M184 317C280 333 395 335 518 323"
          stroke="white"
          stroke-opacity=".65"
          stroke-width="4"
          stroke-linecap="round"/>
      </svg>
    `
  },

  {
    name: "SmithX Watch",
    category: "WEARABLE",
    price: 18900,
    description: "A refined smart wearable combining a minimal silhouette with intelligent everyday functionality.",
    accent: "#70ffb4",
    art: `
      <svg viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="strap" x1="150" y1="40" x2="350" y2="560">
            <stop stop-color="#20252B"/>
            <stop offset=".5" stop-color="#050607"/>
            <stop offset="1" stop-color="#30363D"/>
          </linearGradient>
          <linearGradient id="watchBody" x1="130" y1="130" x2="370" y2="470">
            <stop stop-color="#E4E8EC"/>
            <stop offset=".4" stop-color="#747E89"/>
            <stop offset="1" stop-color="#252B31"/>
          </linearGradient>
        </defs>

        <rect x="180" y="20" width="140" height="560" rx="65"
          fill="url(#strap)"/>

        <rect x="112" y="145" width="276" height="310" rx="72"
          fill="url(#watchBody)"
          stroke="#D9E0E7"
          stroke-opacity=".5"
          stroke-width="4"/>

        <rect x="135" y="168" width="230" height="264" rx="52"
          fill="#030607"
          stroke="currentColor"
          stroke-opacity=".45"
          stroke-width="3"/>

        <circle cx="250" cy="300" r="77"
          stroke="currentColor"
          stroke-width="5"
          opacity=".65"/>

        <path d="M250 245V300L286 325"
          stroke="currentColor"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"/>

        <circle cx="250" cy="300" r="8"
          fill="currentColor"/>

        <path d="M388 250H405"
          stroke="#AAB3BD"
          stroke-width="12"
          stroke-linecap="round"/>
      </svg>
    `
  },

  {
    name: "Wireless Headphones",
    category: "AUDIO",
    price: 4500,
    description: "Immersive wireless audio with a clean silhouette designed for everyday listening.",
    accent: "#ffbf62",
    art: `
      <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="headphone" x1="120" y1="90" x2="480" y2="420">
            <stop stop-color="#F7F7F8"/>
            <stop offset=".5" stop-color="#A7A9AE"/>
            <stop offset="1" stop-color="#3A3C41"/>
          </linearGradient>
        </defs>

        <ellipse cx="300" cy="420" rx="185" ry="24"
          fill="#000"
          opacity=".6"/>

        <path
          d="M148 280V218C148 127 215 72 300 72C385 72 452 127 452 218V280"
          stroke="url(#headphone)"
          stroke-width="42"
          stroke-linecap="round"/>

        <rect x="104" y="245" width="105" height="145" rx="48"
          fill="url(#headphone)"
          stroke="#FFFFFF"
          stroke-opacity=".45"
          stroke-width="4"/>

        <rect x="391" y="245" width="105" height="145" rx="48"
          fill="url(#headphone)"
          stroke="#FFFFFF"
          stroke-opacity=".45"
          stroke-width="4"/>

        <rect x="127" y="269" width="60" height="95" rx="30"
          fill="#101216"
          opacity=".8"/>

        <rect x="413" y="269" width="60" height="95" rx="30"
          fill="#101216"
          opacity=".8"/>

        <path d="M170 170C198 116 247 99 300 99C353 99 402 116 430 170"
          stroke="white"
          stroke-opacity=".3"
          stroke-width="5"
          stroke-linecap="round"/>
      </svg>
    `
  }
];

const CART_KEY = "smithx-future-cart";

let currentIndex = 0;
let changing = false;
let cart = loadCart();
let activeCategory = "ALL";

const $ = (id) => document.getElementById(id);

const elements = {
  counterCurrent: $("counterCurrent"),
  counterTotal: $("counterTotal"),
  productStage: $("productStage"),
  productHalo: $("productHalo"),
  productLight: $("productLight"),
  productImage: $("productImage"),
  nextProductName: $("nextProductName"),
  productCategory: $("productCategory"),
  productName: $("productName"),
  productPrice: $("productPrice"),
  productDescription: $("productDescription"),
  productDots: $("productDots"),

  previousButton: $("previousButton"),
  nextButton: $("nextButton"),
  nextProduct: $("nextProduct"),

  addButton: $("addButton"),
  aiButton: $("aiButton"),
  exploreButton: $("exploreButton"),
  exploreHint: $("exploreHint"),

  marketplace: $("marketplace"),
  closeMarketplace: $("closeMarketplace"),
  searchInput: $("searchInput"),
  categories: $("categories"),
  productGrid: $("productGrid"),

  overlay: $("overlay"),

  aiPanel: $("aiPanel"),
  closeAI: $("closeAI"),
  aiMessage: $("aiMessage"),
  aiSuggestions: $("aiSuggestions"),
  aiResponse: $("aiResponse"),

  cartPanel: $("cartPanel"),
  closeCart: $("closeCart"),
  cartCount: $("cartCount"),
  cartItemsCount: $("cartItemsCount"),
  cartItems: $("cartItems"),
  cartTotal: $("cartTotal"),
  checkoutButton: $("checkoutButton"),

  checkoutModal: $("checkoutModal"),
  closeCheckout: $("closeCheckout"),
  checkoutTotal: $("checkoutTotal"),
  finishCheckout: $("finishCheckout"),

  toast: $("toast")
};

/* =========================
   HELPERS
========================= */

function money(value) {
  return `KES ${Number(value).toLocaleString("en-KE")}`;
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY));

    if (!saved || typeof saved !== "object") {
      return {};
    }

    return saved;
  } catch {
    return {};
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function totalCartQuantity() {
  return Object.values(cart).reduce((sum, quantity) => {
    return sum + Number(quantity || 0);
  }, 0);
}

function totalCartValue() {
  return Object.entries(cart).reduce((sum, [index, quantity]) => {
    const product = products[Number(index)];

    if (!product) return sum;

    return sum + product.price * Number(quantity || 0);
  }, 0);
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2200);
}

/* =========================
   THEME
========================= */

function applyTheme(product) {
  document.documentElement.style.setProperty("--accent", product.accent);

  document.documentElement.style.setProperty(
    "--accent-soft",
    hexToRgba(product.accent, 0.16)
  );

  document.documentElement.style.setProperty(
    "--card-accent",
    product.accent
  );

  document.documentElement.style.setProperty(
    "--card-accent-soft",
    hexToRgba(product.accent, 0.12)
  );
}

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");

  const r = parseInt(value.substring(0, 2), 16);
  const g = parseInt(value.substring(2, 4), 16);
  const b = parseInt(value.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/* =========================
   PARTICLES
========================= */

function createParticles() {
  const container = $("particles");

  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < 32; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${8 + Math.random() * 15}s`;
    particle.style.animationDelay = `${Math.random() * -15}s`;
    particle.style.opacity = `${0.08 + Math.random() * 0.28}`;

    container.appendChild(particle);
  }
}

/* =========================
   HERO PRODUCT
========================= */

function renderProduct(index, direction = 1) {
  const product = products[index];
  const next = products[(index + 1) % products.length];

  applyTheme(product);

  elements.counterCurrent.textContent =
    String(index + 1).padStart(2, "0");

  elements.counterTotal.textContent =
    String(products.length).padStart(2, "0");

  elements.productCategory.textContent = product.category;
  elements.productName.textContent = product.name;
  elements.productPrice.textContent = money(product.price);
  elements.productDescription.textContent = product.description;

  elements.nextProductName.textContent = next.name;

  elements.productImage.className = "product-image";

  elements.productImage.innerHTML = product.art;

  void elements.productImage.offsetWidth;

  elements.productImage.classList.add(
    direction >= 0 ? "enter" : "enter"
  );

  renderDots();
}

function renderDots() {
  elements.productDots.innerHTML = "";

  products.forEach((product, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.setAttribute(
      "aria-label",
      `View ${product.name}`
    );

    if (index === currentIndex) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      if (index === currentIndex || changing) return;

      const direction = index > currentIndex ? 1 : -1;

      changeProduct(index, direction);
    });

    elements.productDots.appendChild(button);
  });
}

function changeProduct(newIndex, direction = 1) {
  if (changing) return;

  changing = true;

  elements.productImage.classList.remove("enter");

  elements.productImage.classList.add(
    direction >= 0 ? "exit-next" : "exit-prev"
  );

  setTimeout(() => {
    currentIndex = (newIndex + products.length) % products.length;

    renderProduct(currentIndex, direction);

    setTimeout(() => {
      changing = false;
    }, 350);
  }, 280);
}

function nextProduct() {
  changeProduct(
    (currentIndex + 1) % products.length,
    1
  );
}

function previousProduct() {
  changeProduct(
    (currentIndex - 1 + products.length) % products.length,
    -1
  );
}

/* =========================
   CART
========================= */

function addToCart(index = currentIndex, quantity = 1) {
  cart[index] = Number(cart[index] || 0) + quantity;

  saveCart();
  renderCart();

  showToast(`${products[index].name} added to your bag`);
}

function changeQuantity(index, amount) {
  const current = Number(cart[index] || 0);
  const next = current + amount;

  if (next <= 0) {
    delete cart[index];
  } else {
    cart[index] = next;
  }

  saveCart();
  renderCart();
}

function removeFromCart(index) {
  delete cart[index];

  saveCart();
  renderCart();

  showToast("Item removed from your bag");
}

function renderCart() {
  const quantity = totalCartQuantity();
  const total = totalCartValue();

  elements.cartCount.textContent = quantity;
  elements.cartItemsCount.textContent =
    `${quantity} ${quantity === 1 ? "ITEM" : "ITEMS"}`;

  elements.cartTotal.textContent = money(total);
  elements.checkoutTotal.textContent = money(total);

  if (quantity === 0) {
    elements.cartItems.innerHTML = `
      <div class="empty-cart">
        Your bag is empty.<br>
        Discover something from the collection.
      </div>
    `;

    elements.checkoutButton.disabled = true;
    elements.checkoutButton.style.opacity = ".45";
    elements.checkoutButton.style.cursor = "not-allowed";

    return;
  }

  elements.checkoutButton.disabled = false;
  elements.checkoutButton.style.opacity = "1";
  elements.checkoutButton.style.cursor = "pointer";

  elements.cartItems.innerHTML = "";

  Object.entries(cart).forEach(([index, amount]) => {
    const product = products[Number(index)];

    if (!product) return;

    const row = document.createElement("div");

    row.className = "cart-row";

    row.innerHTML = `
      <div>
        <div class="cart-row-name">${product.name}</div>

        <div class="cart-row-category">
          ${product.category}
        </div>

        <div class="cart-row-controls">
          <button type="button" data-action="minus">−</button>
          <span>${amount}</span>
          <button type="button" data-action="plus">+</button>
          <button type="button" data-action="remove">
            ×
          </button>
        </div>
      </div>

      <div class="cart-row-price">
        ${money(product.price * amount)}
      </div>
    `;

    row.querySelector('[data-action="minus"]')
      .addEventListener("click", () => {
        changeQuantity(Number(index), -1);
      });

    row.querySelector('[data-action="plus"]')
      .addEventListener("click", () => {
        changeQuantity(Number(index), 1);
      });

    row.querySelector('[data-action="remove"]')
      .addEventListener("click", () => {
        removeFromCart(Number(index));
      });

    elements.cartItems.appendChild(row);
  });
}

/* =========================
   PANELS
========================= */

function closePanels() {
  elements.aiPanel.classList.remove("active");
  elements.cartPanel.classList.remove("active");
  elements.overlay.classList.remove("active");

  elements.aiPanel.setAttribute("aria-hidden", "true");
  elements.cartPanel.setAttribute("aria-hidden", "true");
}

function openCart() {
  closePanels();

  elements.cartPanel.classList.add("active");
  elements.overlay.classList.add("active");

  elements.cartPanel.setAttribute("aria-hidden", "false");
}

function openAI() {
  closePanels();

  const product = products[currentIndex];

  elements.aiMessage.textContent =
    `I'm looking at the ${product.name}. What would you like to know?`;

  elements.aiResponse.textContent = "";

  renderAISuggestions(product);

  elements.aiPanel.classList.add("active");
  elements.overlay.classList.add("active");

  elements.aiPanel.setAttribute("aria-hidden", "false");
}

function renderAISuggestions(product) {
  const suggestions = [
    "Why is this interesting?",
    "Is there a cheaper option?",
    "Compare it with another product",
    "Tell me about shipping"
  ];

  elements.aiSuggestions.innerHTML = "";

  suggestions.forEach((suggestion) => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = suggestion;

    button.addEventListener("click", () => {
      answerAI(suggestion, product);
    });

    elements.aiSuggestions.appendChild(button);
  });
}

function answerAI(question, product) {
  const lower = question.toLowerCase();

  let answer = "";

  if (lower.includes("cheaper")) {
    const cheaper = products
      .filter((item, index) => {
        return index !== currentIndex &&
          item.price < product.price;
      })
      .sort((a, b) => a.price - b.price)[0];

    answer = cheaper
      ? `A lower-priced option is ${cheaper.name} at ${money(cheaper.price)}.`
      : "There isn't a lower-priced product in this demo collection.";
  }

  else if (lower.includes("compare")) {
    const alternative =
      products[(currentIndex + 1) % products.length];

    answer =
      `${product.name} is listed at ${money(product.price)}, while ` +
      `${alternative.name} is ${money(alternative.price)}. ` +
      `The main difference is the product category and intended use.`;
  }

  else if (lower.includes("shipping")) {
    answer =
      "Shipping information is simulated in this prototype. " +
      "A production SmithX store would calculate delivery using the " +
      "customer's location, seller settings, and available carriers.";
  }

  else {
    answer =
      `${product.name} is positioned around its ${product.category.toLowerCase()} ` +
      `experience, with a focus on design, usability, and the shopping experience.`;
  }

  elements.aiResponse.textContent = answer;
}

/* =========================
   MARKETPLACE
========================= */

function buildCategories() {
  const categories = [
    "ALL",
    ...new Set(products.map(product => product.category))
  ];

  elements.categories.innerHTML = "";

  categories.forEach(category => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = category;

    if (category === activeCategory) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      activeCategory = category;

      buildCategories();
      renderMarketplace();
    });

    elements.categories.appendChild(button);
  });
}

function renderMarketplace() {
  const search =
    elements.searchInput.value.trim().toLowerCase();

  const filtered = products.filter((product) => {
    const categoryMatch =
      activeCategory === "ALL" ||
      product.category === activeCategory;

    const searchMatch =
      !search ||
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search);

    return categoryMatch && searchMatch;
  });

  elements.productGrid.innerHTML = "";

  if (!filtered.length) {
    elements.productGrid.innerHTML = `
      <div class="empty-products">
        No products found.
      </div>
    `;

    return;
  }

  filtered.forEach((product) => {
    const index = products.indexOf(product);

    const card = document.createElement("article");

    card.className = "product-card";

    card.style.setProperty(
      "--card-accent",
      product.accent
    );

    card.style.setProperty(
      "--card-accent-soft",
      hexToRgba(product.accent, 0.12)
    );

    card.innerHTML = `
      <div class="product-card-art">
        ${product.art}
      </div>

      <div class="product-card-meta">
        <div>
          <div class="product-card-category">
            ${product.category}
          </div>

          <h3>${product.name}</h3>
        </div>

        <div class="product-card-price">
          ${money(product.price)}
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      currentIndex = index;

      renderProduct(currentIndex);

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      showToast(`${product.name} selected`);
    });

    elements.productGrid.appendChild(card);
  });
}

function openMarketplace() {
  elements.marketplace.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* =========================
   CHECKOUT
========================= */

function openCheckout() {
  if (totalCartQuantity() === 0) {
    showToast("Your bag is empty");
    return;
  }

  closePanels();

  elements.checkoutTotal.textContent =
    money(totalCartValue());

  elements.checkoutModal.classList.add("active");

  elements.checkoutModal.setAttribute(
    "aria-hidden",
    "false"
  );
}

function closeCheckout() {
  elements.checkoutModal.classList.remove("active");

  elements.checkoutModal.setAttribute(
    "aria-hidden",
    "true"
  );
}

function finishCheckout() {
  cart = {};

  saveCart();
  renderCart();
  closeCheckout();

  showToast("Demo order completed");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* =========================
   PARALLAX
========================= */

function enableParallax() {
  if (window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  window.addEventListener("mousemove", (event) => {
    const x =
      (event.clientX / window.innerWidth - 0.5) * 16;

    const y =
      (event.clientY / window.innerHeight - 0.5) * 12;

    elements.productImage.style.setProperty(
      "--mouse-x",
      `${x}px`
    );

    elements.productImage.style.setProperty(
      "--mouse-y",
      `${y}px`
    );

    elements.productHalo.style.transform =
      `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });
}

/* =========================
   TOUCH SWIPE
========================= */

let touchStartX = 0;
let touchStartY = 0;

elements.productStage.addEventListener(
  "touchstart",
  (event) => {
    const touch = event.changedTouches[0];

    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  },
  { passive: true }
);

elements.productStage.addEventListener(
  "touchend",
  (event) => {
    const touch = event.changedTouches[0];

    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;

    if (Math.abs(dx) < 50) return;

    if (Math.abs(dx) < Math.abs(dy)) return;

    if (dx < 0) {
      nextProduct();
    } else {
      previousProduct();
    }
  },
  { passive: true }
);

/* =========================
   KEYBOARD
========================= */

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextProduct();
  }

  if (event.key === "ArrowLeft") {
    previousProduct();
  }

  if (event.key === "Escape") {
    closePanels();
    closeCheckout();
  }
});

/* =========================
   EVENTS
========================= */

elements.nextButton.addEventListener(
  "click",
  nextProduct
);

elements.previousButton.addEventListener(
  "click",
  previousProduct
);

elements.nextProduct.addEventListener(
  "click",
  nextProduct
);

elements.addButton.addEventListener(
  "click",
  () => addToCart(currentIndex)
);

elements.bagButton = $("bagButton");

elements.bagButton.addEventListener(
  "click",
  openCart
);

elements.closeCart.addEventListener(
  "click",
  closePanels
);

elements.closeAI.addEventListener(
  "click",
  closePanels
);

elements.overlay.addEventListener(
  "click",
  closePanels
);

elements.aiButton.addEventListener(
  "click",
  openAI
);

elements.exploreButton.addEventListener(
  "click",
  openMarketplace
);

elements.exploreHint.addEventListener(
  "click",
  openMarketplace
);

elements.closeMarketplace.addEventListener(
  "click",
  () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
);

elements.searchInput.addEventListener(
  "input",
  renderMarketplace
);

elements.checkoutButton.addEventListener(
  "click",
  openCheckout
);

elements.closeCheckout.addEventListener(
  "click",
  closeCheckout
);

elements.finishCheckout.addEventListener(
  "click",
  finishCheckout
);

elements.checkoutModal.addEventListener(
  "click",
  (event) => {
    if (event.target === elements.checkoutModal) {
      closeCheckout();
    }
  }
);

/* =========================
   INITIALIZE
========================= */

function init() {
  createParticles();

  buildCategories();

  renderProduct(currentIndex);

  renderMarketplace();

  renderCart();

  enableParallax();
}

init();

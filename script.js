const products = [
  {
    name: "Galaxy S26 Ultra",
    category: "Technology",
    price: 169999,
    accent: "#4fd8ff",
    background: "#05090d",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=90",
    description:
      "Next-generation mobile technology designed for powerful performance, photography and everyday productivity."
  },

  {
    name: "Porsche 911 Carrera",
    category: "Automotive",
    price: 16500000,
    accent: "#ff3b3b",
    background: "#0d0505",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=90",
    description:
      "Iconic design combined with exhilarating performance and premium driving comfort."
  },

  {
    name: "Premium Sneakers",
    category: "Fashion",
    price: 7200,
    accent: "#ff8a3d",
    background: "#0d0804",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90",
    description:
      "Modern streetwear sneakers designed for everyday movement and effortless style."
  },

  {
    name: "SmithX Watch",
    category: "Wearable",
    price: 6500,
    accent: "#5cf2a4",
    background: "#040a07",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=90",
    description:
      "A connected wearable designed to keep your day organized, active and informed."
  },

  {
    name: "Wireless Headphones",
    category: "Audio",
    price: 4500,
    accent: "#b98cff",
    background: "#08050c",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=90",
    description:
      "Immersive sound designed for focused listening anywhere."
  }
];

let currentIndex = 0;
let cart = [];
let isChanging = false;


/* ELEMENTS */

const root = document.documentElement;

const productImage =
  document.getElementById("productImage");

const productStage =
  document.getElementById("productStage");

const productInformation =
  document.getElementById("productInformation");

const productName =
  document.getElementById("productName");

const productCategory =
  document.getElementById("productCategory");

const productPrice =
  document.getElementById("productPrice");

const productDescription =
  document.getElementById("productDescription");

const currentProduct =
  document.getElementById("currentProduct");

const totalProducts =
  document.getElementById("totalProducts");

const nextProductName =
  document.getElementById("nextProductName");

const productDots =
  document.getElementById("productDots");

const cartCount =
  document.getElementById("cartCount");

const cartPanel =
  document.getElementById("cartPanel");

const cartItems =
  document.getElementById("cartItems");

const cartItemsCount =
  document.getElementById("cartItemsCount");

const cartTotal =
  document.getElementById("cartTotal");

const bagButton =
  document.getElementById("bagButton");

const closeCart =
  document.getElementById("closeCart");

const checkoutButton =
  document.getElementById("checkoutButton");

const overlay =
  document.getElementById("overlay");

const toast =
  document.getElementById("toast");

const aiButton =
  document.getElementById("aiButton");

const aiPanel =
  document.getElementById("aiPanel");

const closeAI =
  document.getElementById("closeAI");

const aiResponse =
  document.getElementById("aiResponse");


/* PRICE FORMAT */

function formatPrice(value) {
  return "KES " +
    value.toLocaleString("en-KE");
}


/* ENVIRONMENT */

function updateEnvironment(product) {

  root.style.setProperty(
    "--accent",
    product.accent
  );

  root.style.setProperty(
    "--accent-soft",
    product.accent + "30"
  );

  document.body.style.background =
    product.background;
}


/* DOTS */

function buildDots() {

  productDots.innerHTML = "";

  products.forEach((product, index) => {

    const dot =
      document.createElement("button");

    dot.setAttribute(
      "aria-label",
      `View ${product.name}`
    );

    if (index === currentIndex) {
      dot.classList.add("active");
    }

    dot.addEventListener(
      "click",
      () => goTo(index)
    );

    productDots.appendChild(dot);
  });
}


/* UPDATE DOTS */

function updateDots() {

  [...productDots.children].forEach(
    (dot, index) => {

      dot.classList.toggle(
        "active",
        index === currentIndex
      );

    }
  );
}


/* NEXT PRODUCT */

function updateNextProduct() {

  const nextIndex =
    (currentIndex + 1) %
    products.length;

  nextProductName.textContent =
    products[nextIndex].name;
}


/* COUNTER */

function updateCounter() {

  currentProduct.textContent =
    String(currentIndex + 1)
      .padStart(2, "0");

  totalProducts.textContent =
    String(products.length)
      .padStart(2, "0");
}


/* INITIAL RENDER */

function render() {

  const product =
    products[currentIndex];

  updateEnvironment(product);

  productImage.src =
    product.image;

  productImage.alt =
    product.name;

  productName.textContent =
    product.name;

  productCategory.textContent =
    product.category.toUpperCase();

  productPrice.textContent =
    formatPrice(product.price);

  productDescription.textContent =
    product.description;

  updateNextProduct();

  updateCounter();

  buildDots();
}


/* CHANGE PRODUCT */

function goTo(newIndex) {

  if (
    isChanging ||
    newIndex === currentIndex
  ) {
    return;
  }

  isChanging = true;

  const movingForward =
    newIndex > currentIndex ||
    (
      currentIndex === products.length - 1 &&
      newIndex === 0
    );

  productImage.classList.remove(
    "enter"
  );

  productImage.classList.add(
    movingForward
      ? "exit-next"
      : "exit-prev"
  );

  productInformation.style.opacity =
    "0";

  productInformation.style.transform =
    movingForward
      ? "translateX(-25px)"
      : "translateX(25px)";

  setTimeout(() => {

    currentIndex = newIndex;

    const product =
      products[currentIndex];

    updateEnvironment(product);

    productImage.src =
      product.image;

    productImage.alt =
      product.name;

    productName.textContent =
      product.name;

    productCategory.textContent =
      product.category.toUpperCase();

    productPrice.textContent =
      formatPrice(product.price);

    productDescription.textContent =
      product.description;

    updateNextProduct();

    updateCounter();

    updateDots();

    productImage.classList.remove(
      "exit-next",
      "exit-prev"
    );

    void productImage.offsetWidth;

    productImage.classList.add(
      "enter"
    );

    productInformation.style.transform =
      movingForward
        ? "translateX(25px)"
        : "translateX(-25px)";

    requestAnimationFrame(() => {

      productInformation.style.opacity =
        "1";

      productInformation.style.transform =
        "translateX(0)";

    });

    setTimeout(() => {

      productImage.classList.remove(
        "enter"
      );

      isChanging = false;

    }, 700);

  }, 300);
}


/* NEXT */

function nextProduct() {

  goTo(
    (currentIndex + 1) %
    products.length
  );

}


/* PREVIOUS */

function previousProduct() {

  goTo(
    (currentIndex - 1 + products.length) %
    products.length
  );

}


/* NAVIGATION */

document
  .getElementById("nextButton")
  .addEventListener(
    "click",
    nextProduct
  );

document
  .getElementById("previousButton")
  .addEventListener(
    "click",
    previousProduct
  );


/* KEYBOARD */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "ArrowRight") {
      nextProduct();
    }

    if (event.key === "ArrowLeft") {
      previousProduct();
    }

    if (event.key === "Escape") {
      closePanels();
    }

  }
);


/* MOBILE SWIPE */

let touchStartX = 0;
let touchStartY = 0;

productStage.addEventListener(
  "touchstart",
  event => {

    touchStartX =
      event.touches[0].clientX;

    touchStartY =
      event.touches[0].clientY;

  },
  { passive: true }
);

productStage.addEventListener(
  "touchend",
  event => {

    const touchEndX =
      event.changedTouches[0].clientX;

    const touchEndY =
      event.changedTouches[0].clientY;

    const differenceX =
      touchEndX - touchStartX;

    const differenceY =
      touchEndY - touchStartY;

    if (
      Math.abs(differenceX) > 55 &&
      Math.abs(differenceX) >
      Math.abs(differenceY)
    ) {

      if (differenceX < 0) {
        nextProduct();
      } else {
        previousProduct();
      }

    }

  },
  { passive: true }
);


/* MOUSE PARALLAX */

document.addEventListener(
  "mousemove",
  event => {

    if (
      window.innerWidth < 760
    ) {
      return;
    }

    const x =
      (event.clientX /
        window.innerWidth -
        0.5) * 18;

    const y =
      (event.clientY /
        window.innerHeight -
        0.5) * 12;

    productImage.style.setProperty(
      "--mouse-x",
      `${x}px`
    );

    productImage.style.setProperty(
      "--mouse-y",
      `${y}px`
    );

  }
);


/* ADD TO CART */

document
  .getElementById("addButton")
  .addEventListener(
    "click",
    () => {

      const product =
        products[currentIndex];

      cart.push(product);

      updateCart();

      showToast(
        `${product.name} added to bag`
      );

      cartCount.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.5)" },
          { transform: "scale(1)" }
        ],
        {
          duration: 350,
          easing: "ease-out"
        }
      );

    }
  );


/* UPDATE CART */

function updateCart() {

  cartCount.textContent =
    cart.length;

  cartItemsCount.textContent =
    `${cart.length} ${
      cart.length === 1
        ? "ITEM"
        : "ITEMS"
    }`;

  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="empty-cart">
        Your bag is empty.
      </div>
    `;

    cartTotal.textContent =
      "KES 0";

    return;
  }

  cartItems.innerHTML = "";

  cart.forEach(
    (product, index) => {

      const item =
        document.createElement("div");

      item.style.cssText = `
        display:flex;
        gap:12px;
        align-items:center;
        padding:12px 0;
        border-bottom:1px solid rgba(255,255,255,.08);
      `;

      item.innerHTML = `
        <img
          src="${product.image}"
          alt="${product.name}"
          style="
            width:60px;
            height:60px;
            object-fit:cover;
            border-radius:10px;
          "
        >

        <div style="flex:1">

          <div style="
            font-size:12px;
            margin-bottom:5px;
          ">
            ${product.name}
          </div>

          <div style="
            color:var(--accent);
            font-size:11px;
          ">
            ${formatPrice(product.price)}
          </div>

        </div>

        <button
          data-remove="${index}"
          style="
            border:0;
            background:none;
            color:rgba(255,255,255,.45);
            cursor:pointer;
            font-size:16px;
          "
        >
          ×
        </button>
      `;

      cartItems.appendChild(item);

    }
  );

  const total =
    cart.reduce(
      (sum, product) =>
        sum + product.price,
      0
    );

  cartTotal.textContent =
    formatPrice(total);

  cartItems
    .querySelectorAll("[data-remove]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const index =
            Number(
              button.dataset.remove
            );

          cart.splice(index, 1);

          updateCart();

        }
      );

    });
}


/* OPEN CART */

bagButton.addEventListener(
  "click",
  () => {

    closeAI();

    cartPanel.classList.add(
      "active"
    );

    overlay.classList.add(
      "active"
    );

  }
);


/* CLOSE CART */

closeCart.addEventListener(
  "click",
  closePanels
);


/* AI */

aiButton.addEventListener(
  "click",
  () => {

    cartPanel.classList.remove(
      "active"
    );

    aiPanel.classList.add(
      "active"
    );

    overlay.classList.add(
      "active"
    );

  }
);


closeAI.addEventListener(
  "click",
  closePanels
);


/* CLOSE PANELS */

overlay.addEventListener(
  "click",
  closePanels
);

function closePanels() {

  cartPanel.classList.remove(
    "active"
  );

  aiPanel.classList.remove(
    "active"
  );

  overlay.classList.remove(
    "active"
  );

}


/* AI SUGGESTIONS */

document
  .querySelectorAll(
    ".ai-suggestions button"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const product =
          products[currentIndex];

        const question =
          button.dataset.question;

        if (
          question.includes("cheaper")
        ) {

          const cheaper =
            products
              .filter(
                item =>
                  item.price <
                  product.price
              )
              .sort(
                (a,b) =>
                  a.price - b.price
              )[0];

          aiResponse.textContent =
            cheaper
              ? `A lower-priced option in this prototype is ${cheaper.name} at ${formatPrice(cheaper.price)}.`
              : "There isn't a cheaper product in this demo.";

        } else if (
          question.includes("worth")
        ) {

          aiResponse.textContent =
            `The ${product.name} is listed at ${formatPrice(product.price)}. Whether that price makes sense depends on the features, quality and alternatives you're considering.`;

        } else {

          aiResponse.textContent =
            product.description;

        }

      }
    );

  });


/* CHECKOUT */

checkoutButton.addEventListener(
  "click",
  () => {

    if (cart.length === 0) {

      showToast(
        "Your bag is empty"
      );

      return;
    }

    showToast(
      "Demo checkout activated"
    );

  }
);


/* TOAST */

let toastTimer;

function showToast(message) {

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 1800);
}


/* PARTICLES */

function createParticles() {

  const container =
    document.getElementById(
      "particles"
    );

  for (
    let i = 0;
    i < 35;
    i++
  ) {

    const particle =
      document.createElement("span");

    particle.className =
      "particle";

    particle.style.left =
      Math.random() * 100 + "%";

    particle.style.top =
      Math.random() * 100 + "%";

    particle.style.animationDuration =
      8 + Math.random() * 15 + "s";

    particle.style.animationDelay =
      Math.random() * 10 + "s";

    container.appendChild(
      particle
    );

  }
}


/* START */

createParticles();

render();

updateCart();

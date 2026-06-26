console.log("Reel Pretty Tees site const products = [
  // 🌊 COASTAL (10)
  { name: "Saltwater & Sunshine", price: 25, image: "images/shirts/shirt1.jpg", link: "#", category: "coastal" },
  { name: "Coastal Drift", price: 25, image: "images/shirts/shirt2.jpg", link: "#", category: "coastal" },
  { name: "Reel Pretty Classic", price: 25, image: "images/shirts/shirt3.jpg", link: "#", category: "coastal" },
  { name: "Gulf Breeze", price: 25, image: "images/shirts/shirt4.jpg", link: "#", category: "coastal" },
  { name: "Tide Runner", price: 25, image: "images/shirts/shirt5.jpg", link: "#", category: "coastal" },
  { name: "Sunset Catch", price: 25, image: "images/shirts/shirt6.jpg", link: "#", category: "coastal" },
  { name: "Salt Air Club", price: 25, image: "images/shirts/shirt7.jpg", link: "#", category: "coastal" },
  { name: "Blue Horizon", price: 25, image: "images/shirts/shirt8.jpg", link: "#", category: "coastal" },
  { name: "Dockside Days", price: 25, image: "images/shirts/shirt9.jpg", link: "#", category: "coastal" },
  { name: "Wave Chaser", price: 25, image: "images/shirts/shirt10.jpg", link: "#", category: "coastal" },

  // 🏈 SCHOOL SPIRIT (8)
  { name: "Home Team Pride", price: 25, image: "images/shirts/shirt11.jpg", link: "#", category: "school" },
  { name: "Friday Night Lights", price: 25, image: "images/shirts/shirt12.jpg", link: "#", category: "school" },
  { name: "Go Team Go", price: 25, image: "images/shirts/shirt13.jpg", link: "#", category: "school" },
  { name: "Varsity Vibes", price: 25, image: "images/shirts/shirt14.jpg", link: "#", category: "school" },
  { name: "Bleacher Crew", price: 25, image: "images/shirts/shirt15.jpg", link: "#", category: "school" },
  { name: "School Spirit Classic", price: 25, image: "images/shirts/shirt16.jpg", link: "#", category: "school" },
  { name: "Game Day Energy", price: 25, image: "images/shirts/shirt17.jpg", link: "#", category: "school" },
  { name: "Championship Mindset", price: 25, image: "images/shirts/shirt18.jpg", link: "#", category: "school" },

  // 🐶 CUSTOM DOG SHIRT (1)
  { name: "Custom Dog Tee (Upload Photo)", price: 30, image: "images/shirts/shirt19.jpg", link: "#", category: "custom" }
];

const grid = document.getElementById("productGrid");

function renderProducts(filter = "all") {
  grid.innerHTML = "";

  const filtered = filter === "all"
    ? products
    : products.filter(p => p.category === filter);

  filtered.forEach(product => {
    const card = document.createElement("div");

    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}.00</p>
      <a class="btn" href="${product.link}" target="_blank">Buy Now</a>
    `;

    grid.appendChild(card);
  });
}

function filterProducts(category) {
  renderProducts(category);
}

// default load
renderProducts();

document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.querySelector(".search-icon");
  const searchBox = document.querySelector(".search-box");
  const searchInput = document.getElementById("searchInput");

  // Ensure the search box is hidden on page load
  searchBox.style.display = "none";

  // Toggle search box on click
  searchIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    searchBox.style.display = (searchBox.style.display === "none" || searchBox.style.display === "") ? "flex" : "none";
    if (searchBox.style.display === "flex") {
      searchInput.focus(); // Auto-focus the input field
    }
  });

  // Hide search box when clicking outside
  document.addEventListener("click", function (event) {
    if (!searchBox.contains(event.target) && !searchIcon.contains(event.target)) {
      searchBox.style.display = "none";
    }
  });

  // Trigger search when Enter key is pressed
  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      performSearch(searchInput.value);
    }
  });

  function performSearch(query) {
    if (query.trim() !== "") {
      window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
  };

  //Navigation
  function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display =
      mobileMenu.style.display === "flex" ? "none" : "flex";
  }





  //swiper
  var swiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        autoplay: {
          delay: 7000
        }
      }
    }
  });



});




document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Elements
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const mobileMenuOverlay = document.getElementById("mobileMenu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenuBtn = document.querySelector(".close-menu");
  const expandIcons = document.querySelectorAll(".expand");

  // Toggle Mobile Menu
  function toggleMobileMenu() {
    mobileMenuOverlay.classList.toggle("show");
    mobileMenu.classList.toggle("show");
  }

  // Close Mobile Menu when clicking outside
  function closeMobileMenu(e) {
    if (!mobileMenu.contains(e.target) && !mobileMenuIcon.contains(e.target)) {
      mobileMenuOverlay.classList.remove("show");
      mobileMenu.classList.remove("show");
    }
  }

  // Event Listeners for Mobile Menu
  mobileMenuIcon.addEventListener("click", toggleMobileMenu);
  closeMenuBtn.addEventListener("click", toggleMobileMenu);
  document.addEventListener("click", closeMobileMenu);

  // Prevent event bubbling inside menu
  mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Toggle Submenus in Mobile Menu
  expandIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      let parentItem = this.parentElement;
      let submenu = parentItem.querySelector("ul");

      if (submenu) {
        submenu.classList.toggle("show");
        this.textContent = submenu.classList.contains("show") ? "−" : "+";
      }
    });
  });

  // Desktop Menu Elements
  const menuItems = document.querySelectorAll(".menu-item > a");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      let dropdown = this.nextElementSibling;

      if (!dropdown) return;

      // Hide all other dropdowns
      document.querySelectorAll(".dropdown").forEach((menu) => {
        if (menu !== dropdown) {
          menu.classList.remove("show");
        }
      });

      // Show selected dropdown
      dropdown.classList.toggle("show");

      // Select first item in dropdown & show its submenu
      let firstItem = dropdown.querySelector(".has-submenu");
      if (firstItem) {
        selectDropdownItem(firstItem);
      }
    });
  });

  // Handle submenu selection
  function selectDropdownItem(item) {
    // Remove previous selection
    document
      .querySelectorAll(".dropdown li")
      .forEach((li) => li.classList.remove("selected"));
    document
      .querySelectorAll(".submenu")
      .forEach((sub) => sub.classList.remove("show"));

    // Mark selected
    item.classList.add("selected");
    let submenu = item.querySelector(".submenu");
    if (submenu) {
      submenu.classList.add("show");
    }
  }

  // Handle submenu switching
  document.querySelectorAll(".has-submenu").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      selectDropdownItem(this);
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".menu-item") && !e.target.closest(".dropdown")) {
      document
        .querySelectorAll(".dropdown")
        .forEach((menu) => menu.classList.remove("show"));
    }
  });
});

// Carousel Functionality
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;
  let autoSlideInterval;

  function updateCarousel() {
    items.forEach((item, index) => {
      item.classList.remove("active", "prev", "next");
      item.style.opacity = "0.4";
      item.style.transform = "scale(0.8) translateX(0)";

      if (index === currentIndex) {
        item.classList.add("active");
        item.style.opacity = "1";
        item.style.transform = "scale(1.2) translateX(0)";
      } else if (index === (currentIndex - 1 + items.length) % items.length) {
        item.classList.add("prev");
        item.style.transform = "scale(0.9) translateX(-450px)";
      } else if (index === (currentIndex + 1) % items.length) {
        item.classList.add("next");
        item.style.transform = "scale(0.9) translateX(450px)";
      }
    });
  }

  function startAutoSlide() {
    clearInterval(autoSlideInterval); // Clear previous interval
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }, 5000);
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
    startAutoSlide(); // Restart auto-slide
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
    startAutoSlide(); // Restart auto-slide
  });

  updateCarousel(); // Initial setup
  startAutoSlide(); // Start auto-slide
});

// Blog
document.addEventListener("DOMContentLoaded", function () {
  const blogData = [
    {
      image: "assets/images/blog1.jpg",
      category: "CUSTOMER STORY",
      title: "my website",
      link: "https://codepen.io/VarunSinghr19/full/yyLOyBQ"
    },
    {
      image: "assets/images/blog2.jpg",
      category: "WHITEPAPER",
      title: "Designing a Robust GigE Vision Camera System",
      link: "#"
    },
    {
      image: "assets/images/blog3.jpg",
      category: "TECH NOTE",
      title: "A New Dawn for NIR Spectroscopy",
      link: "#"
    },
    {
      image: "assets/images/blog4.jpg",
      category: "CUSTOMER STORY",
      title: "Light Sheet Microscopy at Morgridge Institute for Research",
      link: "#"
    }
  ];

  const blogContainer = document.getElementById("blog-container");

  blogData.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    blogCard.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}">
            <div class="blog-info">
                <span class="blog-category">${blog.category}</span>
                <h3>${blog.title}</h3>
                <a href="${blog.link}" class="read-more">Read the Story »</a>
            </div>
        `;

    blogContainer.appendChild(blogCard);
  });
});

//Footer
document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
});

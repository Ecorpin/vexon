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
  }
});


















//Navigation
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
}

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


  





























//Footer
document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
});

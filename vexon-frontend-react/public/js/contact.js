document.addEventListener("DOMContentLoaded", function () {
    const salesBtn = document.getElementById("sales-btn");
    const supportBtn = document.getElementById("support-btn");
    const inquiryBtn = document.getElementById("inquiry-btn");
    const dropdownSection = document.getElementById("dropdown-section");
    const formSection = document.getElementById("form-section");
    const salesSection = document.getElementById("Sales-section");

    const selectElement = document.getElementById("productSelect");
    const cards = document.querySelectorAll(".card");

    function resetButtons() {
        salesBtn.classList.remove("active");
        supportBtn.classList.remove("active");
        inquiryBtn.classList.remove("active");
    }

    function hideAllSections() {
        dropdownSection.style.display = "none";
        formSection.style.display = "none";
        salesSection.style.display = "none";
    }

    function handleButtonClick(button, showDropdown, showForm, showSales) {
        resetButtons();
        button.classList.add("active");
        hideAllSections();
        if (showDropdown) dropdownSection.style.display = "block";
        if (showForm) formSection.style.display = "block";
        if (showSales) salesSection.style.display = "block";
    }

    // Set Sales button as active on page load
    handleButtonClick(salesBtn, false, false, true);

    salesBtn.addEventListener("click", function () {
        handleButtonClick(this, false, false, true);
    });

    supportBtn.addEventListener("click", function () {
        handleButtonClick(this, true, false, false);
    });

    inquiryBtn.addEventListener("click", function () {
        handleButtonClick(this, false, true, false);
    });

    // 🔹 Dropdown functionality (Only modifies the related section)
    selectElement.addEventListener("change", function () {
        // Hide all cards
        cards.forEach(card => card.style.display = "none");

        // Show selected card
        const selectedOption = selectElement.value;
        if (selectedOption) {
            document.getElementById(`${selectedOption}-card`).style.display = "block";
        }
    });
});

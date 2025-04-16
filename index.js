// You could also add these improvements:

// 1. Cache DOM elements for better performance
const shareButton = document.querySelector(".js-share-button");
const sharePanel = document.querySelector(".js-hidden-con");
const shareIcon = document.querySelector(".js-svg-img");

// 2. Toggle ARIA attributes for accessibility
shareButton.addEventListener("click", () => {
    const isExpanded = sharePanel.classList.toggle("show-con");
    
    // Update button's aria-expanded state
    shareButton.setAttribute("aria-expanded", isExpanded);
    
    // Toggle active classes
    shareButton.classList.toggle("share-button-background-color", isExpanded);
    shareIcon.classList.toggle("svg-img-background-color", isExpanded);
});
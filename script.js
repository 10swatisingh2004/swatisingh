function toggleMenu() {
    const navbar = document.querySelector('.navbar ul');
    navbar.classList.toggle('active');
}
// Get modal elements
const modal = document.getElementById("contactModal");
const contactLink = document.getElementById("contact-link");
const closeBtn = document.querySelector(".close");

// Open modal when clicking "Contact" link
contactLink.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
}

// Close modal when clicking on "x" button
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Select all media cards
    const mediaCards = document.querySelectorAll(".card");
    const videoPopup = document.getElementById("videoPopup");
    const videoPlayerElement = document.getElementById("videoPlayerElement");
    const modalClose = document.querySelector(".modal-close");

    // Add click event to each media card
    mediaCards.forEach((card) => {
        card.addEventListener("click", function() {
            // Get the video source from the data attribute
            const videoSrc = card.getAttribute("data-video");
            videoPlayerElement.src = videoSrc; // Set the video source

            // Open the modal
            videoPopup.style.display = "flex";

            // Play the video
            videoPlayerElement.play();
        });
    });

    // Close the modal when the close button is clicked
    modalClose.addEventListener("click", function() {
        videoPopup.style.display = "none";
        videoPlayerElement.pause(); // Pause the video when closing
        videoPlayerElement.currentTime = 0; // Reset video to the start
    });

    // Close the modal when clicking anywhere outside the video
    window.addEventListener("click", function(event) {
        if (event.target === videoPopup) {
            videoPopup.style.display = "none";
            videoPlayerElement.pause(); // Pause the video when closing
            videoPlayerElement.currentTime = 0; // Reset video to the start
        }
    });
});

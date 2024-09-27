console.log("Rin Tohsaka");

const movieLinks = document.querySelectorAll('.movie-list__link');
const modal = document.querySelector('.modal');
const iframe = document.getElementById('yt');
const closeBtn = document.querySelector('.modal-close');

movieLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const videoId = link.getAttribute('data-url'); // Get the video ID
        iframe.src = `https://www.youtube.com/embed/${videoId}`; // Set the iframe src
        modal.style.display = 'block'; // Show the modal
    });
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'none'; // Hide the modal
    iframe.src = ''; // Clear the iframe src to stop the video
});

// Optional: Close the modal when clicking outside the video
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; // Hide the modal
        iframe.src = ''; // Clear the iframe src to stop the video
    }
});

/* THE PURPOSE OF THIS SCRIPT FILE IS TO ALTER BEHAVIOR ACROSS ALL THE PAGES ON MY WEBSITE */


document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('.toggle-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = header.nextElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block"; // Show the content
                header.classList.add('active'); // Add active class
            } else {
                content.style.display = "none"; // Hide the content
                header.classList.remove('active'); // Remove active class
            }
        });
    });
});


document.getElementById('clickableImage').addEventListener('click', function() {
    displayImage();
});

function displayImage() {
    // Create a new image element
    var image = document.createElement('img');
    image.src = 'images/THEGIFT.png'; // Replace with the actual image URL

    image.style.width = '100%';
    image.style.height = '100%';
    image.style.objectFit = 'contain';
    image.style.zIndex = '1000';
    image.style.position = 'fixed';
    image.style.top = '0';
    image.style.left = '0';
    image.style.right = '0';
    image.style.bottom = '0';
    image.style.margin = 'auto';

    // Append the image to the body or a specific container
    document.body.appendChild(image);

    // You may want to remove the image element if needed
    // For example, remove the image after a certain delay
    setTimeout(function() {
        image.remove();
    }, 5000); // Adjust the delay (in milliseconds) as needed
}

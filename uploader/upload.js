// Add event listener to the upload form
document.getElementById("upload-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Simulate upload process
    simulateUpload();
});

// Simulate upload process
function simulateUpload() {
    const uploadButton = document.querySelector("#upload-form button");
    uploadButton.disabled = true;
    uploadButton.textContent = "Uploading...";
    
    setTimeout(() => {
        uploadButton.textContent = "Upload";
        uploadButton.disabled = false;
        alert("File uploaded successfully!");
    }, 3000); // Simulate a 3-second upload process
}

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
 //setting data in local storage
    const form = event.target;
    const formData = new FormData(form);
 
    const date = formData.get("date");
    const msg = formData.get("msg");
 
    localStorage.setItem("date", date);
    localStorage.setItem("msg", msg);
 
    const fileInput = document.getElementById('img');
    const file = fileInput.files[0];
 
    if (file) {
        const reader = new FileReader();
 
        reader.onload = function(e) {
            const imageSrc = e.target.result;
            localStorage.setItem("image", imageSrc);
            window.location.href = 'page2.html';
        }
 
        reader.readAsDataURL(file);
    } else {
        // Handle case where no image is selected
        alert("Please select an image");
    }
 });
 
        // document.getElementById('submit').addEventListener('click', function() {
        //     const fileInput = document.getElementById('img');
        //     const file = fileInput.files[0];
        //     const reader = new FileReader();

        //     reader.onload = function(e) {
        //         const imageSrc = e.target.result;
        //         window.location.href = 'target_page.html?image=' + encodeURIComponent(imageSrc);
        //     }

        //     reader.readAsDataURL(file);
        // });
   
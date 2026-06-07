const imageInput =
    document.getElementById("imageInput");

const preview =
    document.getElementById("preview");

const error =
    document.getElementById("error");

const MAX_SIZE = 2 * 1024 * 1024; // 2MB

imageInput.addEventListener("change", function(){

    const file = this.files[0];

    error.textContent = "";
    preview.style.display = "none";

    if(!file){
        return;
    }

    /*
        Validate File Type
    */
    if(!file.type.startsWith("image/")){

        error.textContent =
            "Only image files are allowed.";

        this.value = "";

        return;
    }

    /*
        Validate File Size
    */
    if(file.size > MAX_SIZE){

        error.textContent =
            "Image size must be less than 2MB.";

        this.value = "";

        return;
    }

    /*
        Show Preview
    */
    const reader = new FileReader();

    reader.onload = function(e){

        preview.src = e.target.result;

        preview.style.display = "block";
    };

    reader.readAsDataURL(file);
});

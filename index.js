function updateImage() {
    console.log(this.files);
    if (this.files && this.files.length) {
        preview.src = window.URL.createObjectURL(this.files[0]);
        preview.setAttribute('height','100%');
    }
}

const input = document.getElementById('ivent__upload');
const preview = document.getElementById('preview');


input.addEventListener('change', updateImage);
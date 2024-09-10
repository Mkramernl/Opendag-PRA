function toggleContent(id) {
    const content = document.getElementById(id);
    const block = content.previousElementSibling;
   
    if (content.style.display === "block") {
        content.style.display = "none";
        block.classList.remove("expanded");
    } else {
        content.style.display = "block";
        block.classList.add("expanded");
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Zorg ervoor dat de document geladen is voordat je event listeners toevoegt
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.content .block:nth-child(1)').addEventListener('click', () => scrollToSection('extra-sectie-1'));
    document.querySelector('.content .block:nth-child(2)').addEventListener('click', () => scrollToSection('extra-sectie-2'));
    document.querySelector('.content .block:nth-child(3)').addEventListener('click', () => scrollToSection('extra-sectie-3'));
});

function openModal() {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("thumbnail");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = img.src;
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Function to scroll to the image (as per your original code)
function scrollToImage(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}

    function scrollToVakken() {
        document.getElementById('vakken-info').scrollIntoView({ behavior: 'smooth' });
    }

const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const image3 = document.getElementById('image3');

    const intro1 = document.getElementById('intro1');
    const intro2 = document.getElementById('intro1');
    const intro3 = document.getElementById('intro1');

    
    const introduction1 = document.getElementById('introduction1');
    const introduction2 = document.getElementById('introduction2');
    const introduction3 = document.getElementById('introduction3');

    function hideAllImages() {
        image1.style.display = 'none';
        image2.style.display = 'none';
        image3.style.display = 'none';
    }
    function hideAllIntro(){
        intro1.style.display = 'none';
        intro2.style.display = 'none';
        intro3.style.display = 'none';
    }
    function hideAllIntroduction(){
        introduction1.style.display = 'none';
        introduction2.style.display = 'none';
        introduction3.style.display = 'none';
    }

function toggleContent(button, image, intro, introduction) {
    if (image.style.display === 'block') {
        image.style.display = 'none';
        intro.style.display = 'none';
        introduction.style.display = 'none';
    } else {
        hideAllImages();
        image.style.display = 'block';
        hideAllIntro();
        intro.style.display = 'block';
        hideAllIntroduction();
        introduction.style.display = 'block';
    }
}

button1.addEventListener('click', () => {
    toggleContent(button1, image1, intro1, introduction1);
});

button2.addEventListener('click', () => {
    toggleContent(button2, image2, intro2, introduction2);
});

button3.addEventListener('click', () => {
    toggleContent(button3, image3, intro3, introduction3);
});

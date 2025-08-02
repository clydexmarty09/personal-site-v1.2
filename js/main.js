// main.js 
window.addEventListener('DOMContentLoaded' ,()=> {

    localStorage.setItem('img1', 'assets/gallery-pictures/webp/untitled-1.webp');
    localStorage.setItem('img2', 'assets/gallery-pictures/webp/untitled-2.webp'); 

    const img1 = localStorage.getItem('img1'); 
    const img2 = localStorage.getItem('img2'); 

    const card = document.querySelector('art-card'); 

    if(card) {
        card.setAttribute('img1', img1); 
        card.setAttribute('img2', img2); 
    }

}); 
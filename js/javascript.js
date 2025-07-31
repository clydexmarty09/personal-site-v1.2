class artCard extends HTMLElement {
    constructor() {
        super(); 

        const shadow = this.attachShadow({mode:'open'}); 
        const img = document.createElement('img'); 
        img.src = "assets/gallery-pictures/webp/ghost-min.webp"; 
        

        shadow.appendChild(img); 
        
    }
    // function here
}

customElements.define('art-card', artCard); 

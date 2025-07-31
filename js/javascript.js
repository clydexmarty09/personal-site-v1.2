class artCard extends HTMLElement {
    constructor() {
        super(); 

        const shadow = this.attachShadow({mode:'open'}); 
        const img = document.createElement('img'); 
        const style = document.createElement('style'); 
        img.src = "assets/gallery-pictures/webp/ghost-min.webp"; 

        style.textContent = `

            img {
                margin:1rem; 
                padding:0.5rem; 
                height: 14rem;
                width:11rem;  
                outline: solid white; 
                display:flex; flex-direction:row; 
            }
        
        `; 

        shadow.appendChild(img); 
        shadow.appendChild(style); 
    }
    // function here
}

customElements.define('art-card', artCard); 

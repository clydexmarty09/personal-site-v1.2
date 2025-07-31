class artCard extends HTMLElement {
    constructor() {
        super(); 

        const shadow = this.attachShadow({mode:'open'}); 

        const img1 = document.createElement('img'); 
        img1.src = "assets/gallery-pictures/webp/ghost-min.webp"; 
        const img2 =  document.createElement('img'); 
        img2.src = "assets/gallery-pictures/webp/untitled-1.webp"; 
        
        const style = document.createElement('style'); 
        

        style.textContent = `

            img {
                margin:1rem; 
                padding:0.5rem; 
                height: 14rem;
                width:11rem;  
                outline: solid white; 
                display:block; 
        
        `; 

        shadow.appendChild(img1); 
        shadow.appendChild(img2); 
        shadow.appendChild(style); 
    }
    // function here
}

customElements.define('art-card', artCard); 

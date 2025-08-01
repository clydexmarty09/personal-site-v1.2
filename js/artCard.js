// artCard.js - will contain all artCard elements 

class artCard extends HTMLElement {
    constructor() {
        super(); 

        const shadow = this.attachShadow({mode:'open'}); 

        /*;
        //const img2 =  document.createElement('img');  
        img1.src = this.getAttribute('img') || ''; 
        //img2.src=this.getAttribute('img2') || '';
        img1.alt = 'Untitled';  */ 

        //picture tag 
        const picture = document.createElement('picture'); 
        const sourceWebp = document.createElement('source'); // need this for source tag inside picture 
        sourceWebp.type = 'image/webp'
        sourceWebp.srcset = this.getAttribute('img'); 
        const img = document.createElement('img')
        img.src = this.getAttribute('img') || ''; 
        img.alt = this.getAttribute('alt') || 'Untitled'; 
        picture.appendChild(sourceWebp); 
        picture.appendChild(img); 

        //container
        const container = document.createElement('div'); 
        
        //titles
        const title =  document.createElement('h2'); 
        title.textContent = this.getAttribute('title') || ''; 
        const link = document.createElement('a'); 

        //
       
        //styles
       const style = document.createElement('style'); 
       style.textContent = `

            img {
                margin:1rem; 
                padding:0.5rem; 
                height: 10rem;
                width:8rem;  
                outline: solid white; 
                display:block;
            } 
        `; 
        container.appendChild(title); 
        container.appendChild(picture); 

        shadow.appendChild(style); 
        shadow.appendChild(container); 
    }
    // function here
}

customElements.define('art-card', artCard); 

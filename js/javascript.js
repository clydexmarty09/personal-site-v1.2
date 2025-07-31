class artCard extends HTMLElement {
    constructor() {
        super(); 

        const name = document.createElement('h2'); 
        const picture = document.createElement('picture'); 
        const link = document.createElement('a'); 
        const p = document.createElement('p'); // short description 
    }
    // function here
}

customElements.define('art-card', artCard); 
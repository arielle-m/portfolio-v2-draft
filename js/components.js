class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log("NavBar custom element added to page.");
        this.innerHTML = `
            <header>
                <nav>
                    <ul class="flex fixed bottom-0 justify-evenly w-full py-4 bg-neutral-100">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
    
    disconnectedCallback() {
        console.log("NavBar custom element removed from page.");
    }
    
    adoptedCallback() {
        console.log("NavBar custom element moved to new page.");
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed on NavBar.`);
    }
}
customElements.define("am-navbar", NavBar);

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log("Footer custom element added to page.");
        this.innerHTML = `
            <footer>
                <a href="#top">Back to top</a>
                <nav>
                    <ul class="flex">
                        <li><a href="#home">Email</a></li>
                        <li><a href="#projects">Linkedin</a></li>
                        <li><a href="#about">GitHub</a></li>
                    </ul>
                </nav>
            </footer>
        `;
    }
    
    disconnectedCallback() {
        console.log("Footer custom element removed from page.");
    }
    
    adoptedCallback() {
        console.log("Footer custom element moved to new page.");
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed on Footer.`);
    }
}
customElements.define("am-footer", Footer);


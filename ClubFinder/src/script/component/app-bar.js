class AppBar extends HTMLElement {
    // terapkan lifecycle ketika element diterapkan
    connectedCallback() {
        console.log("connected")
        this.render();
    }

    render() {
        this.innerHTML = `<h2>Club Finder</h2>`;
    }
}

customElements.define("app-bar", AppBar);
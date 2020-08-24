class ImageFigure extends HTMLElement {
    constructor() {
        super();
        console.log("constructed!");
    }

    connectedCallback() {
        // mengambil atribut pada tag image-figure pada DOM
        this.src = this.getAttribute("src") || null;
        this.alt = this.getAttribute("alt") || null;
        this.caption = this.getAttribute("caption") || null;
        this.render();
         
        // this.innerHTML = `
        //     <figure>
        //         <img src="${this.src}"
        //             alt="${this.alt}">
        //         <figcaption>${this.caption}</figcaption>
        //     </figure>
        // `;

        /* 
            Explanation: 

            Pada kode diatas jika dalam DOM terdapat elemen <image-figure> maka kode tersebut akan mengambil nilai yang terdapat dalam src, alt, dan caption. Kemudiian nilai tersebut ditampilkan dalam elemen <figure> dengan memanfaatkan innerHTML.
        */
    }

    // kita pisahkan function render() dari connectedCallback() agar kita dapat memanggilnya berkali-kali
    render() {
        this.innerHTML = `
            <figure>
                <img src="${this.src}"
                    alt="${this.alt}">
                <figcaption>${this.caption}</figcaption>
            </figure>
        `;
    }

    disconnectedCallback() {
        console.log("disconnected!");
    }

    adoptedCallback() {
        console.log("adopted!");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // console.log(`Attribute: ${name} changed!`);
        // this[name] berarti kita akan mengubah nilai dari atribut berdasarkan name.
        this[name] = newValue;
        this.render()
    }

     // digunakan untuk mengamati perubahan nilai attribute caption
    /* kita bisa menetapkan lebih dari satu atribut yang diamati.
        dengan memisahkan nama atribut menggunakan koma. Contoh: */
    // return ["caption", "title", "src", ...]

    static get observedAttributes() {
        return ["caption", "title", "src"];
    }
}

customElements.define("image-figure", ImageFigure);
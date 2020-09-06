// Custom Element Shadow DOM Styling
class ImageFigure extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }

    /* 
    Penjelasan

    Agar nilai shadowRoot dapat diakses pada fungsi mana saja di class, maka kita perlu memasukkan nilai shadowRoot pada properti class menggunakan this. Kita bebas menentukan nama properti sesuai keinginan, namun untuk memudahkan kita gunakan nama _shadowRoot. Lalu mengapa penamaannya menggunakan tanda underscore (_) di depannya? Jawabannya, this pada konteks class ini merupakan HTMLElement dan ia sudah memiliki properti dengan nama shadowRoot. Untuk membedakan properti _shadowRoot asli dengan properti baru yang kita buat, kita bisa tambahkan underscore di awal penamaannya. Hal ini dibutuhkan karena jika kita menerapkan mode closed pada Shadow DOM, nilai properti shadowRoot akan mengembalikan null, sehingga tidak ada cara lain untuk kita mengakses Shadow Tree.
    */
 
 
    connectedCallback() {
      this.src = this.getAttribute("src") || null;
      this.alt = this.getAttribute("alt") || null;
      this.caption = this.getAttribute("caption") || null;
      this.render();
    }
    
    
    render() {
      this._shadowRoot.innerHTML = `
        <style>
          figure {
            border: thin #c0c0c0 solid;
            display: flex;
            flex-flow: column;
            padding: 5px;
            max-width: 220px;

            margin: auto;
          }
    
    
          figure > img {
            max-width: 220px;

          }
    
    
          figure > figcaption {
            background-color: #222;
            color: #fff;
            font: italic smaller sans-serif;
            padding: 3px;
            text-align: center;
          }
        </style>
    
    
        <figure>
          <img src="${this.src}"
              alt="${this.alt}">
          <figcaption>${this.caption}</figcaption>
        </figure>
      `;
    }
    
    
    attributeChangedCallback(name, oldValue, newValue) {
      this[name] = newValue;
      this.render();
    }
    
    
    static get observedAttributes() {
      return ["caption"];
    }
   }
    
    
   customElements.define("image-figure", ImageFigure);
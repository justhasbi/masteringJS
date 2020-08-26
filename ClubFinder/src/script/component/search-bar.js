class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    /*
        Karena di dalam elemen ini terdapat <button> yang harus memiliki sebuah event ketika ia ditekan, 
        maka kita harus menyediakan setter. Gunanya untuk menetapkan fungsi event agar dapat mudah 
        diterapkan dari luar class SearchBar.
    */


    get value() {
        return this.querySelector("#searchElement").value;
    }

   render() {
        this.innerHTML = `
            <div id="search-container" class="search-container">
                <input placeholder="Search football club" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
            </div>`;
       
        // Kemudian terapkan this._clickEvent sebagai event pada element button
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
        // Dengan begitu nantinya kita dapat mudah dalam clickEvent pada SearchBar yang digunakan di berkas main.js.
    }

    /* Pada berkas main.js juga kita memanfaatkan value dari element <input> untuk mendapatkan kata kunci 
    pencarian club. Agar mudah mendapatkan nilai value dari elemen <input> yang terdapat pada search bar, 
    kita buat fungsi getter yang mengembalikan nilai value dari elemen <input> tersebut.
    get value()
    */

}

customElements.define("search-bar", SearchBar);

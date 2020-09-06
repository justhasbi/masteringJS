import "./club-item.js";

class ClubList extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }
    set clubs(clubs) {
        this._clubs = clubs;
        this.render()
    }

     // perlu satu function lagi untuk menangani ketika hasil pencarian tidak ditemukan
     renderError(message) {
        this._shadowRoot.innerHTML = `
            <style>
                .placeholder {
                    font-weight: lighter;
                    color: rgba(0,0,0,0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>
        `;
        this._shadowRoot.innerHTML += `<h2 class="placeholder">${message}<h2>`;
    }

    render() {
        this._shadowRoot.innerHTML = "";
        // lakukan perulangan menggunakan forEach pada this._clubs, pada setiap iterasinya kita akan mendapatkan nilai individu club pada saat kita membuat element club-item. pada setiap element club-item akan dibuat menjadi element child dari club-list.
        this._clubs.forEach( club => {
            const clubItemElement = document.createElement("club-item");
            clubItemElement.club = club;
            this._shadowRoot.appendChild(clubItemElement);
        });
    }

}

customElements.define("club-list", ClubList);
import "./club-item.js";

class ClubList extends HTMLElement {
    set clubs(clubs) {
        this._clubs = clubs;
        this.render()
    }

     // perlu satu function lagi untuk menangani ketika hasil pencarian tidak ditemukan
     renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}<h2>`;
    }

    render() {
        this.innerHTML = "";
        // lakukan perulangan menggunakan forEach pada this._clubs, pada setiap iterasinya kita akan mendapatkan nilai individu club pada saat kita membuat element club-item. pada setiap element club-item akan dibuat menjadi element child dari club-list.
        this._clubs.forEach( club => {
            const clubItemElement = document.createElement("club-item");
            clubItemElement.club = club;
            this.appendChild(clubItemElement);
        });
    }

}

customElements.define("club-list", ClubList);
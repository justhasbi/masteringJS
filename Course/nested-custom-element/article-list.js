// mengimport nilai dari article item
import "./article-item.js";

class ArticleList extends HTMLElement {
    set articles(articles) {
        this._articles = articles;
        this.render();
    }

    /*
     Pada article-list.js terdapat fungsi setter articles yang berfungsi untuk menyimpan nilai articles pada properti this._articles. 
     Kemudian properti tersebut digunakan pada fungsi render() untuk ditampilkan satu persatu melalui <article-item>.
     */

    render() {
        // looping nilai yang diberikan dari state article
        this._articles.forEach(article => {
            // membuat article item pada DOM
            const articleItemElement = document.createElement("article-item");
            // memanggil function setter article() pada article-item
            // menambahkan nilai array kepada articleItemElement, kemudian ditambahkan pada DOM
            articleItemElement.article = article;
            this.appendChild(articleItemElement);
        });
    }
}

customElements.define("article-list", ArticleList);
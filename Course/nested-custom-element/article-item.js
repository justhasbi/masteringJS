
class ArticleItem extends HTMLElement {
    // mmembuat setter untuk item article
    set article(article) {
        // membuat variable article menjadi private dan mengisinya dengan parameter
        this._article = article;
        this.render();
    }

    render() {
        // menuliskan kode html kedalam DOM
        this.innerHTML = `
            <img class="featured-image" src="${this._article.featuredImage}">
            <div class="article-info">
                <h2><a href="${this._article.id}">${this._article.title}</a></h2>
                <p>${this._article.description}</p>
                </div>
        `;
    }
}

customElements.define("article-item", ArticleItem);
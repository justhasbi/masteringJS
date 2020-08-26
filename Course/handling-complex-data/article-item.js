// membuat custom element

class ArticleItem extends HTMLElement {
// buat setter untuk menetapkan content article
    set articleSet(article) {
        // membuat variable article menjadi private, jadi hanya bisa diakses melalui setter
        this._article = article;
        this.render()
    }

    render() {
        // render DOM pada HTML
        this.innerHTML = `
            <img class="featured-image" src="${this._article.featuredImage}">
            <div class="article-info">
                <h2><a href="${this._article.id}">${this._article.title}</a></h2>
                <p>${this._article.description}</p>
            </div>
        `;
    }
}
// mendefinisikan custom element
customElements.define("article-item", ArticleItem);
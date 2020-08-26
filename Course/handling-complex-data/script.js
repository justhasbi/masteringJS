import "./article-item.js";
import article from "./article.js";

// mengambil selector dari div.container
const containerElement = document.querySelector(".container");
// membuat element article
const articleItemElement = document.createElement("article-item");
// .article disini merupakan setter dari class ArticleItem
// kemudian mengisikan datanya dengan objek article pada article.js 
articleItemElement.articleSet = article;

// menerapkan createElement pada child dari .container
containerElement.appendChild(articleItemElement);
import "../component/club-list.js"
import "../component/search-bar.js"
import DataSource from "../data/data-source.js";

const main =() => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");
    
    // kita tidak membutuhkan deklarasi variabel buttonSearchElement karena sekarang kita dapat mengakses button pada komponen pencarian melalui searchElement. Jadi silakan hapus deklarasi variabel berikut:

    // const buttonSearchElement = document.querySelector("#searchButtonElement");

    const onButtonSearchClicked = () => {
    // const onButtonSearchClicked = async () => {
        
        // native js script
        // const dataSource = new DataSource(renderResult, fallbackResult);
        // dataSource.searchClub(searchElement.value);

        // promise
        DataSource.searchClub(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);

        // async/await
        
        // try{
        //     const result = await DataSource.searchClub(searchElement.vallue);
        //     renderResult(result);
        // } catch(message) {
        //     fallbackResult(message);
        // }
    };

    const renderResult = (results) =>{
    //     clubListElement.innerHTML = "";
    //     results.forEach((club) => {

    //         const {name, fanArt, description} = club;

    //         const clubElement = document.createElement("div");
    //         clubElement.setAttribute("class", "club");

    //         clubElement.innerHTML = `
    //             <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
    //             <div class="club-info">
    //                 <h2> ${name} </h2>
    //                 <p> ${description}</p>
    //             </div>`;
    //         clubListElement.appendChild(clubElement);
    //     })
    clubListElement.clubs = results;
    };


    const fallbackResult = (message) => {
        // clubListElement.innerHTML = "";
        // clubListElement.innerHTML += `<h2 class="placeholder"> ${message} </h2>`

        clubListElement.renderError(message);
    };

    /*  
        ketika event dijalankan maka akan memanggil method onButtonSearchClicked yang berisi respon dari promise
    */
    searchElement.clickEvent = onButtonSearchClicked;
    // karena searchElement merupakan custom element maka ketika terkonek kita dapat mengakses function lifecycle yang telah dibuat
};

export default main;
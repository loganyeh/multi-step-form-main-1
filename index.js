

const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
let onPage = 1;
const firstPageNumber = 1;
const lastPageNumber = 4;
const pagesArray = ["page1", "page2", "page3", "page4"];
console.log(`You are on Page 1`);

nextButton.addEventListener("click", () => {
    if(onPage < lastPageNumber){
        onPage++;
        console.log(`Page: ${onPage}. Next button clicked.`);
        nextPage(onPage, pagesArray);
    }
    else {
        console.log(`You are on the last page. ${onPage}`);
        nextPage(onPage, pagesArray);
    }

});

backButton.addEventListener("click", () => {
    if(onPage > firstPageNumber){
        onPage--;
        console.log(`Page: ${onPage}. back button clicked`);
    }
    else{
        console.log(`You are on the first page. ${onPage}`);
    }

});

// NEXT PAGE FUNCTION
function nextPage(pageNumberVariable, pagesArray){
    console.log(`THIS IS THE nextPAGE() function`);
    
    const pageNumberIndex = pageNumberVariable - 1;
    const lastPage = pagesArray[pageNumberVariable];
    const currentPage = pagesArray[pageNumberIndex];

    const el = document.getElementById(`${currentPage}`);
    console.log(pageNumberVariable);

}

// PREVIOUS PAGE FUNCTION
// function previousPage(pageNumberVariable, pagesArray){
//     console.log("THIS IS THE previousPAGE() function");

// }   
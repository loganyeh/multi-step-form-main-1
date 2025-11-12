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
        nextPage(pagesArray, onPage);
    }
    else {
        console.log(`You are on the last page. ${onPage}`);
        nextPage(pagesArray, onPage);
    }

});

backButton.addEventListener("click", () => {
    if(onPage > firstPageNumber){
        onPage--;
        console.log(`Page: ${onPage}. back button clicked`);
        previousPage(pagesArray, onPage);
    }
    else{
        console.log(`You are on the first page. ${onPage}`);
        previousPage(pagesArray, onPage);
    }

});

// NEXT PAGE FUNCTION
function nextPage(pagesArray, onPage){
    console.log(`THIS IS THE nextPAGE() function`);
    // BEFORE PRESSING NEXT PAGE
    const previousPage = pagesArray[onPage - 2];
    // AFTER PRESSING NEXT PAGE
    const currentPage = pagesArray[onPage - 1];

    const previousElement = document.getElementById(`${previousPage}`);
    const currentElement = document.getElementById(`${currentPage}`);

    previousElement.classList.add("hidden");
    previousElement.classList.remove("block");

    currentElement.classList.remove("hidden");
    currentElement.classList.add("block");


}

// PREVIOUS PAGE FUNCTION
function previousPage(pagesArray, onPage){
    console.log("THIS IS THE previousPAGE() function");
    const previousPage = pagesArray[onPage];
    const currentPage = pagesArray[onPage - 1];

    const previousElement = document.getElementById(`${previousPage}`);
    const currentElement = document.getElementById(`${currentPage}`);

    previousElement.classList.add("hidden");
    previousElement.classList.remove("block");

    currentElement.classList.add("block");
    currentElement.classList.remove("hidden");

}   

// MOVE STEPS CONTAINER STUFF TO JS
// MAKE ITERABLE


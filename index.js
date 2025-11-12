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

// MAKE OBJECTS or ARRAYS OF THE STEPS INFO SO I CAN JUST PULL THOSE INFOS
const stepsContainer = document.getElementById("steps-container");

// STEP 1 CONTAINER
const step1Container = document.createElement("div");
stepsContainer.appendChild(step1Container);
step1Container.id = "step-number-1";
step1Container.className = "row-start-2 row-end-4 col-start-2 col-end-12 flex relative";
// STEP 1 CIRCLE BORDER \ LEFT SIDE
const stepNumber1 = document.createElement("div");
step1Container.appendChild(stepNumber1);
stepNumber1.id = "step-number-1";
stepNumber1.className = "h-full w-1/3 flex justify-center items-center text-3xl";
const span1 = document.createElement("span");
stepNumber1.appendChild(span1);
span1.id = "span-1";
span1.className = "h-18 w-18 flex justify-center items-center rounded-full border-2 border-white font-medium text-white";
span1.textContent = "1";

// STEP 1 TEXTS \ RIGHT SIDE
const step1Number = document.createElement("div");
step1Container.appendChild(step1Number);
step1Number.id = "step-1-number";
step1Number.className = "h-full w-2/3";
// TOP TEXT 1
const step1Title = document.createElement("div");
step1Number.appendChild(step1Title);
step1Title.id = "step-1-title";
step1Title.className = "h-1/2 w-full text-xl font-thin text-white";
step1Title.textContent = "Step 1";
// BOTTOM TEXT 1
const step1Text = document.createElement("div");
step1Number.appendChild(step1Text);
step1Text.id = "step-1-text";
step1Text.className = "h-1/2 w-full text-2xl font-semibold text-white";
step1Text.textContent = "YOUR INFO";

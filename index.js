
const nextButton = document.getElementById(`next-button`);
const backButton = document.getElementById(`back-button`);
let onPage = 1;
const firstPageNumber = 1;
const lastPageNumber = 4;
const pagesArray = [`page1`, `page2`, `page3`, `page4`];
console.log(`You are on Page 1`);

nextButton.addEventListener(`click`, () => {
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

backButton.addEventListener(`click`, () => {
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

    previousElement.classList.add(`hidden`);
    previousElement.classList.remove(`block`);

    currentElement.classList.remove(`hidden`);
    currentElement.classList.add(`block`);


}

// PREVIOUS PAGE FUNCTION
function previousPage(pagesArray, onPage){
    console.log(`THIS IS THE previousPAGE() function`);
    const previousPage = pagesArray[onPage];
    const currentPage = pagesArray[onPage - 1];

    const previousElement = document.getElementById(`${previousPage}`);
    const currentElement = document.getElementById(`${currentPage}`);

    previousElement.classList.add(`hidden`);
    previousElement.classList.remove(`block`);

    currentElement.classList.add(`block`);
    currentElement.classList.remove(`hidden`);

}   

// MAKE OBJECTS or ARRAYS OF THE STEPS INFO SO I CAN JUST PULL THOSE INFOS
const stepNumbersArray = [1, 2, 3, 4];
const stepTextForSubTitleArray = [`YOUR INFO`, `SELECT PLAN`, `ADD-ONS`, `SUMMARY`];
let stepCounter = 0;
// SIDEBAR CONTAINER
const sidebarContainer = document.getElementById(`sidebar-container`);
const stepLocations = [
    {name: `step-1`, rowStart: 2, rowEnd: 4}, 
    {name: `step-2`, rowStart: 5, rowEnd: 7}, 
    {name: `step-3`, rowStart: 8, rowEnd: 10}, 
    {name: `step-4`, rowStart: 11, rowEnd: 13}, 
]

// function createStep(){
//     // STEP 1 CONTAINER
//     const step1Container = document.createElement(`div`);
//     sidebarContainer.appendChild(step1Container);
//     step1Container.id = `step-number-${stepNumbersArray[0]}`;
//     step1Container.className = `row-start-2 row-end-4 col-start-2 col-end-12 flex relative`;
//     // CIRCLE
//     const step1Circle = document.createElement(`div`);
//     step1Container.appendChild(step1Circle);
//     step1Circle.id = `step-number-1`;
//     step1Circle.className = `h-full w-1/3 flex justify-center items-center text-3xl`;
//     const step1CircleNumber = document.createElement(`span`);
//     step1Circle.appendChild(step1CircleNumber);
//     step1CircleNumber.id = `step-1-circle`;
//     step1CircleNumber.className = `h-18 w-18 flex justify-center items-center rounded-full border-2 border-white font-medium text-white`;
//     step1CircleNumber.textContent = `${stepNumbersArray[stepCounter]}`;

//     // STEP TEXTS
//     const step1TextContainer = document.createElement(`div`);
//     step1Container.appendChild(step1TextContainer);
//     step1TextContainer.id = `step-1-text-container`;
//     step1TextContainer.className = `h-full w-2/3`;
//     // title
//     const step1Title = document.createElement(`div`);
//     step1TextContainer.appendChild(step1Title);
//     step1Title.id = `step-1-title`;
//     step1Title.className = `h-1/2 w-full text-xl font-thin text-white`;
//     step1Title.textContent = `Step 1`;
//     // subtitle
//     const step1SubTitle = document.createElement(`div`);
//     step1TextContainer.appendChild(step1SubTitle);
//     step1SubTitle.id = `step-1-subtitle`;
//     step1SubTitle.className = `h-1/2 w-full text-2xl font-semibold text-white`;
//     step1SubTitle.textContent = `YOUR INFO`;

//     console.log(stepCounter);
//     stepCounter++;
// }
function createStep(stepNumberVariable, stepLocations){
    // STEP 1 CONTAINER
    const step1Container = document.createElement(`div`);
    sidebarContainer.appendChild(step1Container);
    step1Container.id = `step-number-${stepNumbersArray[0]}`;
    step1Container.className = `row-start-${stepLocations[stepNumberVariable].rowStart} row-end-${stepLocations[stepNumberVariable].rowEnd} col-start-2 col-end-12 flex relative`;
    // CIRCLE
    const step1Circle = document.createElement(`div`);
    step1Container.appendChild(step1Circle);
    step1Circle.id = `step-number-1`;
    step1Circle.className = `h-full w-1/3 flex justify-center items-center text-3xl`;
    const step1CircleNumber = document.createElement(`span`);
    step1Circle.appendChild(step1CircleNumber);
    step1CircleNumber.id = `step-1-circle`;
    step1CircleNumber.className = `h-18 w-18 flex justify-center items-center rounded-full border-2 border-white font-medium text-white`;
    step1CircleNumber.textContent = `${stepNumbersArray[stepCounter]}`;

    // STEP TEXTS
    const step1TextContainer = document.createElement(`div`);
    step1Container.appendChild(step1TextContainer);
    step1TextContainer.id = `step-1-text-container`;
    step1TextContainer.className = `h-full w-2/3`;
    // title
    const step1Title = document.createElement(`div`);
    step1TextContainer.appendChild(step1Title);
    step1Title.id = `step-1-title`;
    step1Title.className = `h-1/2 w-full text-xl font-thin text-white`;
    step1Title.textContent = `Step 1`;
    // subtitle
    const step1SubTitle = document.createElement(`div`);
    step1TextContainer.appendChild(step1SubTitle);
    step1SubTitle.id = `step-1-subtitle`;
    step1SubTitle.className = `h-1/2 w-full text-2xl font-semibold text-white`;
    step1SubTitle.textContent = `YOUR INFO`;

    console.log(stepCounter);
    stepCounter++;
}

for(let i = 0; i < 4; i++){
    createStep(stepCounter, stepLocations);
};



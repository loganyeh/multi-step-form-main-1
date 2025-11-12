
const nextButton = document.getElementById(`next-button`);
const backButton = document.getElementById(`back-button`);
let onPage = 1;
const firstPageNumber = 1;
const lastPageNumber = 4;
const pagesArray = [`page1`, `page2`, `page3`, `page4`];
console.log(`You are on Page 1`);

let nextButtonCounter = 0;
nextButton.addEventListener(`click`, () => {
    if(onPage < lastPageNumber){
        onPage++;
        nextButtonCounter++;
        console.log(`Page: ${onPage}. Next button clicked.`);
        nextPage(pagesArray, onPage, stepsArray, nextButtonCounter);
    }
    else {
        console.log(`You are on the last page. ${onPage}`);
        nextPage(pagesArray, onPage, stepsArray, nextButtonCounter);
    }
});

backButton.addEventListener(`click`, () => {
    if(onPage > firstPageNumber){
        onPage--;
        nextButtonCounter--;
        console.log(`Page: ${onPage}. back button clicked`);
        previousPage(pagesArray, onPage, stepsArray, nextButtonCounter);
    }
    else{
        console.log(`You are on the first page. ${onPage}`);
        previousPage(pagesArray, onPage, stepsArray, nextButtonCounter);
    }
});

// NEXT PAGE FUNCTION
function nextPage(pagesArray, onPage, stepsArray, nextButtonCounter){
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

    const previousPageContainer = document.getElementById(`${stepsArray[nextButtonCounter - 1]}`);
    const currentPageContainer = document.getElementById(`${stepsArray[nextButtonCounter]}`);

    currentPageContainer.classList.add(`bg-black`, `text-white`);
    previousPageContainer.classList.remove(`bg-black`, `text-white`);

}

// PREVIOUS PAGE FUNCTION
function previousPage(pagesArray, onPage, stepsArray, nextButtonCounter){
    console.log(`THIS IS THE previousPAGE() function`);
    const previousPage = pagesArray[onPage];
    const currentPage = pagesArray[onPage - 1];

    const previousElement = document.getElementById(`${previousPage}`);
    const currentElement = document.getElementById(`${currentPage}`);

    previousElement.classList.add(`hidden`);
    previousElement.classList.remove(`block`);

    currentElement.classList.add(`block`);
    currentElement.classList.remove(`hidden`);

    const currentPageContainer = document.getElementById(`${stepsArray[nextButtonCounter]}`);
    const previousPageContainer = document.getElementById(`${stepsArray[nextButtonCounter + 1]}`);

    currentPageContainer.classList.add(`bg-black`, 'text-white');
    previousPageContainer.classList.remove(`bg-black`, 'text-white');


}   

let stepCounter = 0;
const stepNumberArray = [1, 2, 3, 4];
const stepTextForSubTitleArray = [`YOUR INFO`, `SELECT PLAN`, `ADD-ONS`, `SUMMARY`];
const stepGridLocations = [
    {name: `step-1`, rowStart: 2, rowEnd: 4}, 
    {name: `step-2`, rowStart: 5, rowEnd: 7}, 
    {name: `step-3`, rowStart: 8, rowEnd: 10}, 
    {name: `step-4`, rowStart: 11, rowEnd: 13}, 
]

// SIDEBAR CONTAINER
const sidebarContainer = document.getElementById(`sidebar-container`);

function createStep(stepIndex, stepNumberOrder, stepSubtitleText, stepRowColCords){
    // STEP CONTAINER
    const stepContainer = document.createElement(`div`);
    sidebarContainer.appendChild(stepContainer);
    stepContainer.id = `step-container-${stepNumberOrder[stepIndex]}`;
    stepContainer.className = `row-start-${stepRowColCords[stepIndex].rowStart} row-end-${stepRowColCords[stepIndex].rowEnd} col-start-2 col-end-12 flex relative`;

    // CIRCLE
    const stepCircle = document.createElement(`div`);
    stepContainer.appendChild(stepCircle);
    stepCircle.id = `step-circle-${stepNumberOrder[stepIndex]}`;
    stepCircle.className = `h-full w-1/3 flex justify-center items-center text-3xl`;
    const stepCircleNumber = document.createElement(`span`);
    stepCircle.appendChild(stepCircleNumber);
    stepCircleNumber.id = `step-circle-number-${stepNumberOrder[stepIndex]}`;
    stepCircleNumber.className = `h-18 w-18 flex justify-center items-center rounded-full border-2 border-white font-medium text-white`;
    stepCircleNumber.textContent = `${stepNumberOrder[stepIndex]}`;

    // STEP TEXTS
    const stepTextContainer = document.createElement(`div`);
    stepContainer.appendChild(stepTextContainer);
    stepTextContainer.id = `step-text-container-${stepNumberOrder[stepIndex]}`;
    stepTextContainer.className = `h-full w-2/3`;
        // title
    const stepTitle = document.createElement(`div`);
    stepTextContainer.appendChild(stepTitle);
    stepTitle.id = `step-title-${stepNumberOrder[stepIndex]}`;
    stepTitle.className = `h-1/2 w-full text-xl font-thin text-white`;
    stepTitle.textContent = `Step ${stepNumberOrder[stepIndex]}`;
        // subtitle
    const stepSubtitle = document.createElement(`div`);
    stepTextContainer.appendChild(stepSubtitle);
    stepSubtitle.id = `step-subtitle-${stepNumberOrder[stepIndex]}`;
    stepSubtitle.className = `h-1/2 w-full text-2xl font-semibold text-white`;
    stepSubtitle.textContent = `${stepSubtitleText[stepIndex]}`;

    // console.log(stepIndex);
    stepCounter++;

    return stepContainer.id;
}

let stepsArray = [];
for(let i = 0; i < 4; i++){
    const step = createStep(stepCounter, stepNumberArray, stepTextForSubTitleArray, stepGridLocations);
    stepsArray.push(step);
};

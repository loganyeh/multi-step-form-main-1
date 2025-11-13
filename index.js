// DOM ELEMENTS & GLOBAL VARIABLES ----------------------------------
const nextButton = document.getElementById(`next-button`);
const backButton = document.getElementById(`back-button`);
let onPage = 1;
const firstPageNumber = 1;
const lastPageNumber = 4;
const pagesArray = [`page1`, `page2`, `page3`, `page4`];
console.log(`You are on Page 1`);

// LEFT AND RIGHT TOGGLE DOMS
const monthlyToggleCircle = document.getElementById("monthly-toggle-circle");
const yearlyToggleCircle = document.getElementById("yearly-toggle-circle");
const monthlyToggleText = document.getElementById(`monthly-toggle-text`);
const yearlyToggleText = document.getElementById(`yearly-toggle-text`);

// SUBSCRIPTION TIERS DOMS
const arcadeTier = document.getElementById(`arcade-tier`);
const advancedTier = document.getElementById(`advanced-tier`);
const proTier = document.getElementById(`pro-tier`);
const arcadePricing = document.getElementById(`arcade-pricing`);
const advancedPricing = document.getElementById(`advanced-pricing`);
const proPricing = document.getElementById(`pro-pricing`);
const arcadeYearFreeMonths = document.getElementById(`arcade-yearly-free-months`);
const advancedYearFreeMonths = document.getElementById(`advanced-yearly-free-months`);
const proYearFreeMonths = document.getElementById(`pro-yearly-free-months`);

    // PICK ADD-ONS DOMS
const onlineServiceContainer = document.getElementById(`online-service-container`);
const largeStorageContainer = document.getElementById(`large-storage-container`);
const customizableProfileContainer = document.getElementById(`customizable-profile-container`);
const onlineServiceCheckmarkEmoji = document.getElementById(`online-service-checkmark-emoji`);

// EVENT LISTENERS ---------------------------------------------------
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
    // TOGGLE EVENT LISTENERS
monthlyToggleCircle.addEventListener(`click`, () => {
    console.log(`clicked monthly toggle`);

    monthlyToggleCircle.classList.remove(`bg-white`, `cursor-pointer`);
    monthlyToggleCircle.classList.add(`bg-blue-900`);
    monthlyToggleText.classList.remove(`text-blue-900`);
    monthlyToggleText.classList.add(`text-gray-400`);

    yearlyToggleCircle.classList.add(`bg-white`, `cursor-pointer`);
    yearlyToggleCircle.classList.remove(`bg-blue-900`);
    yearlyToggleText.classList.remove(`text-gray-400`);
    yearlyToggleText.classList.add(`text-blue-900`);

    arcadePricing.textContent = `$90/year`;
    advancedPricing.textContent = `$120/year`;
    proPricing.textContent = `$150/year`;

    arcadeYearFreeMonths.classList.remove(`hidden`);
    arcadeYearFreeMonths.classList.add(`block`);
    advancedYearFreeMonths.classList.remove(`hidden`);
    advancedYearFreeMonths.classList.add(`block`);
    proYearFreeMonths.classList.remove(`hidden`);
    proYearFreeMonths.classList.add(`block`);
})
yearlyToggleCircle.addEventListener(`click`, () => {
    console.log(`clicked yearly toggle`);

    yearlyToggleCircle.classList.remove(`bg-white`, `cursor-pointer`);
    yearlyToggleCircle.classList.add(`bg-blue-900`);
    yearlyToggleText.classList.remove(`text-white`);
    yearlyToggleText.classList.add(`text-gray-400`);

    monthlyToggleCircle.classList.add(`bg-white`, `cursor-pointer`);
    monthlyToggleCircle.classList.remove(`bg-blue-900`);
    monthlyToggleText.classList.add(`text-blue-900`);
    monthlyToggleText.classList.remove(`text-gray-400`);

    arcadePricing.textContent = `$9/mo`;
    advancedPricing.textContent = `$12/mo`;
    proPricing.textContent = `$15/mo`;

    arcadeYearFreeMonths.classList.add(`hidden`);
    arcadeYearFreeMonths.classList.remove(`block`);
    advancedYearFreeMonths.classList.add(`hidden`);
    advancedYearFreeMonths.classList.remove(`block`);
    proYearFreeMonths.classList.add(`hidden`);
    proYearFreeMonths.classList.remove(`block`);
})

    // SUBSCRIPTION TIERS EVENT LISTENERS
arcadeTier.addEventListener(`click`, () => {
    console.log(`Clicked arcade tier`);

    arcadeTier.classList.remove(`bg-white`, `border-gray-400`);
    arcadeTier.classList.add(`bg-gray-50`, `border-purple-500`);

    advancedTier.classList.remove(`bg-gray-50`, `border-purple-500`);
    advancedTier.classList.add(`bg-white`, `border-gray-400`);

    proTier.classList.remove(`bg-gray-50`, `border-purple-500`);
    proTier.classList.add(`bg-white`, `border-gray-400`);
});
advancedTier.addEventListener(`click`, () => {
    console.log(`Clicked advanced tier`);

    arcadeTier.classList.remove(`bg-gray-50`, `border-purple-500`);
    arcadeTier.classList.add(`bg-white`, `border-gray-400`);
    
    advancedTier.classList.remove(`bg-white`, `border-gray-400`);
    advancedTier.classList.add(`bg-gray-50`, `border-purple-500`);

    proTier.classList.remove(`bg-gray-50`, `border-purple-500`);
    proTier.classList.add(`bg-white`, `border-gray-400`);
});
proTier.addEventListener(`click`, () => {
    console.log(`Clicked pro tier`);

    arcadeTier.classList.remove(`bg-gray-50`, `border-purple-500`);
    arcadeTier.classList.add(`bg-white`, `border-gray-400`);
    
    advancedTier.classList.remove(`bg-gray-50`, `border-purple-500`);
    advancedTier.classList.add(`bg-white`, `border-gray-400`);
    
    proTier.classList.remove(`bg-white`, `border-gray-400`);
    proTier.classList.add(`bg-gray-50`, `border-purple-500`);
});

    // PICK ADD-ONS EVENT LISTENERS
let isOnlineService = false; 
onlineServiceContainer.addEventListener(`click`, () => {
    console.log(`Click online service container`);

    isOnlineService = !isOnlineService;
    if(isOnlineService){
        console.log(`checked`);

        onlineServiceContainer.classList.add(`bg-gray-50`, `border-purple-500`);
        onlineServiceContainer.classList.remove(`bg-white`, `border-gray-400`);

        onlineServiceCheckmarkEmoji.classList.add(`block`);
        onlineServiceCheckmarkEmoji.classList.remove(`hidden`);
    }
    else{
        console.log(`unchecked`);

        onlineServiceContainer.classList.remove(`bg-gray-50`, `border-purple-500`);
        onlineServiceContainer.classList.add(`bg-white`, `border-gray-400`);

        onlineServiceCheckmarkEmoji.classList.add(`hidden`);
        onlineServiceCheckmarkEmoji.classList.remove(`block`);
    }

})


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

    currentPageContainer.classList.add(`bg-blue-200`);
    previousPageContainer.classList.remove(`bg-blue-200`);


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

    currentPageContainer.classList.add(`bg-blue-200`);
    previousPageContainer.classList.remove(`bg-blue-200`);

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
    stepCircleNumber.className = `h-18 w-18 flex justify-center items-center rounded-full border-2 border-white font-medium`;
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

    return stepCircleNumber.id;
}

let stepsArray = [];
for(let i = 0; i < 4; i++){
    const step = createStep(stepCounter, stepNumberArray, stepTextForSubTitleArray, stepGridLocations);
    stepsArray.push(step);
};

// DEFAULT PAGE @ STARTUP
stepsArray.forEach((stepID, index) => {
    const stepElement = document.getElementById(`${stepID}`);
    if(index === 0){
        stepElement.classList.add(`bg-blue-200`, `text-black`);
    }
    else{
        stepElement.classList.add(`text-white`);
    }
})
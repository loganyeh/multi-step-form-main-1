// DOM ELEMENTS & GLOBAL VARIABLES ----------------------------------
const nextButton = document.getElementById(`next-button`);
const backButton = document.getElementById(`back-button`);
let onPage = 1;
const firstPageNumber = 1;
const lastPageNumber = 5;
const pagesArray = [`page1`, `page2`, `page3`, `page4`, `page5`];
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
const largerStorageContainer = document.getElementById(`larger-storage-container`);
const customizableProfileContainer = document.getElementById(`customizable-profile-container`);
const onlineServiceCheckmarkEmoji = document.getElementById(`online-service-checkmark-emoji`);
const largerStorageCheckmarkEmoji = document.getElementById(`larger-storage-checkmark-emoji`);
const customizableProfileCheckmarkEmoji = document.getElementById(`customizable-profile-checkmark-emoji`);
const onlineServiceMonthlyPricing = document.getElementById(`online-service-monthly-pricing`);
const onlineServiceYearlyPricing = document.getElementById(`online-service-yearly-pricing`);
const largerStorageMonthlyPricing = document.getElementById(`larger-storage-monthly-pricing`);
const largerStorageYearlyPricing = document.getElementById(`larger-storage-yearly-pricing`);
const customizableProfileMonthlyPricing = document.getElementById(`customizable-profile-monthly-pricing`);
const customizableProfileYearlyPricing = document.getElementById(`customizable-profile-yearly-pricing`);

    // SUMMARY DOMS
const monthlyYearlyToggleTierText = document.getElementById(`monthly-yearly-toggle-tier-text`);
const monthlyYearlyToggleText = document.getElementById(`monthly-yearly-toggle-text`);
const tiersMonthlyYearlyPriceSpan = document.getElementById(`tiers-monthly-yearly-price-span`);
    // add on summary spans doms
const onlineServiceSummaryContainer = document.getElementById(`online-service-summary-container`);
const largerStorageSummaryContainer = document.getElementById(`larger-storage-summary-container`);
const customizableProfileSummaryContainer = document.getElementById(`customizable-profile-summary-container`);
const onlineServiceSpanPrice = document.getElementById(`online-service-span-price`);
const largerStorageSpanPrice = document.getElementById(`larger-storage-span-price`);
const customizableProfileSpanPrice = document.getElementById(`customizable-profile-span-price`);
    // total doms
const totalTextSpan = document.getElementById(`total-text-span`);
const totalPerXSpan = document.getElementById(`total-per-x-span`);
const totalBalanceSpan = document.getElementById(`total-balance-span`);
const totalBalanceUnitSpan = document.getElementById(`total-balance-unit-span`);
let totalBalanceRunningTotal = 9;

// EVENT LISTENERS ---------------------------------------------------
let nextButtonCounter = 0;
nextButton.addEventListener(`click`, () => {
    if(onPage < lastPageNumber){
        backButton.classList.remove(`hidden`);
        backButton.classList.add(`block`);
        onPage++;
        if(onPage == 4){
            nextButton.innerText = `Confirm`;
            nextButton.classList.remove(`bg-blue-900`);
            nextButton.classList.add(`bg-blue-700`);
        }
        if(onPage == 5){
            nextButton.classList.remove(`block`);
            nextButton.classList.add(`hidden`);
            backButton.classList.remove(`block`);
            backButton.classList.add(`hidden`);
        }
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
        if(onPage == 1){
            backButton.classList.remove(`block`);
            backButton.classList.add(`hidden`);
        }
        if(onPage < 4){
            nextButton.innerText = `Next Step`;
            nextButton.classList.remove(`bg-blue-700`);
            nextButton.classList.add(`bg-blue-900`);
        }
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
let isMonthlyToggleCircle = true;
let isYearlyToggleCircle = false;
monthlyToggleCircle.addEventListener(`click`, () => {
    console.log(`clicked monthly toggle`);
    isYearlyToggleCircle = true; 
    isMonthlyToggleCircle = false;
    console.log(`isMonthlyToggleCircle ${isMonthlyToggleCircle}`);
    console.log(`isYearlyToggleCircle ${isYearlyToggleCircle}`);

    totalBalanceUnitSpan.innerText = `yr`;
    
    onlineServiceSpanPrice.innerText = `+$10/yr`;
    largerStorageSpanPrice.innerText = `+$20/yr`;
    customizableProfileSpanPrice.innerText = `+$20/yr`;

    if(isArcadeTier){
        tiersMonthlyYearlyPriceSpan.innerText = `$90/yr`;
        totalBalanceSpan.innerText = `90`;
        totalBalanceRunningTotal = 90;
        if(isOnlineService){
            totalBalanceRunningTotal += 10;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isLargerStorage){
            totalBalanceRunningTotal += 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isCustomizableProfile){
            totalBalanceRunningTotal += 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }
    if(isAdvancedTier){
        tiersMonthlyYearlyPriceSpan.innerText = `$120/yr`;
        totalBalanceSpan.innerText = `120`;
        totalBalanceRunningTotal = 120;
        if(isOnlineService){
            totalBalanceRunningTotal += 10;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isLargerStorage){
            totalBalanceRunningTotal += 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isCustomizableProfile){
            totalBalanceRunningTotal += 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }
    if(isProTier){
        tiersMonthlyYearlyPriceSpan.innerText = `$150/yr`;
        totalBalanceSpan.innerText = `150`;
        totalBalanceRunningTotal = 150;
        if(isOnlineService){
            totalBalanceRunningTotal += 10;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isLargerStorage){
            totalBalanceRunningTotal += 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isCustomizableProfile){
            totalBalanceRunningTotal += 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }

    monthlyYearlyToggleText.innerText = `(Yearly)`;

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

    onlineServiceMonthlyPricing.classList.add(`hidden`);
    onlineServiceMonthlyPricing.classList.remove(`block`);
    onlineServiceYearlyPricing.classList.add(`block`);
    onlineServiceYearlyPricing.classList.remove(`hidden`);

    largerStorageMonthlyPricing.classList.add(`hidden`);
    largerStorageMonthlyPricing.classList.remove(`block`);
    largerStorageYearlyPricing.classList.add(`block`);
    largerStorageYearlyPricing.classList.remove(`hidden`);

    customizableProfileMonthlyPricing.classList.add(`hidden`);
    customizableProfileMonthlyPricing.classList.remove(`block`);
    customizableProfileYearlyPricing.classList.add(`block`);
    customizableProfileYearlyPricing.classList.remove(`hidden`);

})
yearlyToggleCircle.addEventListener(`click`, () => {
    console.log(`clicked yearly toggle`);
    isYearlyToggleCircle = false; 
    isMonthlyToggleCircle = true;
    console.log(`isMonthlyToggleCircle ${isMonthlyToggleCircle}`);
    console.log(`isYearlyToggleCircle ${isYearlyToggleCircle}`);

    totalBalanceUnitSpan.innerText = `mo`;

    // onlineServiceSpanPrice
    // largerStorageSpanPrice
    // customizableProfileSpanPrice
    onlineServiceSpanPrice.innerText = `+$1/mo`;
    largerStorageSpanPrice.innerText = `+$2/mo`;
    customizableProfileSpanPrice.innerText = `+$2/mo`;

    if(isArcadeTier){
        tiersMonthlyYearlyPriceSpan.innerText = `$9/mo`;
        totalBalanceSpan.innerText = `9`;
        totalBalanceRunningTotal = 9;
        if(isOnlineService){
            totalBalanceRunningTotal += 1;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isLargerStorage){
            totalBalanceRunningTotal += 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isCustomizableProfile){
            totalBalanceRunningTotal += 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }
    if(isAdvancedTier){
        tiersMonthlyYearlyPriceSpan.innerText = `$12/mo`;
        totalBalanceSpan.innerText = `12`;
        totalBalanceRunningTotal = 12;
        if(isOnlineService){
            totalBalanceRunningTotal += 1;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isLargerStorage){
            totalBalanceRunningTotal += 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isCustomizableProfile){
            totalBalanceRunningTotal += 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }
    if(isProTier){
        tiersMonthlyYearlyPriceSpan.innerText = `$15/mo`;
        totalBalanceSpan.innerText = `15`;
        totalBalanceRunningTotal = 15;
        if(isOnlineService){
            totalBalanceRunningTotal += 1;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isLargerStorage){
            totalBalanceRunningTotal += 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isCustomizableProfile){
            totalBalanceRunningTotal += 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }

    monthlyYearlyToggleText.innerText = `(Monthly)`;

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

    onlineServiceMonthlyPricing.classList.add(`block`);
    onlineServiceMonthlyPricing.classList.remove(`hidden`);
    onlineServiceYearlyPricing.classList.add(`hidden`);
    onlineServiceYearlyPricing.classList.remove(`block`);

    largerStorageMonthlyPricing.classList.add(`block`);
    largerStorageMonthlyPricing.classList.remove(`hidden`);
    largerStorageYearlyPricing.classList.add(`hidden`);
    largerStorageYearlyPricing.classList.remove(`block`);

    customizableProfileMonthlyPricing.classList.add(`block`);
    customizableProfileMonthlyPricing.classList.remove(`hidden`);
    customizableProfileYearlyPricing.classList.add(`hidden`);
    customizableProfileYearlyPricing.classList.remove(`block`);
})

    // SUBSCRIPTION TIERS EVENT LISTENERS
let isArcadeTier = true;
let isAdvancedTier = false;
let isProTier = false;
let isTierClicked = false;

const arcadeTierPrice = 9;
arcadeTier.addEventListener(`click`, () => {
    console.log(`Clicked arcade tier`);

    monthlyYearlyToggleTierText.innerText = `Arcade`;
    tiersMonthlyYearlyPriceSpan.innerText = `$9/mo`;

    isTierClicked = true;
    if(isTierClicked){
        isArcadeTier = true;
        isAdvancedTier = false;
        isProTier = false;
        isTierClicked = false;
    }
    else{
        isArcadeTier = false;
    }

    if(isMonthlyToggleCircle){
        tiersMonthlyYearlyPriceSpan.innerText = `$9/mo`;
        totalBalanceSpan.innerText = `9`;
        totalBalanceRunningTotal = 9;
        // EITHER WHEN REPICKING TIERS RESET THE ADD-ONS
        // I JUST LEFT THEM AS PREVIOUS SELECTED OR NOT

        // LEFT OFF HERE 
        // SELECT A TIER AND ALL ADD ONS AND THEN GO BACK AND CHANGE TIER AND LEAVE ADD ONS
        // THE PRICE DOES NOT UPDATE TO WITH TIER AND ALL ADD ONS
        if(isOnlineService){
            totalBalanceRunningTotal += 1;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isLargerStorage){
            totalBalanceRunningTotal += 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isCustomizableProfile){
            totalBalanceRunningTotal += 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }
    if(isYearlyToggleCircle){
        tiersMonthlyYearlyPriceSpan.innerText = `$90/yr`;
        totalBalanceSpan.innerText = `90`;
        totalBalanceRunningTotal = 90;
        if(isOnlineService){
            totalBalanceRunningTotal += 10;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isLargerStorage){
            totalBalanceRunningTotal += 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isCustomizableProfile){
            totalBalanceRunningTotal += 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }

    arcadeTier.classList.remove(`bg-white`, `border-gray-400`);
    arcadeTier.classList.add(`bg-gray-50`, `border-purple-500`);

    advancedTier.classList.remove(`bg-gray-50`, `border-purple-500`);
    advancedTier.classList.add(`bg-white`, `border-gray-400`);

    proTier.classList.remove(`bg-gray-50`, `border-purple-500`);
    proTier.classList.add(`bg-white`, `border-gray-400`);

    console.log(`isArcadeTier: ${isArcadeTier}`);
    console.log(`isAdvancedTier: ${isAdvancedTier}`);
    console.log(`isProTier: ${isProTier}`);

});
advancedTier.addEventListener(`click`, () => {
    console.log(`Clicked advanced tier`);

    monthlyYearlyToggleTierText.innerText = `Advanced`;
    tiersMonthlyYearlyPriceSpan.innerText = `$12/mo`;
    // tiersMonthlyYearlyPriceSpan.innerText = `$120/yr`;

    isTierClicked = true;
    if(isTierClicked){
        isAdvancedTier = true;
        isArcadeTier = false;
        isProTier = false;
        isTierClicked = false;
    }
    else{
        isAdvancedTier = false;
    }

    if(isMonthlyToggleCircle){
        tiersMonthlyYearlyPriceSpan.innerText = `$12/mo`;
        totalBalanceSpan.innerText = `12`;
        totalBalanceRunningTotal = 12;

        if(isOnlineService){
            totalBalanceRunningTotal += 1;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isLargerStorage){
            totalBalanceRunningTotal += 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isCustomizableProfile){
            totalBalanceRunningTotal += 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }
    if(isYearlyToggleCircle){
        tiersMonthlyYearlyPriceSpan.innerText = `$120/yr`;
        totalBalanceSpan.innerText = `120`;
        totalBalanceRunningTotal = 120;

        if(isOnlineService){
            totalBalanceRunningTotal += 10;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isLargerStorage){
            totalBalanceRunningTotal += 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isCustomizableProfile){
            totalBalanceRunningTotal += 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }

    arcadeTier.classList.remove(`bg-gray-50`, `border-purple-500`);
    arcadeTier.classList.add(`bg-white`, `border-gray-400`);
    
    advancedTier.classList.remove(`bg-white`, `border-gray-400`);
    advancedTier.classList.add(`bg-gray-50`, `border-purple-500`);

    proTier.classList.remove(`bg-gray-50`, `border-purple-500`);
    proTier.classList.add(`bg-white`, `border-gray-400`);

    console.log(`isArcadeTier: ${isArcadeTier}`);
    console.log(`isAdvancedTier: ${isAdvancedTier}`);
    console.log(`isProTier: ${isProTier}`);
    
});
proTier.addEventListener(`click`, () => {
    console.log(`Clicked pro tier`);

    monthlyYearlyToggleTierText.innerText = `Pro`;
    tiersMonthlyYearlyPriceSpan.innerText = `$15/mo`;
    // tiersMonthlyYearlyPriceSpan.innerText = `$120/yr`;

    isTierClicked = true;
    if(isTierClicked){
        isProTier = true;
        isArcadeTier = false;
        isAdvancedTier = false;
        isTierClicked = false;
    }
    else{
        isProTier = false;
    }

    if(isMonthlyToggleCircle){
        tiersMonthlyYearlyPriceSpan.innerText = `$15/mo`;
        totalBalanceSpan.innerText = `15`;
        totalBalanceRunningTotal = 15;

        if(isOnlineService){
            totalBalanceRunningTotal += 1;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isLargerStorage){
            totalBalanceRunningTotal += 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isCustomizableProfile){
            totalBalanceRunningTotal += 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }
    if(isYearlyToggleCircle){
        tiersMonthlyYearlyPriceSpan.innerText = `$150/yr`;
        totalBalanceSpan.innerText = `150`;
        totalBalanceRunningTotal = 150;

        if(isOnlineService){
            totalBalanceRunningTotal += 10;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isLargerStorage){
            totalBalanceRunningTotal += 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        if(isCustomizableProfile){
            totalBalanceRunningTotal += 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }

    arcadeTier.classList.remove(`bg-gray-50`, `border-purple-500`);
    arcadeTier.classList.add(`bg-white`, `border-gray-400`);
    
    advancedTier.classList.remove(`bg-gray-50`, `border-purple-500`);
    advancedTier.classList.add(`bg-white`, `border-gray-400`);
    
    proTier.classList.remove(`bg-white`, `border-gray-400`);
    proTier.classList.add(`bg-gray-50`, `border-purple-500`);

    console.log(`isArcadeTier: ${isArcadeTier}`);
    console.log(`isAdvancedTier: ${isAdvancedTier}`);
    console.log(`isProTier: ${isProTier}`);
});

    // PICK ADD-ONS EVENT LISTENERS
let totalPrice = 0;
let isOnlineService = false; 
onlineServiceContainer.addEventListener(`click`, () => {
    console.log(`Clicked online service container`);
    isOnlineService = !isOnlineService;

    if(!isOnlineService){
        onlineServiceSummaryContainer.classList.add(`hidden`);
        onlineServiceSummaryContainer.classList.remove(`block`);
        if(isMonthlyToggleCircle){
            totalBalanceRunningTotal -= 1;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        else if(isYearlyToggleCircle){    
            totalBalanceRunningTotal -= 10;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }
    else{
        onlineServiceSummaryContainer.classList.add(`block`);
        onlineServiceSummaryContainer.classList.remove(`hidden`);
        // totalBalanceSpan.innerText = String(totalBalanceRunningTotal++);
        if(isMonthlyToggleCircle){
            totalBalanceRunningTotal += 1;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        else if(isYearlyToggleCircle){    
            totalBalanceRunningTotal += 10;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }
    
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

});

let isLargerStorage = false;
largerStorageContainer.addEventListener(`click`, () => {
    console.log(`Clicked larger storage container`);
    isLargerStorage = !isLargerStorage;

    if(!isLargerStorage){
        largerStorageSummaryContainer.classList.add(`hidden`);
        largerStorageSummaryContainer.classList.remove(`block`);

        if(isMonthlyToggleCircle){
            totalBalanceRunningTotal -= 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        else if(isYearlyToggleCircle){    
            totalBalanceRunningTotal -= 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }
    else{
        largerStorageSummaryContainer.classList.add(`block`);
        largerStorageSummaryContainer.classList.remove(`hidden`);

        if(isMonthlyToggleCircle){
            totalBalanceRunningTotal += 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        else if(isYearlyToggleCircle){    
            totalBalanceRunningTotal += 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }

    if(isLargerStorage){
        console.log(`checked`);

        largerStorageContainer.classList.add(`bg-gray-50`, `border-purple-500`);
        largerStorageContainer.classList.remove(`bg-white`, `border-gray-400`);

        largerStorageCheckmarkEmoji.classList.add(`block`);
        largerStorageCheckmarkEmoji.classList.remove(`hidden`);
    }
    else{
        console.log(`unchecked`);

        largerStorageContainer.classList.remove(`bg-gray-50`, `border-purple-500`);
        largerStorageContainer.classList.add(`bg-white`, `border-gray-400`);

        largerStorageCheckmarkEmoji.classList.add(`hidden`);
        largerStorageCheckmarkEmoji.classList.remove(`block`);
    }
});

let isCustomizableProfile = false;
customizableProfileContainer.addEventListener(`click`, () => {
    console.log(`Clicked customizable profile container`);
    isCustomizableProfile = !isCustomizableProfile;

    if(!isCustomizableProfile){
        customizableProfileSummaryContainer.classList.add(`hidden`);
        customizableProfileSummaryContainer.classList.remove(`block`);

        if(isMonthlyToggleCircle){
            totalBalanceRunningTotal -= 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        else if(isYearlyToggleCircle){    
            totalBalanceRunningTotal -= 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }
    else{
        customizableProfileSummaryContainer.classList.add(`block`);
        customizableProfileSummaryContainer.classList.remove(`hidden`);

        if(isMonthlyToggleCircle){
            totalBalanceRunningTotal += 2;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
        else if(isYearlyToggleCircle){    
            totalBalanceRunningTotal += 20;
            totalBalanceSpan.innerText = totalBalanceRunningTotal;
        }
    }

    if(isCustomizableProfile){
        console.log(`checked`);

        customizableProfileContainer.classList.add(`bg-gray-50`, `border-purple-500`);
        customizableProfileContainer.classList.remove(`bg-white`, `border-gray-400`);

        customizableProfileCheckmarkEmoji.classList.add(`block`);
        customizableProfileCheckmarkEmoji.classList.remove(`hidden`);
    }
    else{
        console.log(`unchecked`);

        customizableProfileContainer.classList.remove(`bg-gray-50`, `border-purple-500`);
        customizableProfileContainer.classList.add(`bg-white`, `border-gray-400`);

        customizableProfileCheckmarkEmoji.classList.add(`hidden`);
        customizableProfileCheckmarkEmoji.classList.remove(`block`);
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
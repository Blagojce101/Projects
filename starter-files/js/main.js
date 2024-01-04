// Card Filtering

document.querySelector('#filter-marketing').addEventListener("change", filterMarketing);
document.querySelector('#filter-coding').addEventListener("change", filterCoding);
document.querySelector('#filter-design').addEventListener("change", filterDesign);

let activeClassMarketing = document.querySelector('.active-marketing');
let activeClassCoding = document.querySelector('.active-coding');
let activeClassDesign = document.querySelector('.active-design');

let activeIconOne = document.querySelector('.icon-1');
let activeIconTwo = document.querySelector('.icon-2');
let activeIconThree = document.querySelector('.icon-3');



function filterMarketing() {
    hideAllCards();

    if(document.querySelector('#filter-marketing').checked){
        let marketingCards = document.querySelectorAll('.marketing');
        let marketingCol = document.querySelectorAll(".custom-col-marketing");
        let codeCol = document.querySelectorAll(".custom-col-coding");
        let designCol = document.querySelectorAll(".custom-col-design");

        activeClassMarketing.classList.add('custom-active');

        activeIconOne.classList.add('active');

        activeClassCoding.classList.remove('custom-active');
        activeClassDesign.classList.remove('custom-active');

        activeIconTwo.classList.remove('active');
        activeIconThree.classList.remove('active');


        marketingCards.forEach(marketingCards => {
            marketingCards.style.display = 'inline-block';
        });
        marketingCol.forEach((marketingCol) => {
            marketingCol.style.display = "inline-block";
        });
        codeCol.forEach((codeCol) => {
            codeCol.style.display = "none";
        });
        designCol.forEach((designCol) => {
            designCol.style.display = "none";
        });
         visibleCards = 6;
         showMoreBtn.style.display = "flex"


        document.querySelector('#filter-coding').checked = false;
        document.querySelector('#filter-design').checked = false;
    } else {
        showAllCards();
        showAllCol();
        activeClassMarketing.classList.remove('custom-active');

        activeIconOne.classList.remove('active');
    }
}


function filterCoding() {
    hideAllCards();

    if(document.querySelector('#filter-coding').checked){
        let codingCards = document.querySelectorAll('.coding');
        let marketingCol = document.querySelectorAll(".custom-col-marketing");
        let codeCol = document.querySelectorAll(".custom-col-coding");
        let designCol = document.querySelectorAll(".custom-col-design");

        activeClassCoding.classList.add('custom-active');

        activeIconTwo.classList.add('active');

        activeClassMarketing.classList.remove('custom-active');
        activeClassDesign.classList.remove('custom-active');

        activeIconOne.classList.remove('active');
        activeIconThree.classList.remove('active');

        codingCards.forEach(codingCards => {
            codingCards.style.display = 'inline-block';
        });
        codeCol.forEach((codeCol) => {
            codeCol.style.display = "inline-block";
        });
        marketingCol.forEach((marketingCol) => {
            marketingCol.style.display = "none";
        });
        designCol.forEach((designCol) => {
            designCol.style.display = "none";
        });
        
        visibleCards = 6;
        showMoreBtn.style.display = "flex"

        document.querySelector('#filter-design').checked = false;
        document.querySelector('#filter-marketing').checked = false;
    } else {
        showAllCards();
        showAllCol();
        activeClassCoding.classList.remove('custom-active');

        activeIconTwo.classList.remove('active');
    }
}


function filterDesign() {
    hideAllCards();

    if(document.querySelector('#filter-design').checked){
        let designCards = document.querySelectorAll('.design');
        let marketingCol = document.querySelectorAll(".custom-col-marketing");
        let codeCol = document.querySelectorAll(".custom-col-coding");
        let designCol = document.querySelectorAll(".custom-col-design");

        activeClassDesign.classList.add('custom-active');

        activeIconThree.classList.add('active');

        activeClassMarketing.classList.remove('custom-active');
        activeClassCoding.classList.remove('custom-active');

        activeIconOne.classList.remove('active');
        activeIconTwo.classList.remove('active');


        designCards.forEach(designCards => {
            designCards.style.display = 'inline-block';
        });
        designCol.forEach((designCol) => {
            designCol.style.display = "inline-block";
        });
        marketingCol.forEach((marketingCol) => {
            marketingCol.style.display = "none";
        });
        codeCol.forEach((codeCol) => {
            codeCol.style.display = "none";
        });

        visibleCards = 6;
        showMoreBtn.style.display = "flex"

        document.querySelector('#filter-marketing').checked = false;
        document.querySelector('#filter-coding').checked = false;
    }else {
        showAllCards();
        showAllCol();
        activeClassDesign.classList.remove('custom-active');
        activeIconThree.classList.remove('active');
    }
}


function hideAllCards() {
    let allCards = document.querySelectorAll('.cards');

    allCards.forEach(card => {
        card.style.display = 'none';
    });
}


function showAllCards() {
    let allCards = document.querySelectorAll('.cards');

    allCards.forEach(card => {
        card.style.display = 'inline-block';
    });
}

function showAllCol() {
    let allCol = document.querySelectorAll(".col-lg-4");
    
    allCol.forEach((allCol) => {
        allCol.style.display = "inline-block";
    });
}

// Load More Button

const cards = document.querySelectorAll(".cards");
let showMoreBtn = document.querySelector(".show-more-btn");
let visibleCards = 6;
showMoreBtn.addEventListener("click", function(){
    visibleCards += 6;
    if(visibleCards >= cards.length){
        visibleCards = cards.length;
        showMoreBtn.style.display = "none";
    }
    for (let i = 0; i < visibleCards; i++){
        cards[i].style.display = "flex";
    };
});

// const cards = document.querySelectorAll(".cards");
// let showMoreBtn = document.querySelector(".show-more-btn");
// showMoreBtn.addEventListener("click", loadMoreBtn);
// let currentCards = 6;

// function loadMoreBtn() {
//     for (let index = cards; index < currentCards + 6; index++) {
//         if (cards[index]) {
//             cards[index].style.display = "inline-block";
//         }
//     }
//     currentCards += 6;
//     if (currentCards >= cards.length) {
//         showMoreBtn.style.display = "none";
//     }
// }
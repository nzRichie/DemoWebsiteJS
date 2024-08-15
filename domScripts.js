// HANDLE PAGE CHANGES

prevPage = document.getElementById('previousPage');
nextPage = document.getElementById('nextPage');

let pages = [];
let pageIndex = 0;

// Assign each page to a list of divs
for (let i = 1; i < 6; i++){
    page = document.getElementById(('page-' + i));
    if (i != 1){
        page.style.display = 'none';
    }
    pages.push(page);
}

prevPage.style.visibility = 'hidden';


// Next page onclick function
nextPage.onclick = function(){

    // Hide the current page
    pages[pageIndex].style.display = 'none';

    // If we were on the first page, show the previous page button.
    if (pageIndex == 0){
        prevPage.style.visibility = 'visible';
    }

    // Increment the counter and show the next page
    pageIndex++;
    pages[pageIndex].style.display = 'flex';

    // If we arrived on the last page, hide the next page button.
    if (pageIndex == 4){
        calculateTotalScore();
        nextPage.style.visibility = 'hidden';
        calculateTotalScore();
    }
    handleProgressBar();
}

// Previous page onclick function
prevPage.onclick = function(){

    // Hide the current page
    pages[pageIndex].style.display = 'none';

    // If we were on the last page, show the next page button
    if (pageIndex == 4){
        nextPage.style.visibility = 'visible';
    }

    // decrement page index and display the previous page
    pageIndex--;
    pages[pageIndex].style.display = 'flex';

    // If we arrived on the first page, hide the previous page button.
    if (pageIndex == 0){
        prevPage.style.visibility = 'hidden';
    }
    handleProgressBar();
}

function handleProgressBar(){
    for (let i = 1; i < 6; i++){
        progressBarDivs = document.getElementsByClassName('p' + i);
        for (let j = 0; j < progressBarDivs.length; j++){
            if (i <= pageIndex + 1){
                progressBarDivs[j].style.backgroundColor = "#b45dbb";
            }
            else {
                progressBarDivs[j].style.backgroundColor = "#a8a8a8";
            }
        }
    }
}
// PAGE ONE SCRIPTS

// Gender select handling

maleButton = document.getElementById('maleButton');
femaleButton = document.getElementById('femaleButton');

maleButton.onclick = function() {
    if (!male){
        femaleButton.style.backgroundColor = "#a8a8a8";
        maleButton.style.backgroundColor = "#b45dbb";
        male = true;
    }
};

femaleButton.onclick = function() {
    if (male){
        femaleButton.style.backgroundColor = "#b45dbb";
        maleButton.style.backgroundColor = "#a8a8a8";
        male = false;
    }
};

// Slider handling

ageRangeSlider = document.getElementById('ageSlider');
ageSpan = document.getElementById('ageSpan');
ageSpan.innerHTML = ageRangeSlider.value;

ageRangeSlider.oninput = function(){
    ageSpan.innerHTML = this.value;
    age = this.value;
}
// PAGE TWO SCRIPTS


// PAGE THREE SCRIPTS

doesSmoke = document.getElementById('smoker-button-true');
doesntSmoke = document.getElementById('smoker-button-false');

function smokerButtonClick(){
    if (!smoker){
        doesntSmoke.style.backgroundColor = "#b45dbb";
        doesSmoke.style.backgroundColor = "#a8a8a8";
    }
    else {
        doesntSmoke.style.backgroundColor = "#a8a8a8";
        doesSmoke.style.backgroundColor = "#b45dbb";
    }
}

// PAGE FOUR SCRIPTS

treatedButton = document.getElementById('treated-button-true');
untreatedButton = document.getElementById('treated-button-false');

function treatedButtonClick(){
    if (!BPtreated){
        untreatedButton.style.backgroundColor = "#b45dbb";
        treatedButton.style.backgroundColor = "#a8a8a8";
    }
    else {
        untreatedButton.style.backgroundColor = "#a8a8a8";
        treatedButton.style.backgroundColor = "#b45dbb";
    }
}

// PAGE FIVE SCRIPTS

displayHeader = document.getElementById('risk-display');
scoreHeader = document.getElementById('score-display');

function displayScore(risk, score){
    displayHeader.innerHTML = risk;
    scoreHeader.innerHTML = "Final Score: " + score;

}
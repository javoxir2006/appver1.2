// interacting nav icons
const resetBtn = document.querySelector(".reset-popup");
const countDisplay = document.querySelector(".countDisplay");
const progressDisplay = document.querySelector(".progressDisplay");
const settingsDisplay = document.querySelector(".settingsDisplay");

function countDis(){
    countDisplay.style.display = 'flex';
    progressDisplay.style.display = 'none';
    settingsDisplay.style.display = 'none';
    resetBtn.style.display = 'none';
}

function progressDis(){
    countDisplay.style.display = 'none';
    progressDisplay.style.display = 'flex';
    settingsDisplay.style.display = 'none';
    resetBtn.style.display = 'none';
}

function settingsDis(){
    countDisplay.style.display = 'none';
    progressDisplay.style.display = 'none';
    settingsDisplay.style.display = 'flex';
    resetBtn.style.display = 'none';
}

function resetBtnDis(){
    countDisplay.style.display = 'flex';
    progressDisplay.style.display = 'none';
    settingsDisplay.style.display = 'none';
    resetBtn.style.display = 'flex';
}

//interacting the counter

const counter = document.querySelector(".counter");
const progressDowner = document.querySelector(".pro-down");
const initialCount = counter.textContent;

function proCount(){

    let countCur = parseInt(counter.textContent, 10);
    if(countCur > 0){
        countCur -= 1;
        counter.textContent = countCur;
        localStorage.setItem("counterValue", countCur);
        
    }
    let progressHeight = (countCur * 100) / initialCount;

    progressDowner.style.height = `${progressHeight}%`;
    localStorage.setItem("progressHeight", progressHeight);
}

// reset counter

function resetCount(){
    counter.textContent = initialCount;
    progressDowner.style.height = "100%";
    console.log(counter.textContent)
    localStorage.setItem("counterValue", initialCount);
    localStorage.setItem("progressHeight", 100);

    resetBtn.style.display = 'none';
}

// close reset 

function closeReset(){
    resetBtn.style.display = 'none';
}

// local save

window.addEventListener("load", function (){
    let savedCounter = localStorage.getItem("counterValue");
    let savedProgress = localStorage.getItem("progressHeight");

    if(savedCounter !== null){
        progressDowner.style.height = `${savedProgress}%`;
    }

    if(savedCounter !== null){
        counter.textContent = savedCounter;
    }
})
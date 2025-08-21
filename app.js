let gameSeq = [];
let userSeq = [];
let start = false;
let level =0;
let temp=0;
let record = document.querySelector("#highScore");
let indx = ["one", "two", "three", "four"];
let h4 = document.querySelector("h4");

function checkAns() {
    for (let i = 0; i < userSeq.length; i++) {
        if (userSeq[i] !== gameSeq[i]) {
            h4.innerText = "You lose. Please press any key to restart.";
            gameSeq = [];
            userSeq = [];
            if(level >= temp){
                record.innerText = `High score : ${level}`;
                temp=level;
            }
            level=0;
            start = false;
            return;
        }
    }


    if (userSeq.length === gameSeq.length) {
        setTimeout(levelUp, 500);
        userSeq = [];
    }
}



function flash (box) {
    let item = document.querySelector(`.${box}`);
    item.classList.add("blink");
    setTimeout( ()=> {
        item.classList.remove("blink");
    }, 250);
}


function levelUp () {
    level++;
    h4.innerText = `Level ${level}`;
    let ran = Math.floor(Math.random()*4);
    let box = indx[ran];
    gameSeq.push(box);
    flash(box);
    
}

document.addEventListener("keypress", function () {
    if(start === false){
        start = true;
        console.log("game start");
        levelUp();
    }
})

function btnClick () {
    let btn = this;
    let arr = btn.getAttribute("class").split(" ");
    flash(arr[1]);
    userSeq.push(arr[1]);
    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns) {
    btn.addEventListener("click", btnClick);
}
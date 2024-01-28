const buttonRight = document.querySelector("#Right");
const btnShoot = document.querySelector("#Shoot");
const text = document.querySelector("#about")
const hitOrNot = document.querySelector("#hit")
const hightScore = document.querySelector("#High")
const currentScore = document.querySelector("#current")
let score = 0;
let highScore = 0;

buttonRight.onclick = right;
btnShoot.onclick = shoot;
console.log(score);


const shirt = ["red", "green","blue","grey","pink","Orange","Yellow"];
let mainTarget = shirt[Math.floor(Math.random()*shirt.length)];
let currentTarget =  shirt[Math.floor(Math.random()*shirt.length)];
text.innerText = `Your Target it Wearing a ${mainTarget} Shirt`;
hit.innerText = `Person you are aiming at is wearing a ${currentTarget} Shirt`;

function right(){
    currentTarget =  shirt[Math.floor(Math.random()*shirt.length)];
    hit.innerText = `Person you are aiming at is wearing a ${currentTarget} Shirt`;
    console.log(currentTarget);
}
function shoot(){
    if(mainTarget == currentTarget){
        console.log("killed");
        hit.innerText = `You Killed the Target`;
        score +=1;
        console.log(score);
        currentScore.innerText = score;
        changeTargets()
    }
    else{
        hit.innerText = `you killed the Wrong Person`;
        if (score >= highScore) {
            console.log("oh dear");
            highScore = score;
            console.log(highScore);
            hightScore.innerText = highScore;
            score = 0;
            currentScore.innerText = score;
        }else{
            score = 0;
            currentScore.innerText = score;
        }
        changeTargets()
        
    }
}
function left(){
    currentTarget =  shirt[Math.floor(Math.random()*shirt.length)];
    console.log(currentTarget);
    hit.innerText = `Person you are aiming at is wearing a ${currentTarget} Shirt`;
}
function changeTargets()
{
    mainTarget = shirt[Math.floor(Math.random()*shirt.length)];
    text.innerText = `Your Target it Wearing a ${mainTarget} Shirt`;
    currentTarget =  shirt[Math.floor(Math.random()*shirt.length)];
    hit.innerText = `Person you are aiming at is wearing a ${currentTarget} Shirt`;
}
console.log(mainTarget);
console.log(currentTarget);

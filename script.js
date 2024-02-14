
let h2=document.querySelector('h2')
let allbtn=document.querySelectorAll('.btn')


let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;


let btns=['yellow','green', 'purple', 'red'];


document.addEventListener('keypress', function(){
    if(started==false)
started=true;

levelup();
})


function btnflash(btn){
    btn.classList.add('flash')
    setTimeout(() => {
        btn.classList.remove('flash')
    }, 300);
}


function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

let randomidx=Math.floor(Math.random()*3);
let randomcolor=btns[randomidx];
gameSeq.push(randomcolor);
let randombtn=document.querySelector(`.${randomcolor}`)
btnflash(randombtn);

}


function checkans(idx){
    
    if(gameSeq[idx]==userSeq[idx]){
        if(gameSeq.length==userSeq.length){
setTimeout( levelup, 1000);
        
}
    }else{
        h2.innerHTML=`game over! your score was <b>${level}</b> <br> press any to start the game`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor='white';
        }, 150);
        reset()
    }
}

function btnpressed(){
    let btn=this;
    btnflash(btn);
    let usercolor=btn.getAttribute('id');
    userSeq.push(usercolor);

    checkans(userSeq.length-1);
    
}
 
for(btn of allbtn){
    btn.addEventListener('click', btnpressed)
}



function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}




































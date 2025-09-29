let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");

let turn0=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerText==="" && turn0){
            box.innerText="X";
            turn0=false;
        }
        else if(box.innerText==="" && !turn0){
            box.innerText="O";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const resetgame=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
};

const checkwinner=()=>{
    for(let pattern of winpatterns)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val===pos2val && pos2val===pos3val && pos1val!=="")
        {
            alert(`${pos1val} is the winner!`);
           resetgame();
        }
    }
};

resetbtn.addEventListener("click",resetgame);

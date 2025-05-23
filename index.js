//document.getElementById("counter").innerText = 5;
//ctrl+k+c for making a comment

// let count = 0;
// count = count + 1;
// console.log(count)

let countEl=document.getElementById("counter");
let saveEl=document.getElementById("save");

let count = 0;
function increment() {
    count += 1;
    countEl.textContent = count
    console.log(count);
}

function save(){
    console.log(count);
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = count - count;
    console.log(count);
}
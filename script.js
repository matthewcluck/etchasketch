let container = document.querySelector('.flex-container');

let box = document.createElement('div');

container.appendChild(box);

let picksm = document.querySelector('#picksm');
let pickmd = document.querySelector('#pickmd');
let picklg = document.querySelector('#picklg');
let eraser = document.querySelector('#eraser');
let marker = document.querySelector('#marker');

picksm.addEventListener('click', boxSizeSm);
pickmd.addEventListener('click', boxSizeMed);
picklg.addEventListener('click', boxSizeLarge);
// eraser.addEventListener('click', eraserF);
// marker.addEventListener('click', markerF);

// function eraserF(){
//     for (let i = 1; i < 400; i++){
//         let box = document.querySelectorAll('div');
//         box.addEventListener('mouseenter', function() {box.style.backgroundColor = 'black';})
//     }
    
// }

function boxSizeLarge(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < 100; i++){
        let box = document.createElement('div');
        box.className = i;
        let boxHeightNum = 50;
        let boxWidthNum = 50;
        
        let boxHeight = boxHeightNum + "px";
        let boxWidth = boxWidthNum + "px";

        box.style.height = boxHeight;
        box.style.width = boxWidth;
        container.appendChild(box);
        box.addEventListener('mouseenter', function(e) {box.style.backgroundColor = 'grey'; console.log(e)})
    }
}

// boxSizeLarge(100);

function boxSizeMed(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < 400; i++){
        let box = document.createElement('div');
        box.idName = i;
        let boxHeightNum = 25;
        let boxWidthNum = 25;
        
        let boxHeight = boxHeightNum + "px";
        let boxWidth = boxWidthNum + "px";

        box.style.height = boxHeight;
        box.style.width = boxWidth;
        container.appendChild(box);
        box.addEventListener('mouseenter', function(e) {box.style.backgroundColor = 'grey'; console.log(e)})
    }
}

boxSizeMed();

function boxSizeSm(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < 2500; i++){
        let box = document.createElement('div');
        box.className = i;
        let boxHeightNum = 10;
        let boxWidthNum = 10;
        
        let boxHeight = boxHeightNum + "px";
        let boxWidth = boxWidthNum + "px";

        box.style.height = boxHeight;
        box.style.width = boxWidth;
        container.appendChild(box);
        box.addEventListener('mouseenter', function(e) {box.style.backgroundColor = 'grey'; console.log(e)})
    }
}

// boxSizeSm();
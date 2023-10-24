let moveRate = 10;
let object1 = document.getElementById("p1");
let arrayGameBoard = initializeGameBoard2DArray();
let arrayPlanePosition = initializePlane2DArray();  
let image = document.getElementById("planeimg");


let direction = {
    up: true,
    down: false,
    left: false,
    right: false
}

let position = {
    x: 10,
    y: 10
};
window.addEventListener("keydown", function (event) {

    if (event.code === "ArrowDown") {
        // Handle "down"
        direction.up = false;
        direction.down = true;
        updateYPosition(-moveRate);
        image.src = "./img/planeDown.png";
    } else if (event.code === "ArrowUp") {
        // Handle "up"
        direction.up = true;
        direction.down = false;
        updateYPosition(moveRate);
        image.src = "./img/planeUp.png";
    } else if (event.code === "ArrowLeft") {
        // Handle "left"

        direction.right = false;
        direction.left = true;
        updateXPosition(-moveRate);
        image.src = "./img/planeLeft.png";
    } else if (event.code === "ArrowRight") {
        // Handle "right"
        direction.left = false;
        direction.right = true;
        updateXPosition(moveRate);
        image.src = "./img/planeRight.png";
    }
    refreshPosition();
    checkDirection();
}, true);

function updateYPosition(distance) {
    position.y = position.y - distance;
}

// Update x-axis position.
function updateXPosition(distance) {
    position.x = position.x + distance;
}

function checkDirection() {
    if (direction.left == true && direction.up == true) {
        image.src = "./img/planeUpLeft.png";
        direction.left = false;
        direction.up = false;
    } else if (direction.right == true && direction.up == true) {
        image.src = "./img/planeUpRight.png";
        direction.right = false;
        direction.up = false;
    } else if (direction.right == true && direction.down == true) {
        image.src = "./img/planeDownRight.png";
        direction.right = false;
        direction.down = false;
    } else if (direction.left == true && direction.down == true) {
        image.src = "./img/planeDownLeft.png";
        direction.left = false;
        direction.down = false;
    }

}


function refreshPosition() {
    let x = position.x;
    let y = position.y;
    object1.style.left = x + "px";
    object1.style.top = y + "px";
}



function paintTiles(gameBoardArray) {

    const worldMap = document.getElementById("worldMap");

// Loop through the 2D array and create div elements with img tags
    for (let row = 0; row < gameBoardArray.length; row++) {
        let div = document.createElement("div");
        for (let column = 0; column < gameBoardArray[row].length; column++) {
           
            // Create a new img element
            const img = document.createElement("img");

         if (gameBoardArray[row][column] == "border"){
             img.src = `img/worldTiles/black.png`;

         } else if (gameBoardArray[row][column] == "plane") {
            img.src = `img/worldTiles/planeUp.png`;
         } else if (gameBoardArray[row][column] == "empty") { 

         } else {
             // Set the src attribute of the img tag based on the array value
             img.src = `img/worldTiles/${gameBoardArray[row][column]}.png`;
             }
 // Append the img element to the div
 div.appendChild(img);

 // Append the div to the container
 worldMap.appendChild(div);
        }
    }
}
function initializePlane2DArray(){
    const array = [
        ["border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border"],
        ["border", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "border"],
        ["border", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "border"],
        ["border", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "border"],
        ["border", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "border"],
        ["border", "empty", "empty", "plane", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "border"],
        ["border", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "border"],
        ["border", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "border"],
        ["border", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "border"],
        ["border", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "border"],
        ["border", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "border"],
        ["border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border"],
      ];
      
      
}
    function initializeGameBoard2DArray() {
        const array = [
            ["border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border"],
            ["border", "0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100", "110", "120", "130", "140", "150", "border"],
            ["border", "1", "11", "21", "31", "41", "51", "61", "71", "81", "91", "101", "111", "121", "131", "141", "151", "border"],
            ["border", "2", "12", "22", "32", "42", "52", "62", "72", "82", "92", "102", "112", "122", "132", "142", "152", "border"],
            ["border", "3", "13", "23", "33", "43", "53", "63", "73", "83", "93", "103", "113", "123", "133", "143", "153", "border"],
            ["border", "4", "14", "24", "34", "44", "54", "64", "74", "84", "94", "104", "114", "124", "134", "144", "154", "border"],
            ["border", "5", "15", "25", "35", "45", "55", "65", "75", "85", "95", "105", "115", "125", "135", "145", "155", "border"],
            ["border", "6", "16", "26", "36", "46", "56", "66", "76", "86", "96", "106", "116", "126", "136", "146", "156", "border"],
            ["border", "7", "17", "27", "37", "47", "57", "67", "77", "87", "97", "107", "117", "127", "137", "147", "157", "border"],
            ["border", "8", "18", "28", "38", "48", "58", "68", "78", "88", "98", "108", "118", "128", "138", "148", "158", "border"],
            ["border", "9", "19", "29", "39", "49", "59", "69", "79", "89", "99", "109", "119", "129", "139", "149", "159", "border"],
            ["border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border", "border"],
          ];
          return array
    }

    myInterval = setInterval(getPoint(), 1000);


    function getPoint() {


        alert(
            " (" + object1.offsetLeft + ", "
            + object1.offsetTop + ")");

    }

    function propagateTiles() {
       
        paintTiles(arrayGameBoard);
    }
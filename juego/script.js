
let moveRate = 10;
let object1 = document.getElementById("p1");

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
  window.addEventListener("keydown", function(event) {  

    if (event.code === "ArrowDown"){
        // Handle "down"
        direction.up = false;
        direction.down = true;
        updateYPosition(-moveRate);
        image.src = "./img/planeDown.png";  
    } else if (event.code === "ArrowUp"){
        // Handle "up"
        direction.up = true;
        direction.down = false;
        updateYPosition(moveRate); 
        image.src = "./img/planeUp.png";       
    } else if (event.code === "ArrowLeft"){
        // Handle "left"
        direction.left = true;
        direction.right = false;
        updateXPosition(-moveRate);
        image.src = "./img/planeLeft.png"; 
    } else if (event.code === "ArrowRight"){
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

  function checkDirection(){
    if (direction.left == true && direction.up == true){
image.src = "./img/diagonallyLeftUp.png";
direction.left = false;
direction.up = false;
    } else if (direction.right == true && direction.up == true){
      image.src = "./img/diagonallyRightUp.png";
      direction.right = false;
      direction.up = false;
    } else if (direction.right == true && direction.down == true){
      image.src = "./img/diagonallyRightDown.png";
      direction.right = false;
      direction.down = false;
    } else if (direction.left == true && direction.down == true){
      image.src = "./img/diagonallyRightDown.png"; 
      direction.left = false;
      direction.down = false; 
    }

  }


  function refreshPosition() {
    let x = position.x;
    let y = position.y;
    object1.style.left = x+"px";
    object1.style.top = y+"px";
  }
  myInterval = setInterval(getPoint(), 1000);


  function getPoint() { 
   
  
    alert(
      " (" + object1.offsetLeft + ", " 
      + object1.offsetTop + ")");

} 
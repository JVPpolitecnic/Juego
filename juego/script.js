
let moveRate = 10;
let object1 = document.getElementById("p1");

let image = document.getElementById("planeimg")

  let position = {
    x: 10,
    y: 10
  };
  window.addEventListener("keydown", function(event) {  

    if (event.code === "ArrowDown"){
        // Handle "down"
        updateYPosition(-moveRate);
        image.src = "./img/planeDown.png";  
    } else if (event.code === "ArrowUp"){
        // Handle "up"
        updateYPosition(moveRate); 
        image.src = "./img/planeUp.png";       
    } else if (event.code === "ArrowLeft"){
        // Handle "left"
        updateXPosition(-moveRate);
        image.src = "./img/planeLeft.png"; 
    } else if (event.code === "ArrowRight"){
        // Handle "right"
        updateXPosition(moveRate);
        image.src = "./img/planeRight.png"; 
    }
    refreshPosition();
  }, true);

  function updateYPosition(distance) {
    position.y = position.y - distance;
  }
  // Update x-axis position.
  function updateXPosition(distance) {
    position.x = position.x + distance;
  
   
  }


  function refreshPosition() {
    let x = position.x;
    let y = position.y;
    object1.style.left = x+"px";
    object1.style.top = y+"px";
  }

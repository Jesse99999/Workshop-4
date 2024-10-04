 // Button 1
  function changeHeading() {
    document.querySelector("h1").textContent = "Modified Heading!";
  }

  // Button 2
  function secondButton() {
    const exercise2Heading = document.querySelector("h2:nth-of-type(2)");
    exercise2Heading.style.fontSize = "30px";
    exercise2Heading.style.color = "red";
    exercise2Heading.style.fontStyle = "italic";
    exercise2Heading.style.backgroundColor = "lightgray";
  }

  // Button 3
  function thirdButton() {
    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = '<em>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit..."</em>';
    
    
    const newImage = document.createElement("img");
    newImage.src = "https://seeklogo.com/images/S/Spongebob_Squarepants-logo-6CD612E78F-seeklogo.com.png";
    newImage.alt = "Logo";

    newParagraph.appendChild(newImage);

    const paragraphs = document.querySelectorAll("p");
    if (paragraphs.length >= 4) {
      paragraphs[3].parentNode.insertBefore(newParagraph, paragraphs[3].nextSibling);
    }

    document.body.style.backgroundColor = "#f0f8ff";
  }

 
// First checkbox
  function hide() {
    document.getElementById("me").style.display = "none";
  }

  // Second checkbox
  function show() {
    document.getElementById("me").style.display = "block";
  }

  // Third checkbox
  function surprise() {
    const elements = document.getElementsByClassName("surprise");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = "20px";
    }
  }

  // Pulldown menu
  function handleSelection() {
    const car = document.getElementById("mySelect").value;
    alert("You selected: " + car);
    
    // Change the image
    const carImage = document.getElementById("carimage");
    switch (car) {
      case "BMW":
        carImage.src = "https://www.bmw.fi/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/navigation/bmw-8series-coupe-modellfinder.png";
        break;
      case "Audi":
        carImage.src = "https://cdn.motor1.com/images/mgl/Wrp6g/s1/2015-audi-r8-e-tron.jpg";
        break;
      case "Mercedes":
        carImage.src = "https://th.bing.com/th/id/R.3f1e8a60cccfe646160947cfcb7f4372?rik=AaiC0Gcef3RPog&pid=ImgRaw&r=0";
        break;
      case "Volvo":
        carImage.src = "https://th.bing.com/th/id/R.b5f98c28bfd79753f9a3af1a84a39cd5?rik=21N4qfZ9bkn6MQ&pid=ImgRaw&r=0";
        break;
    }
  }

  // Mouse over and mouse out effects
  function addBorder() {
    document.getElementById("carimage").style.border = "5px solid blue";
  }

  function removeBorder() {
    document.getElementById("carimage").style.border = "none";
  }


  // Move the carimage 200px left and 500px down
  function changePosition() {
    const image = document.getElementById("carimage");
    image.style.position = "relative";
    image.style.left = "200px";
    image.style.top = "500px";
  }

  // Animate the image
  let moveDirection = 1;
  function doMove() {
    const image = document.getElementById("carimage");
    let currentLeft = parseInt(image.style.left || 0);
    if (currentLeft >= 400 || currentLeft <= 0) {
      moveDirection *= -1;
    }
    image.style.left = currentLeft + (10 * moveDirection) + "px";
  }

  // Fade out the image
  function fadeOut() {
    const image = document.getElementById("carimage");
    let opacity = parseFloat(image.style.opacity || 1);
    if (opacity > 0) {
      opacity -= 0.1;
      image.style.opacity = opacity;
    }
  }

  // Remove the image
  function remove() {
    const image = document.getElementById("carimage");
    image.remove();
  }

  // Rows
  function insertRows() {
    const name = document.getElementById("textfield").value;
    const position = document.getElementById("textfield2").value;
    const salary = document.getElementById("textfield3").value;

    const table = document.getElementById("data").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `<td>${name}</td><td>${position}</td><td>${salary}</td>`;
  }




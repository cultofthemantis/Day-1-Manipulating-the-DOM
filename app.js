const subtitle = document.getElementById("subtitle");

const titleButton = document.getElementById("title-button");
const bgcolorButton = document.getElementById("bgcolor-button");

const addTextButton = document.getElementById("add-text-button");
const clearTextButton = document.getElementById("clear-text-button");
const addCustomCardButton = document.getElementById("add-custom-card-button");
const customTextInput = document.getElementById("custom-text-input");
const textContainer = document.getElementById("text-container");

const togglePhotoButton = document.getElementById("toggle-photo-button");
const lebron = document.getElementById("lebron");
const leBorder = document.getElementById("le-border")
const borderColorBtn = document.getElementById("border-color-button")

const square = document.getElementById("toggle-square");
const resizeSquareButton = document.getElementById("resize-square-button");

const plusOneButton = document.getElementById("plus-one-button");
const minusOneButton = document.getElementById("minus-one-button");
const plusMinusSection = document.getElementById("plus-minus-section");




titleButton.addEventListener("click", function () {
  if (subtitle.innerText === "Press the buttons to see what happens!") {
    subtitle.innerText = "WOAH!!!";
  } else {
    subtitle.innerText = "Press the buttons to see what happens!";
  }
});




bgcolorButton.addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});




function createTextBlock(text) {
  const block = document.createElement("div");
  block.innerText = text;

  return block;
}




addTextButton.addEventListener("click", function () {
  const block = createTextBlock("Hello");
  textContainer.appendChild(block);
});




addCustomCardButton.addEventListener("click", function () {
  const value = customTextInput.value;
  if (value !== "") {
    const block = createTextBlock(value);
    textContainer.appendChild(block);
    customTextInput.value = "";
  }
});




clearTextButton.addEventListener("click", function () {
  textContainer.innerHTML = "";
});



let showingOriginal = true;

togglePhotoButton.addEventListener("click", function () {
  if (showingOriginal) {
    lebron.src = "/assets/lesmile.jpg";
    showingOriginal = false;
  } else {
    lebron.src = "/assets/lesunshine.jpg";
    showingOriginal = true;
  }
});




let resized = false;

resizeSquareButton.addEventListener("click", function () {
  if (resized) {
    lebron.style.transform = "scale(.5)";

    resized = true;
  } 
  
  else {
    lebron.style.transform = "scale(.75)";

    resized = false;
  }
});



plusOneButton.addEventListener("click", function () {
  const item = document.createElement("li");
  item.innerText = "+1";
  plusMinusSection.appendChild(item);
});




minusOneButton.addEventListener("click", function () {
  const items = plusMinusSection.getElementsByTagName("li");
  if (items.length > 0) {
    plusMinusSection.removeChild(items[items.length - 1]);
  }
});


const paragraphsToType = document.querySelectorAll(".type-text");
const choicesToType = document.querySelectorAll(".choice");
const lineBreakOpenTag = "<";
const lineBreakTagLength = 3;
let typing = false;
const typingSpeed = 30;
const timeBetweenChecks = 60;

// Text typing animation
function type(index, element, text) {
  if (text.charAt(index - 1) === lineBreakOpenTag) index += lineBreakTagLength; // output entire <br> if the next character is the line break opening tag
  element.innerText = text.slice(0, index++);
  if (index > text.length) {
    typing = false;
    return;
  }
  setTimeout(type, typingSpeed, index, element, text);
}

function doneTyping(finish) {
  if (typing) {
    setTimeout(doneTyping, timeBetweenChecks, finish);
  } else {
    finish();
  }
}

function playTypeAnimation(textElement) {
  console.log(`class: ${textElement.classList}`);
  typing = true;
  // store full text content
  const innerText = textElement.innerText;
  // set text content to empty string
  textElement.innerText = "";
  // make text element visible (initially it is invisible)
  textElement.style.opacity = 1;
  // set the index of the first letter to be shown
  let typeIndex = 1;
  setTimeout(type, typingSpeed, typeIndex, textElement, innerText);
  return new Promise(doneTyping);
}

async function typeParagraphs() {
  for (let i = 0; i < paragraphsToType.length; i++) {
    await playTypeAnimation(paragraphsToType[i]);
  }
}

async function typeChoices() {
  for (let i = 0; i < choicesToType.length; i++) {
    console.log(
      `choice[${i}]: ${choicesToType[i].lastElementChild.innerText} ${choicesToType[i].firstElementChild}`
    );

    // Reveal the icon
    choicesToType[i].style.opacity = 1;

    // Type out the text
    await playTypeAnimation(choicesToType[i].lastElementChild);
  }
}

async function typePageContent() {
  await typeParagraphs();
  await typeChoices();
}

typePageContent();

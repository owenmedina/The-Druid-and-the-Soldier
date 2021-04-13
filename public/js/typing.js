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

export async function typeParagraphs(paragraphs = paragraphsToType) {
  for (let i = 0; i < paragraphs.length; i++) {
    await playTypeAnimation(paragraphs[i]);
  }
}

export async function typeChoices(choices = choicesToType) {
  for (let i = 0; i < choices.length; i++) {
    // Reveal the icon
    choices[i].style.opacity = 1;

    // Type out the text
    await playTypeAnimation(choices[i].lastElementChild);
  }
}

async function typePageContent() {
  await typeParagraphs();
  await typeChoices();
}

typePageContent();

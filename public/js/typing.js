const paragraphsToType = document.querySelectorAll(".type-text");
const choicesToType = document.querySelectorAll(".choice");
const lineBreakOpenTag = "<";
const lineBreakTagLength = 3;
let typing = false;
let isNewPage = false;
const typingSpeed = 30;
const timeBetweenChecks = 30;

// Check if element is still on page
function elementIsOnPage(element) {
  return document.getElementById(element.id);
}

// Text typing animation
function type(index, element, text) {
  if (
    !elementIsOnPage(element) &&
    document.querySelector(".choices")?.id.charAt(0) !== element.id.charAt(0)
  )
    return; // if element is no longer on the page stop typing
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
    finish(typing);
  }
}

export function playTypeAnimation(textElement) {
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
  const promise = new Promise((success) => doneTyping(success));
  return promise;
}

export async function typeParagraphs(paragraphs = paragraphsToType) {
  for (let i = 0; i < paragraphs.length; i++) {
    const paragraphPromise = await playTypeAnimation(paragraphs[i]);
    console.log(`${paragraphs[i].innerText} is typing: ${paragraphPromise}`);
  }
}

export async function typeChoices(choices = choicesToType) {
  for (let i = 0; i < choices.length; i++) {
    // Reveal the icon
    choices[i].style.opacity = 1;

    // Type out the text
    const choicePromise = await playTypeAnimation(choices[i].lastElementChild);
    console.log(`${choices[i].innerText} is typing: ${choicePromise}`);
  }
}

async function typePageContent(newPage = false) {
  // Clear any typing activity
  isNewPage = newPage;
  typing = false;

  await typeParagraphs();

  await typeChoices();
}

typePageContent(); // Treats first page as "not" new page

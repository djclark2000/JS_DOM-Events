console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const accessNode1 = document.getElementById("node1"); 
accessNode1.textContent = `I used the getElementById("node1") method to access this`; 

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2 = document.getElementsByClassName("node2");
node2[0].textContent = `I used the getElementsByClassName("node2") to access this`; 

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const allH3Tags = document.getElementsByTagName("h3"); 

for (let i = 0; i < allH3Tags.length; i++) {
    allH3Tags[i].textContent = `I used the getElementByTagName("h3") method to access all of these`; 

}





/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const newParagraph = document.createElement("p"); 
newParagraph.textContent = "This node was created using the createElement() method"; 
// TODO: Append the created node to the parent node using the element.appendChild() method
const exer2Div = document.querySelector("#parent"); 
exer2Div.appendChild(newParagraph); 

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const newAnchor = document.createElement("a"); 
newAnchor.textContent = "I am an <a> tag";

// BONUS: Add a link href to the <a>
newAnchor.href = "https://truecoders.io";


// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
exer2Div.insertBefore(newAnchor, newParagraph); 





/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let oldChild = document.querySelector("#N1");
let newChild = document.createElement("p"); 
newChild.textContent = "I'll replace the Child Node #1.";
let parent = document.querySelector("#exercise-container3");
parent.replaceChild(newChild, oldChild);  

// TODO: Remove the "New Child Node"
parent.removeChild(newChild);
//newChild.remove(); 





/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let ul = document.createElement("ul"); 


// TODO: Iterate over the array values, and create a list item element for each
// let li = document.getElementsByTagName("ul"); 
 
for (let i = 0; i < list.length; i++){
    let li = document.createElement("li");
    li.innerText = list[i];
    // TODO: Append the new list items to the unordered list element
    ul.appendChild(li);   
}

//or
/*
for (const item of list){
    const li = document.createElement("li");
    li.textContent = item; 
    ul.appendChild(li); 
}*/

//or
/*
list.forEach((element, index, array)=>{
    let li = document.createElement("li");
    li.innerText = element;
    ul.appendChild(li); 
}); */

    
// TODO: Append the unordered list to the `div#container` under exercise 4 
let parentOfUl = document.querySelector("#container");
parentOfUl.appendChild(ul); 

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show(){
    //create the modal background div:
    let modalBG = document.createElement("div");
    //assign an id to the background div for styling:
    modalBG.setAttribute("id","modal"); 

    //select the parent of modalBG in order to append it:
    let parentOfModalBG = document.querySelector(".exercise5");
    //append modalBG:
    parentOfModalBG.appendChild(modalBG);

    //create the main modal div and append it to its parent(modalBG);
    let modal = document.createElement("div"); 
    modalBG.appendChild(modal); 
    //assign an id to modal for styling:
    modal.classList.add("modal-card");

    //create a paragraph, nested in modal, and append it to modal: 
    let paragraph = document.createElement("p");
    modal.appendChild(paragraph);
    //add text to paragraph: 
    paragraph.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"; 
    

    //create the close button: 
    //store the newly created Element in a variable:
    const closeButton = document.createElement("button");
    //add an existing class to closeButton: 
    closeButton.classList.add("btn"); 
    //add textContent and style:
    closeButton.textContent = "\327";  //or: closeButton.textContent = "X";
    closeButton.style.fontSize = "1.3rem";
    //append closeButton to its parent (modal):
    modal.appendChild(closeButton); 

    //Add modal close event

    //The method below addresses only the closeButton textContent, 'X'
    /* closeButton.addEventListener("click", ()=>{
        modalBG.remove(); 
    }) */

    //The method below includes the function that allows user to click anywhere exept the modal div to 
    //exit the modal
    modalBG.addEventListener("click", (event)=>{
        if(event.target == modalBG || event.target == closeButton){
        modalBG.remove(); 
    }
    }); 
    
}

//Select the button using its id:
const myButton = document.querySelector("#btn"); 
//Add the eventlistener to the button, so that the user can click to see the modal appear
//When the user clicks, the function show will activate:
myButton.addEventListener("click", show);





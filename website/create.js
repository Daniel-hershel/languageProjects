
/*function to create text elements and any class*/
function createStuff (thing, thingClass, holder) {
// create a new element
var newDiv = document.createElement("div");
//create a text node from the parameter passed to the function
var newContent = document.createTextNode(thing);
// //add the text node to the newly created  element
newDiv.appendChild(newContent);
//add class passed to function 
newDiv.className += thingClass;
//add an id
newDiv.id += thing;
//select the holder created for the element passed as an argument
$holder = $(holder);
//append the newly created div to its holder
$holder.append(newDiv);
};
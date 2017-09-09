//code that will watch for any items in html being changed
//to select by singular id document.getElementById(
//select by plural... 
var newItemCounter = 1;
var ourList = document.getElementById("our-list")

var ourButton = document.getElementById("our-button");
//creating a variable that selects headline element
var ourHeadline = document.getElementById("our-headline");

//collection of all five of the elements, chain on getElementsByTagName
var listItems = document.getElementById("our-list").getElementsByTagName("li");

//because we have 5 items, could hard code i < 5, but better to have javascript find dynamically
//for (i = 0; i < 5) {    ..instead we will increment by 1 each time loop runs..
// Letting js look out for incoming clicks.. click is argument and then activateItem is what we want to happen"
for (i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", activateItem);
}
	//created our own new custom function
	function activateItem() {
		//alert("Click detected!");
		ourHeadline.innerHTML = this.innerHTML;
		//just want to remove a css class from each sibling element eg first item
		for (i = 0; i < listItems.length; i++) {
	listItems[i].classList.remove("active");
		//css
		this.classList.add("active");
	}

ourButton.addEventListener("click", createNewItem);

//we want to add new html to unordered list.
function createNewItem() {
	//don't want to erase/reset existing innerHTML property list...
	//eg...ourList.innerHTHML = "Something new"; so.. += appends extra
	ourList.innerHTML += "<li>Algo nuevo" + newItemCounter + "</li>";
	//Increases createNewItemCounter
	newItemCounter++;
}

}
/* we don't wanna change the text to hello world. Just an example"
for (i = 0; i < listItems.length; i++) {
	listItems[i].innerHTML = "Hello world";
*/

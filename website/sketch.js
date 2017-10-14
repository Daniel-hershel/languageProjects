$.getJSON( "projects.json", function( json ) {
  // console.log(json.projects[1]);

//function to turn each piece into an element on the dom
json.projects.forEach(function(element){
	// console.log(element.title)


	//create a div to hold each project
	var holder = document.createElement('div');
	holder.className += "holder"
	$('#grid').append(holder)

	// creat a title div from element.title
	createWords(element.title, "title", holder)

	// create a description div from element.description
	createWords(element.description, "description", holder)

	//create instructions element from element.instruction
	createWords(element.instruction, "instruction", holder)



	// create a div from element.link
	createMedia(element.link, "media", holder)


})




 });
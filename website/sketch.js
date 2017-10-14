$.getJSON( "projects.json", function( json ) {
  // console.log(json.projects[1]);

//function to turn each piece into an element on the dom

//built in method
json.projects.forEach(function(element){
	console.log(element.title)


	//create a div to hold each project
	var holder = document.createElement('div');
	holder.className += "holder"
	createStuff(element.title, "title", holder)
	$('#grid').append(holder)

	// creat a title div from element.title


	// create a description div from element.description
	// create a div from element.link


})




 });
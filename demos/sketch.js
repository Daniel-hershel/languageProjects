$(document).ready(function() {
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



//implement wayholder 
//implement solution from audre lorde scroller
	// make previous content fade out and new content fade in

	console.log($('.holder'))
var waypoints = $('.holder').waypoint({
handler: function(direction)

{

$.Velocity.RegisterUI("appear", {
defaultDuration: 100,
calls: [
[ { scale: 1, opacity: 1},1, 
{easing: "easeInSine", delay:0, sequenceQueue: false} ],
]
});

$.Velocity.RegisterUI("dissappear", {
defaultDuration: 100,
calls: [
[ { scale: 0,  opacity: 0},1, 
{easing: "easeInSine", delay:0, sequenceQueue: false} ],
]
});

let $it = $(this)
      console.log($it)
    if (direction === 'down'){
    // console.log(this.element.id + "down")
      // velcoity animation to reveal

      



      $(this.element).velocity({

      	p: 'appear',
      	o:{duration: 500}
      })


    }

    else {
    console.log(this.element.id + "up")
    $(this.element).velocity({

      	p: 'dissappear',
      	o:{duration: 500}
      })


    }


    
  },
    offset: '65%'
})


 });


// var waypoints = $('.title').waypoint({
// handler: function(direction)
// {
// 	console.log(direction)

// },
// offset: '60%'
// })


})
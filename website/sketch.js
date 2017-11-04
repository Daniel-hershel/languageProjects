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


/* True Simulacrum */
// make exact copy and then scale:deep full clone
// $('.holder').clone().removeClass('holder').addClass('simulacrum').appendTo('#simGrid')

// $('.simulacrum').velocity({
// p: {scale: .5},
// o:{easing: "easeInSine"}
// })



/* Mutated Simulacrum */

// Option 2: iterate through json a second time and create variation of original thing
json.projects.forEach(function(element){
  // console.log(element.title)


  //create a div to hold each project
  var miniHolder = document.createElement('div');
  miniHolder.className += "miniHolder"
  $('#simGrid').append(miniHolder)

  // creat a title div from element.title
  createWords(element.title, "title", miniHolder)

  // create a description div from element.description
  createWords(element.description, "description", miniHolder)

  //create instructions element from element.instruction
  // createWords(element.instruction, "instruction", miniHolder)



  // create a div from element.link
  createMedia(element.link, "media", miniHolder)



})

$('.miniHolder').velocity({
p: {scale: .65,
margin: "-=3em"
},
o:{easing: "easeInSine"}
})

$('.holder').velocity({
p: {scale: .1},
o:{easing: "easeInSine"}
})
//implement wayholder 
//implement solution from audre lorde scroller
	// make previous content fade out and new content fade in

	console.log($('.holder'))


var waypoints = $('.holder').waypoint({
handler: function(direction)

{

$.Velocity.RegisterUI("appear", {
defaultDuration: 500,
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
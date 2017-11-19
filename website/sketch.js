$(document).ready(function() {
$.getJSON( "projects.json", function( json ) {
  // console.log(json.projects[1]);

//function to turn each piece into an element on the dom
json.projects.forEach(function(element){
	// console.log(element.title)

  var miniHolder = document.createElement('div');
  miniHolder.className += "miniHolder"
  $('#simGrid').append(miniHolder)

  // creat a title div from element.title
  createWords(element.title, "miniTitle", miniHolder)

  // create a description div from element.description
  // createWords(element.description, "description", miniHolder)

  //create instructions element from element.instruction
  // createWords(element.instruction, "instruction", miniHolder)


  // create a div from element.link
  createMedia(element.link, "miniMedia", miniHolder)
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

//connect them here or in the create functions?

//then an event listener that says dance on hover and goes to link on pressed.
//is the target the div or the title? Try with title first

// title is an a link element with its href to its root element (the element of which it is a shallow simulacra)

//look up shiffmans syllabus for demo

//then each miniTitle element on hover {
  //dance
    // open up? get bigger?
// }


})


/* True Simulacrum */
// make exact copy and then scale:deep full clone
// $('.holder').clone().removeClass('holder').addClass('simulacrum').appendTo('#simGrid')

// $('.simulacrum').velocity({
// p: {scale: .5},
// o:{easing: "easeInSine"}
// })



/* Mutated Simulacrum */
// console.log()

// Option 2: iterate through json a second time and create variation of original thing
// $.Velocity.hook($('.holder'), "borderColor", "white")

// $('miniHolder').css("box-shadow", "0em 0em 0em #8DC0E7")

$('.miniHolder').hover(
// $('.miniTitle').hover(
 function (){
  //on mouse enter
  
  let elem = this
  console.log(this)
  // console.log(elem.parent())
  // set the box shadow color of each of the minTitles

    $(this).velocity({
  // $(this).parent().velocity({
    p:{
      scale: '+=10%',
      // transformOriginZ: '-=110%',
      translateY: '-=1.5em',
      boxShadowX: '+=1em',
      boxShadowY: '+=1em',
      boxShadowBlur: '+=1em',
      boxShadowSpread: "+=1.5em",
      borderTopWidth: "+=.5em",
      borderLeftWidth: "+=.5em",
      rotateX: -5,
      skewY: -15,
      // margin: "-=1.5em"
      // translateZ: 150

    },
    o:{}
  })

},
function () {
      // $(this).parent().velocity('reverse')
    $(this).velocity('reverse')


  //on mouse exit
}
  )

$('.miniHolder').velocity({
p: {scale: .65,
margin: "-=3em"
},
o:{easing: "easeInSine"}
})


 $('.holder').velocity({p: {scale: .1},
o:{easing: "easeInSine"}
})
//implement wayholder 
//implement solution from audre lorde scroller
	// make previous content fade out and new content fade in

	console.log($('.holder'))


var waypoints = $('.holder').waypoint({
handler: function(direction)
{

// $('.holder').css("box-shadow", "0em 0em 0em #fcfcfc")
// $('.holder').css("color", "#fcfcfc")
$.Velocity.RegisterUI("appear", {
defaultDuration: 1500,
calls: [
[ { scale: 1,
 opacity: 1,
 transformOriginY: '+=20vh',
skewX: [0, 45],

 // boxShadowX: [0, 15],
 // boxShadowBlur: [0, 50],
 // borderRadius: [0, 50]
// easeInOutCirc
},1, 
{easing: "easeInBack", delay:0, sequenceQueue: false} ],
]
});

$.Velocity.RegisterUI("dissappear", {
defaultDuration: 100,
calls: [
[ { scale: 0,  opacity: 0},1, 
{easing: "easeInSine", delay:0, sequenceQueue: false} ],
]
});

// let $it = $(this)
      // console.log($(this.element).prev())
let $prev = $(this.element).prev()
    
    if (direction === 'down'){
      
      $prev.velocity({
        p: 'dissappear',
        o:{duration: 500}
      })

      $(this.element).velocity({
      	p: 'appear',
      	o:{}
      })

    }

    else {
    // console.log(this.element.id + "up")

      $prev.velocity({
        p: 'appear',
        o:{}
      })

    $(this.element).velocity({
      	p: 'dissappear',
      	o:{duration: 500}
      })
    }


  },
    offset: '99%'
})


 });



})
$(document).ready(function() {
$.getJSON( "projects.json", function( json ) {
  // console.log(json.projects[1]);

//function to turn each piece into an element on the dom
let things = []
json.projects.forEach(function(element, index){

  let objecMaker = {
    "title": element.title,
    "link": element.link,
    "description": element.description,
    "media": element.media,
    "instruction": element.instruction,
    "index": index

  }

  things.push(objecMaker)
})


things.forEach(function(element, index){

  /* Create the mini version */
  let miniHolder = document.createElement('div');
  // let miniHolder = $('<a href =#' + "holder"+ index + "></a>")
  miniHolder.className += "miniHolder"

  $('#simGrid').append(miniHolder)

  // creat a mini title div from element.title
  createWords(element.title, "miniTitle", miniHolder)

  //this title is an alink to the id of its large version

  // create a div from element.link
  createMedia(element.link, "miniMedia", miniHolder)

  $(miniHolder).click(function(){

    let stageGrabber = $('#stage')
  let stageHolder = document.createElement('div');
stageHolder.className += 'simulacrum'
    console.log(things[index].title)
    stageGrabber.empty()

    stageGrabber.append(stageHolder)

  createWords(things[index].title, "stageTitle", stageHolder)

  createWords(things[index].description, "stageDescription", stageHolder)
  createWords(things[index].instruction, "stageInstruction", stageHolder)
  createMedia(things[index].link, "stageMedia", stageHolder)

  
  })


  /* Create the big version of each */

  //create a div to hold each project
  var holder = document.createElement('div');
  holder.className += "holder"
  holder.id = "holder" + index
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
$('.miniHolder').velocity({
p: {scale: .25,
margin: "-=4em"
},
o:{easing: "easeInSine"}
})

// $('.title').velocity({
// p: {
//   fontSize: '+=2em',
// // margin: "-=4em"
// },
// o:{easing: "easeInSine"}
// })
$('.miniHolder').hover(
// $('.miniTitle').hover(
 function (){
  //on mouse enter
  
  let elem = $(this)
  let that = $(this).siblings()
  console.log(elem)
  console.log(that)
  // console.log(this)
  // console.log(elem.parent())
  // set the box shadow color of each of the minTitles

that.velocity({
  p: {
    scale: .1, 
    opacity:.1, 
    margin: '-=4em'
  }
})
    $(this).velocity({
    p:{
      scale: .9,
      // transformOriginZ: '-=110%',
      // translateY: '-=1.5em',
      width: '+=4em',
      height: '+=4em',
      padding: '-=2em',
      // boxShadowX: '+=.1em',
      // boxShadowY: '+=.1em',
      // boxShadowBlur: '+=1em',
      boxShadowSpread: "+=1.5em",
      // borderTopWidth: "+=.5em",
      // borderLeftWidth: "+=.5em",
      rotateX: -5,
      // skewY: -15,
      // margin: "-=1.5em"
      // translateZ: 150

    },
    o:{}
  })

},
function () {
      // $(this).parent().velocity('reverse')
    $(this).velocity('reverse')
    $(this).siblings().velocity('reverse')


  //on mouse exit
}
  )




 $('.holder').velocity({p: {scale: 1},
o:{easing: "easeInSine"}
})
//implement wayholder 
//implement solution from audre lorde scroller
	// make previous content fade out and new content fade in

	// console.log($('.holder'))


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
[ { scale: 1,  opacity: 0},1, 
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
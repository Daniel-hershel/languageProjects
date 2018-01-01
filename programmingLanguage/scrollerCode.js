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
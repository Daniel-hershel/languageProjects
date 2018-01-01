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

  let icon = $('<img src = "clickWhite.svg" class = "icon">')
  $(miniHolder).append(icon)

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

  })


$('.miniHolder').hover(
// $('.miniTitle').hover(
 function (){
  //on mouse enter
  
  let elem = $(this)
  let that = $(this).siblings()
  console.log(elem)
  console.log(that)


// that.velocity({
//   p: {
//     scale: .1, 
//     opacity:.1, 
//     margin: '-=4em'
//   }
// })
    $(this).velocity({
    p:{
      // scale: .9,
      // transformOriginZ: '-=110%',
      // translateY: '-=1.5em',
      // width: '+=4em',
      // height: '+=4em',
      // padding: '-=2em',
      // boxShadowX: '+=.5em',
      // boxShadowY: '+=.5em',
      // boxShadowBlur: '+=1em',
      // boxShadowSpread: "+=.5em",
      // borderTopWidth: "+=.5em",
      // borderLeftWidth: "+=.5em",
      rotateX: -5,
      // rotateY: '30deg',
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
    // $(this).siblings().velocity('reverse')


}
  )



 });


//  $('.miniMedia').click(function(){

//     let stageGrabber = $('#stage')
//   let stageHolder = document.createElement('div');
// stageHolder.className += 'simulacrum'
//     console.log(things[index].title)
//     stageGrabber.empty()

//     stageGrabber.append(stageHolder)

//   createWords(things[index].title, "stageTitle", stageHolder)

//   createWords(things[index].description, "stageDescription", stageHolder)
//   createWords(things[index].instruction, "stageInstruction", stageHolder)
//   createMedia(things[index].link, "stageMedia", stageHolder)

  
//  })

})

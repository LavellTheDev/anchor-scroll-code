//Project Name:
//Client Name:
//Author:
//Dev @ RC in Boston

///-----------------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///---------------------------------------------------------///
//
//
//
//
//
//
//
//
//
//
///--------------------------------------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///-------------------------------------------------------------------------------///
var marginY = 0;
var destination= 0;
var speed = 5;
var scroller = null;

function initScroll(elementId){
  destination = document.getElementById(elementId).offsetTop;

  scroller = setTimeout(function(){
    initScroll(elementId);
  },1);

  marginY = marginY + speed;

  if (marginY >= destination) {
    clearTimeout(scroller);
  }

  window.scroll(0, marginY);
  //console.log(destination)
}

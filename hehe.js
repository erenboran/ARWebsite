const icons = [
  target.getObject("icon-email"), 
  target.getObject("icon-website"), 
  target.getObject("instagram-icon"), 
  target.getObject("icon-facebook"), 
]
function openLink() {
  window.open("https://www.instagram.com/", "_blank");
}
function onClick( {object} ) {
  // this event is called when any object from the scene is being clicked (i.e. tapped)
  if (object.id === 'instagram-icon') { 
    window.open("https://www.instagram.com/", '_blank');
    console.log("eren");
  }
}
const myButton = document.querySelector(".navButton")
const myNav = document.querySelector("body > div.container > nav")


myButton.addEventListener("mousedown", () => {
myNav.classList.remove("nav-is-closed");
myNav.classList.add("nav-is-open")

})
const closeButton = document.querySelector(".closebutton")
closeButton.addEventListener("mousedown", () => {
  myNav.classList.remove("nav-is-open");
  myNav.classList.add("nav-is-closed")
})


var navRows = document.getElementsByClassName('navRow');

  for (let i = 0; i < navRows.length; i++) {
    navRows[i].addEventListener("mousedown", function() {
      
      //myNav.style.color = "blue";
  
    });
  
}
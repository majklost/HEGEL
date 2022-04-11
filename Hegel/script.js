"use strict";

const container = document.querySelector(".friendList");
const loginBTN = document.querySelector(".login");
const app = document.querySelector(".overlay");
console.log(app);


const data = [{name: "Friedrich Hölderlin", imageSource: "/static/přátelé/Holderlin.jpg"},{name: "Friedrich Schelling", imageSource: "/static/přátelé/Schellig.jpg" }, {name:"Johann Gottlieb Fichte", imageSource: "static/přátelé/Johann_Gottlieb_Fichte.jpg" }, {name: "Goethe", imageSource: "static/přátelé/johann-wolfgang-goethe.jpg"}, 
{name: "Friedrich Immanuel Niethammer", imageSource: "static/přátelé/Friedrich_Immanuel_Niethammer_(Radierung).jpg"}
];



const generateMarkup = function(name, src){ return `<div class="friend"><img class="friend__photo" src=${src} alt=""><p class="friend__name">${name}</p></div></div>`;}

const renderFriends = function(){
    container.innerHTML = "";
    data.forEach((friend)=> {
        container.insertAdjacentHTML("beforeend", generateMarkup(friend.name, friend.imageSource ? friend.imageSource : "/static/img_avatar.png" ))
    })
    
}

renderFriends()

loginBTN.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("Přihlašování momentálně není dostupné, pracujeme na tom...");
})

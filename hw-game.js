btnBgColor = document.querySelector('#randomColorsBtn');
bodyBgcolor = document.querySelector('.mini-games');

console.log(btnBgColor)

let randColor = () =>{
let rand = Math.floor((Math.random() * 1000000) + 1);
return rand;
}


function changeBackground(color) {
   
bodyBgcolor.style.backgroundColor = color;
}


btnBgColor.addEventListener('click', function() {
randColor()
let color1 = (`#${randColor()}`)
console.log(color1)
changeBackground(color1)
});
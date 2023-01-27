let value1 = document.querySelector(".valueprogress1")
let value2 = document.querySelector(".valueprogress2")
let value3 = document.querySelector(".valueprogress3")
let meter1 = document.querySelector(".meter1")
let meter2 = document.querySelector(".meter2")
let meter3 = document.querySelector(".meter3")

let startvalue1 = 0
let endvalue1 = 80
let speed1 = 10

let letsgo1 = setInterval(() => {
    startvalue1++
    meter1.style.background = `conic-gradient(#4a3b7a ${startvalue1 * 3.6}deg, white 0deg)`
    if (startvalue1 == endvalue1) {
        clearInterval(letsgo1)        
    }
    value1.textContent = `${startvalue1}%`
}, speed1);

let startvalue2 = 0
let endvalue2 = 80
let speed2 = 10

let letsgo2 = setInterval(() => {
    startvalue2++
    meter2.style.background = `conic-gradient(#4a3b7a ${startvalue2 * 3.6}deg, white 0deg)`
    if (startvalue2 == endvalue2) {
        clearInterval(letsgo2)
    }
    value2.textContent = `${startvalue2}%`
}, speed2);

let startvalue3 = 0
let endvalue3 = 75
let speed3 = 10

let letsgo3 = setInterval(() => {
    startvalue3++
    meter3.style.background = `conic-gradient(#4a3b7a ${startvalue3 * 3.6}deg, white 0deg)`
    if (startvalue3 == endvalue3) {
        clearInterval(letsgo3)
    }
    value3.textContent = `${startvalue3}%`
}, speed3);


let work = document.querySelector(".work")
let quality = ()=>{
    setTimeout(() => {
        work.innerHTML = "DEVELOPER"
    }, 0);
    setTimeout(() => {
        work.innerHTML = "DESIGNER"
    }, 4000);
}
setInterval(quality, 8000);
quality()

var formbutton = document.getElementById('formbutton')
formbutton.addEventListener('click',()=>{
    alert("error, please click on the email id")
})
hello



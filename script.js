let startmenu=document.getElementsByClassName("startmenu")[0]
let taskbar=document.getElementsByClassName("icon")[0]

taskbar.addEventListener('click',()=>{
    if (startmenu.style.bottom=="50px") {
        startmenu.style.bottom="-650px"
    } else {
        startmenu.style.bottom="50px"
    }
})
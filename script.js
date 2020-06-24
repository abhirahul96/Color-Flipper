var simple=document.getElementById('btn')
var hex=document.getElementById('btn2')

if(simple!=null){
    simple.addEventListener('click',changecolor)
}
if(hex!=null){
    hex.addEventListener('click',changecolor2)
}



function changecolor(){
    var r,g,b
    var r=Math.floor(Math.random()*255)+1
    var g=Math.floor(Math.random()*255)+1
    var b=Math.floor(Math.random()*255)+1
    var hex=rgbtohex(r,g,b)
    document.querySelector('main').style.background=`rgb(${r},${g},${b})`
    document.querySelector('main .color').textContent=`rgb(${r},${g},${b})`
}




function changecolor2(){
    var r,g,b
    var r=Math.floor(Math.random()*255)+1
    var g=Math.floor(Math.random()*255)+1
    var b=Math.floor(Math.random()*255)+1
    var hex=rgbtohex(r,g,b)
    document.querySelector('main').style.background=`rgb(${r},${g},${b})`
    document.querySelector('main .color').textContent=hex
}




function rgbtohex(r,g,b){
    return '#'+tohex(r)+tohex(g)+tohex(b)
}

function tohex(s){
    var hex=s.toString(16)
    return hex.length==1?"0"+hex:hex;
}
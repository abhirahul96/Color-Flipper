var simple=document.getElementById('btn')
var hex=document.getElementById('btn2')

if(simple!=null){
    simple.addEventListener('click',changecolor)
}
if(hex!=null){
    hex.addEventListener('click',changecolor2)
}



function changecolor(){
    var rgb
    // r=Math.floor(Math.random()*255)+1
    // g=Math.floor(Math.random()*255)+1
    // b=Math.floor(Math.random()*255)+1
    rgb=getrandom()
    document.querySelector('main').style.background=`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
    document.querySelector('main .color').textContent=`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
}




function changecolor2(){
    var rgb,hex
    rgb=getrandom()
    hex=rgbtohex(rgb[0],rgb[1],rgb[2])
    document.querySelector('main').style.background=hex
    document.querySelector('main .color').textContent=hex
}



function getrandom(){
    return [Math.floor(Math.random()*255)+1,Math.floor(Math.random()*255)+1,Math.floor(Math.random()*255)+1]
}





function rgbtohex(r,g,b){
    return '#'+tohex(r)+tohex(g)+tohex(b)
}

function tohex(s){
    var hex=s.toString(16)
    return hex.length==1?"0"+hex:hex;
}
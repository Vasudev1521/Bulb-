let btn = document.getElementById('on-button') 
let bulb = document.getElementById('bulb')
document.addEventListener('click',buttonon)

function buttonon(e){
    if(btn.textContent.includes('On')){
    bulb.src = "on.jpg"
    btn.textContent = "Turn Off"}
    
    else{         
    bulb.src = "off.jpg"
    btn.textContent = "Turn On" 
    }

       
}

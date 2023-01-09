const reset = document.getElementById('reset')
const pagerScreen = document.getElementById('pager-screen')
const phoneScreen = document.getElementById('phone-screen')
const pageUser = document.getElementById('enter')

reset.addEventListener('click',function(){
pagerScreen.innerHTML = " "
phoneScreen.innerHTML = " "
})

pageUser.addEventListener('click',function(){
    pagerScreen.innerHTML=phoneScreen.innerHTML
})

document.addEventListener('click',(e)=>{
if(e.target.hasAttribute('value')){
    phoneScreen.innerHTML+=e.target.value
}
})
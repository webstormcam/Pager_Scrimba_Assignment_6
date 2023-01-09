const reset = document.getElementById('reset')
const pagerScreen = document.getElementById('pager-screen')
const phoneScreen = document.getElementById('phone-screen')


reset.addEventListener('click',function(){
pagerScreen.innerHTML = " "
phoneScreen.innerHTML = " "
})

document.addEventListener('click',(e)=>{
if(e.target.hasAttribute('value')){
    phoneScreen.innerHTML+=e.target.value
}
})
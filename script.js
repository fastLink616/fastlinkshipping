
const formTest = document.querySelector('#formEl')
const formItem = document.querySelector('#formItem')
const errMsg = document.querySelector('#errMsg')
const orderInfo = document.querySelector('#orderInfo')
const closeBtn = document.querySelector('.closeBtn')
const closeNav = document.querySelector('.closeNav')
const navBtn = document.querySelector('#navBtn')
const nav = document.querySelector('nav')

formTest.addEventListener('submit', (e) =>{
    e.preventDefault()
    if(formItem.value === '') {
        errMsg.textContent ='this form can\'t be empty'
        errMsg.style.display = 'block'
        setTimeout(() => {
            errMsg.style.display = 'none'
        },3000)
        
    }
else if(formItem.value.toString() === '#1373184882'){
    orderInfo.style.display = 'block'
}
else{
    errMsg.textContent= 'no order with this ID '
    errMsg.style.display = 'block'
    setTimeout(() => {
        errMsg.style.display = 'none'
    },3000)
    
}

})


closeBtn.addEventListener('click', (e) => {
    e.preventDefault() 
    orderInfo.style.display = 'none'
})

closeNav.addEventListener('click', (e) => {
    nav.style.display = 'none'
})

navBtn.addEventListener('click', (e) => {
    nav.style.display = 'block'
})
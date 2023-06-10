const text = document.querySelector('.name')
const email = document.querySelector('.email')
const textImg = document.querySelector('.img')
const bloct = document.querySelector('.block')
const button = document.querySelector('.btn-1')
const buttonTwo = document.querySelector('.btn-2')
const xpr = document.querySelector('.xpr')
const block = document.querySelector('.block')




block.style.display = 'none'

buttonTwo.addEventListener('click',()=>{
    block.style.display = 'block'
})
button.addEventListener('click',()=>{
    if (textImg.value === '' && text.value === '' && email.value === ''){
        alert(404)
    }else{
    block.innerHTML += `<div class="groupTwo d-flex my-4  justify-content-space-between w-100 ">
<img width="70" src="${textImg.value}" style="object-fit: cover" alt="img">
<div class="group-p ">
<p>name:${text.value}</p> 
<p>email:${email.value}</p>
</div>
<button class="del-btn btn btn-danger">delete</button>
</div>`
    textImg.value = ''
    text.value = ''
    email.value = ''
    }
})
xpr.addEventListener('click',()=>{
        bloct.style.display = 'none'
    xpr.style.cursor = 'pointer'
})

block.addEventListener('click',(e)=>{
    if (e.target.classList.contains('del-btn')) {
        e.target.closest('div').remove()
    }
    })



const margarita= document.querySelector ('#margarita')


margarita.addEventListener('click', () => {
    if (margarita.style.border === '5px solid red') {
        margarita.style.border = ''; // Eliminar el borde
    } else {
        margarita.style.border = '5px solid red';
    }
});


const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const num3 = document.querySelector('#num3')

const btnSumar = document.querySelector('#Sumar')

btnSumar.addEventListener('click', () => {
    if (isNaN(num1.value) || num1.value.trim() === '') return alert('El valor del input 1, no es numerico')
        if (isNaN(num2.value) || num2.value.trim() === '') return alert('El valor del input 2, no es numerico')
            if (isNaN(num3.value) || num3.value.trim() === '') return alert('El valor del input 3, no es numerico')

const suma = +num1.value + +num2.value + +num3.value

if (suma <= 10) alert('Tu cantidad de stickers son: ${suma}')
    else alert('Llevas demasiados stickers')

num1.value=''
num2.value=''
num3.value=''
}
)




const select1 = document.querySelector('#primero')
const select2 = document.querySelector('#segundo')
const select3 = document.querySelector('#tercero')
const response = document.querySelector ('#response')
const btn = document.querySelector ('.button')

btn.addEventListener('click', () => {
const pass = select1.value + select2.value + select3.value
console.log(pass)
if (pass == '911' || pass == '714' ){
    response.innerHTML= 'pass correcto'
    response.style.color = 'green'
}
else {
    response.innerHTML= 'pass incorrecto'
    response.style.color = 'red'
}
})




    /*
if (select1.value =< 0  ||  select2.value =< 0  || select3.value =< 0 ) {
    alert('El valor debe ser mayor')
}  else if (select1.value == 9 && select2.value == 1 && select3.value == 1) {
    Response.innerHTML =  'Password correcto'
} else if  (select1.value == 7 && select2.value == 1 && select3.value == 4) {
Response.innerHTML =  'Password correcto 2'
} else {
    Response.innerHTML =  'Password incorrecto '
}
console.log(select1.value)
})*/
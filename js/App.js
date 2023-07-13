// Variables
const tarjeta = document.querySelector('#tarjeta')
const boton = document.querySelector('#btn-abrir-formulario')
const formulario = document.querySelector('#formulario-tarjeta')
const numero = document.querySelector('#tarjeta .numero')
const nombre = document.querySelector('#tarjeta .nombre')
const logo = document.querySelector('#logo-marca')
const firma = document.querySelector('#tarjeta .trasera .firma p')
const mes = document.querySelector('#expiracion .mes')
const year = document.querySelector('#expiracion .year')
const ccv = document.querySelector('#tarjeta .ccv')



const mostrarFrente = () => {
    if(tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active')
    }
}

// Eventos
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active')
}) 

boton.addEventListener('click', () => {
    boton.classList.toggle('active')
    formulario.classList.toggle('active')
})

// Llenar mes
const selectMes = document.querySelector('#selectMes')

for(let i = 1; i <= 12; i++) {
    let option = document.createElement('option')
    option.value = i
    option.textContent = i
    selectMes.appendChild(option)
}

// Llenar year
const yearActual = new Date().getFullYear(),
      yearFuturo = yearActual + 8

      const selectYear = document.querySelector('#selectYear')

for(let i = yearActual; i <= yearFuturo; i++) {
    let option = document.createElement('option')
    option.value = i
    option.textContent = i
    selectYear.appendChild(option)
}

//Input numero de tarjeta

formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value

    formulario.inputNumero.value = valorInput
    // Elimina los espacios (Expresion regular)
    .replace(/\s/g, '')
    // Eliminar las letras
    .replace(/\D/g, '')
    // Espaciar cada 4 numeros
    .replace(/([0-9]{4})/g, '$1 ')
    // Eliminar el ultimo espacio
    .trim()

    numero.textContent = valorInput;

    if(valorInput === '') {
        numero.textContent = '#### #### #### ####'

        logo.innerHTML = ''
    }

    if(valorInput[0] == 4){
        logo.innerHTML = ''
        const imagen = document.createElement('img')
        imagen.src = 'img/logos/visa.png'
        logo.appendChild(imagen)
    }

    if(valorInput[0] == 5) {
        logo.innerHTML = ''
        const imagen = document.createElement('img')
        imagen.src = 'img/logos/mastercard.png'
        logo.appendChild(imagen)
    }

    mostrarFrente();
})

formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput
    .replace(/[0-9]/g, '')

    nombre.textContent = valorInput;
    firma.textContent = valorInput

    if(valorInput === '') {
        nombre.textContent = 'Sin Nombre'
    }

    mostrarFrente()
})

formulario.selectMes.addEventListener('change', (e) => {
    mes.textContent = e.target.value

    mostrarFrente()
})

formulario.selectYear.addEventListener('change', (e) => {
    year.textContent = e.target.value.slice(2)

    mostrarFrente()
})

formulario.inputCCV.addEventListener('keyup', () => {
    if(!tarjeta.classList.contains('active')) {
        tarjeta.classList.toggle('active')
    }

    formulario.inputCCV.value = formulario.inputCCV.value
    .replace(/\D/g, '')
    .replace(/\s/g, '')

    ccv.textContent = formulario.inputCCV.value
})











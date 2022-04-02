"use strict"

const grande = documento.querySelector('.grande')
const punto = documento.querySelector('.punto')

punto.forEach(( cadaPunto, i)=>{
    punto[i].addEventListener('click',()=>{
        let posicion = i
        let operacion = posicion * -50

        grande.style.transform = 'translateX(${ operacion }%)'

        punto.forEach(( cadaPunto , i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
}

)

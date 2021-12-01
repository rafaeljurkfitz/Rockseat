//Desafio Modal
 
const buttonOpenModal = document.querySelector('#openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

function open() {
    modalWrapper.classList.remove('invisible')
}

buttonOpenModal.onclick = open;

document.addEventListener('keydown', function(event){
    if(!modalWrapper.classList.contains('invisible')){
        const isEscKey = event.key === 'Escape'
        if(isEscKey) {
            modalWrapper.classList.add('invisible')
        }
    }
})     

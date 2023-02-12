const cancelBtnEl = document.getElementById('cancel')

const cancel = (event) => {
    event.preventDefault()

    document.location.replace('/api/trip')
} 

cancelBtnEl.addEventListener('click', cancel)
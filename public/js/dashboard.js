const addTripEl = document.getElementById('add-trip')
const getTripEl = document.getElementById('get-trip')

const addTrip = (event) => {
    event.preventDefault()

    document.location.replace('/add-trip')
}



const getTrip = (event) => {
    event.preventDefault()

    document.location.replace('/trip')
}

console.log('Dashboard.js working')
addTripEl.addEventListener('click', addTrip )
getTripEl.addEventListener('click', getTrip )
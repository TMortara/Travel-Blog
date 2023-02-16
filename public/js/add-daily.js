async function newFormHandler(event) {
    event.preventDefault();
   
    const date_created = document.querySelector('input[name="date_created"]').value;
    const places_visited = document.querySelector('input[name="places_visited"]').value;
    const daily_notes = document.querySelector('input[name="daily_notes"]').value;
    const trip_id = document.querySelector('#trip-id').getAttribute('value');

    console.log(trip_id);
   
    const response = await fetch(`/api/add-daily-log`, {
      method: 'POST',
      body: JSON.stringify({date_created,places_visited,daily_notes, trip_id}),
      headers: {'Content-Type': 'application/json'}
    });
   
    if (response.ok) {
      document.location.replace(`/api/trip-details/${trip_id}`);
    } else {
      alert(response.statusText);
    }
  }
   
  document.querySelector('.add-daily-form').addEventListener('submit', newFormHandler);
 
//  const cancelBtnEl = document.getElementById('cancel');
 
//  const cancel = (event) => {
//      event.preventDefault()
 
//      document.location.replace('/api/trip-details');
//  } 
 
//  cancelBtnEl.addEventListener('click', cancel);
async function newFormHandler(event) {
    event.preventDefault();
   
    const dateEl = document.querySelector('input[name="date"]').value;
    const placesVistedEl = document.querySelector('input[name="places-visited"]').value;
    const dailyNotesEl = document.querySelector('input[name="daily-notes"]').value;
   
    const response = await fetch(`/api/trip-details/add-daily`, {
      method: 'POST',
      body: JSON.stringify({date_created,places_visited,daily_notes}),
      headers: {'Content-Type': 'application/json'}
    });
   
    if (response.ok) {
      document.location.replace('/trip-details');
    } else {
      alert(response.statusText);
    }
  }
   
  document.querySelector('.add-daily-form').addEventListener('submit', newFormHandler);
 
 const cancelBtnEl = document.getElementById('cancel');
 
 const cancel = (event) => {
     event.preventDefault()
 
     document.location.replace('/api/trip-details');
 } 
 
 cancelBtnEl.addEventListener('click', cancel);
async function newFormHandler(event) {
    event.preventDefault();
   
    const date_created = document.querySelector('input[name="date_created"]').value;
    const places_visited = document.querySelector('input[name="places_visited"]').value;
    const daily_notes = document.querySelector('input[name="daily_notes"]').value;
   
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
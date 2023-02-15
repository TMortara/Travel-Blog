async function newFormHandler(event) {
    event.preventDefault();
   
    const title = document.querySelector('input[name="trip-title"]').value;
    const location = document.querySelector('input[name="location"]').value;
    const starting_date = document.querySelector('input[name="starting-date"]').value;
    const ending_date = document.querySelector('input[name="ending-date"]').value;
    const trip_description = document.querySelector('input[name="trip-description"]').value;
   
    const response = await fetch(`/api/trip`, {
      method: 'POST',
      body: JSON.stringify({title,location,starting_date,ending_date,trip_description}),
      headers: {'Content-Type': 'application/json'}
    });
   
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
   
  document.querySelector('.new-daily-form').addEventListener('submit', newFormHandler);
 
 const cancelBtnEl = document.getElementById('cancel');
 
 const cancel = (event) => {
     event.preventDefault()
 
     document.location.replace('/api/trip-details');
 } 
 
 cancelBtnEl.addEventListener('click', cancel);
async function newFormHandler(event) {
   event.preventDefault();
  
   const title = document.querySelector('input[name="trip-title"]').value;
   const trip_content = document.querySelector('input[name="trip-content"]').value;
  
   const response = await fetch(`/api/trip`, {
     method: 'POST',
     body: JSON.stringify({title,trip_content}),
     headers: {'Content-Type': 'application/json'}
   });
  
   if (response.ok) {
     document.location.replace('/dashboard');
   } else {
     alert(response.statusText);
   }
 }
  
 document.querySelector('.new-trip-form').addEventListener('submit', newFormHandler);

const cancelBtnEl = document.getElementById('cancel');

const cancel = (event) => {
    event.preventDefault()

    document.location.replace('/api/trip');
} 

cancelBtnEl.addEventListener('click', cancel);

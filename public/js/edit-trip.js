async function editFormHandler(event) {
   event.preventDefault();
  
   const title = document.querySelector('input[name="trip-title"]').value;
   const trip_content = document.querySelector('input[name="trip-content"]').value;
   const id = window.location.toString().split('/')[
     window.location.toString().split('/').length - 1
   ];

   const response = await fetch(`/api/trip/${id}`, {
     method: 'PUT',
     body: JSON.stringify({title,trip_content}),
     headers: {'Content-Type': 'application/json'}
   });
      
   if (response.ok) {
     document.location.replace('/dashboard/');
   } else {
     alert(response.statusText);
   }
 }
  
 document.querySelector('.edit-trip-form').addEventListener('submit', editFormHandler);
"use strict";

// Fetch the list of states on page load
fetch('https://nga-states-lga.onrender.com/fetch')
  .then(response => response.json())
  .then(data => {
    const states = document.getElementById('states');
    // Add states as options to the select dropdown
    data.forEach(state => {
      const option = document.createElement('option');
      option.innerText = state;
      states.appendChild(option);
    });
  })
  .catch(error => console.log(error));

// Event listener for when the state changes
document.getElementById('states').addEventListener('change', function () {
  const selectedState = document.getElementById('states').value;
  console.log('Selected State:', selectedState);
  
  // Clear the previous LGA options
  const lgaSelect = document.getElementById('lga');
  lgaSelect.innerHTML = ''; // This will remove all options in the LGA dropdown
  
  // Fetch the LGAs based on the selected state
  fetch(`https://nga-states-lga.onrender.com/?state=${selectedState}`)
    .then(response => response.json())
    .then(data => {
      // Add LGAs as options to the LGA dropdown
      data.forEach(lga => {
        const option = document.createElement('option');
        option.innerText = lga;
        lgaSelect.appendChild(option);
      });
    })
    .catch(error => console.log(error));
});



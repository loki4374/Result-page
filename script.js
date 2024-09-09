   // Function to display localStorage data
   function displayLocalStorageData() {
    // Get data from localStorage
    var storedData = localStorage.getItem('userData');

    // Check if there is data in localStorage
    if (storedData) {
        var dataArray = JSON.parse(storedData);

        // Check if data is an array
        if (Array.isArray(dataArray)) {
            var table = document.getElementById('dataTable');

            // Loop through the array and create rows dynamically
            dataArray.forEach(function(data) {
                var row = document.createElement('tr');

                // Create table cells (td) and append them to the row
                var semCell = document.createElement('th');
                semCell.textContent = data.sem;
                row.appendChild(semCell);

                var codeCell = document.createElement('th');
                codeCell.textContent = data.code;
                row.appendChild(codeCell);

                var gradeCell = document.createElement('th');
                gradeCell.textContent = data.grade;
                row.appendChild(gradeCell);

                var resultCell = document.createElement('th');
                resultCell.textContent = data.result;
                row.appendChild(resultCell);

                var nameCells = document.querySelectorAll('.displayName');
                nameCells.forEach(function(cell) {
                    cell.textContent = `${data.name}`;
                });

                var numberCells = document.querySelectorAll('.displayNumber');
                numberCells.forEach(function(cell) {
                    cell.textContent = `${data.number}`;
                });

table.appendChild(row);

            });
        } else {
            console.log('Stored data is not an array.');
        }
    } else {
        console.log('No data found in localStorage.');
    }
}

// Call the function to display data when the page loads
window.onload = displayLocalStorageData;
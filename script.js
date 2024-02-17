
// function ajaxcall() {
//     return new Promise(function(resolve, reject) {
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 resolve(JSON.parse(this.responseText));
//             }
//         };

//         xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
//         xhttp.send();
//     })
//     .then(function(data) {
//         var output = '';

//         // Add headings for titles and checkboxes
//         output += '<div class="row" style="border-right: 1px solid #ccc; border-left: 1px solid #ccc;"><div class="col"><h3>Titles</h3></div><div class="col"><h3>Checkboxes</h3></div></div>';

//         // Loop through the data and create columns for each title and checkbox
//         for (let i = 0; i < data.length; i++) {
//             output += '<div class="row"><div class="col-6">' +
//                       '<div class="title" style="border-right: 1px solid #ccc; padding-right: 10px;">' + data[i].title + '</div>' +
//                       '</div>' +
//                       '<div class="col-6">' +
//                       '<div class="form-check" style="padding-left: 10px;">' +
//                       '<input class="form-check-input" type="checkbox" id="todo' + data[i].id + '"';

//             // If todo is completed, mark the checkbox as checked and disabled
//             if (data[i].completed) {
//                 output += ' checked disabled';
//             }

//             output += '></div></div></div>';
//         }

//         document.getElementById("ajres").innerHTML = output;
//         return data;
//     })
//     .then(function(data) {
//         var checkboxes = document.querySelectorAll('.form-check-input:not([disabled])');
//         var completedTasks = 0;

//         checkboxes.forEach(function(checkbox) {
//             checkbox.addEventListener('change', function() {
//                 if (this.checked) {
//                     completedTasks++;
//                     if (completedTasks >= 5) {
//                         alert(`Congrats. ${completedTasks} Tasks have been Successfully Completed`);
//                     }
//                 } else {
//                     completedTasks--;
//                 }
//             });
//         });
//     })
//     .catch(function(error) {
//         console.error(error);
//     });
// }

// // Call the ajaxcall function
// ajaxcall();


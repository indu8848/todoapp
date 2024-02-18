

// function ajaxcall() {
//     return new Promise(function(resolve, reject) {
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4) {
//                 if (this.status == 200) {
//                     resolve(JSON.parse(this.responseText));
//                 } else {
//                     reject('Error fetching data');
//                 }
//             }
//         };

//         xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
//         xhttp.send();
//     });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const ajresDiv = document.getElementById('ajres');

//     const todosLink = document.querySelector('nav a');

//     todosLink.addEventListener('click', function() {
//         ajaxcall()
//             .then(function(todos) {
//                 populateTodos(todos);
//                 addCheckboxListeners();
//             })
//             .catch(function(error) {
//                 console.error('Error fetching todos:', error);
//             });
//     });

//     function populateTodos(todos) {
//         ajresDiv.innerHTML = '';
//         todos.forEach(function(todo) {
//             const todoItem = document.createElement('div');
//             todoItem.classList.add('todo-item');

//             const titleContainer = document.createElement('div');
//             titleContainer.classList.add('todo-title');
//             titleContainer.textContent = todo.title;

//             const checkboxContainer = document.createElement('div');
//             checkboxContainer.classList.add('checkbox-container');
//             const checkbox = document.createElement('input');
//             checkbox.type = 'checkbox';
//             checkbox.disabled = todo.completed; // Disable if task is already completed
//             checkbox.checked = todo.completed;

//             checkboxContainer.appendChild(checkbox);

//             todoItem.appendChild(titleContainer);
//             todoItem.appendChild(checkboxContainer);

//             ajresDiv.appendChild(todoItem);
//         });
//     }

//     function addCheckboxListeners() {
//         const checkboxes = ajresDiv.querySelectorAll('.checkbox-container input[type="checkbox"]');
//         let uncheckedCount = 0;

//         checkboxes.forEach(function(checkbox) {
//             checkbox.addEventListener('change', function() {
//                 if (!this.checked) {
//                     uncheckedCount++;
//                     if (uncheckedCount >= 5) {
//                         alert('Congrats! You have completed 5 tasks.');
//                         // Reset the unchecked count
//                         uncheckedCount = 0;
//                         checkboxes.forEach(function(checkbox) {
//                             checkbox.checked = true; // Reset all checkboxes to checked state
//                         });
//                     }
//                 }
//             });
//         });
//     }
// });
 



function ajaxcall() {
    return new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject('Error fetching data');
                }
            }
        };

        xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
        xhttp.send();
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(function() {
        notification.remove();
    }, 3000); // Remove the notification after 3 seconds
}

document.addEventListener('DOMContentLoaded', function() {
    const ajresDiv = document.getElementById('ajres');

    const todosLink = document.getElementById('loadTodos'); // Get the Todos link by its id

    todosLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        ajaxcall()
            .then(function(todos) {
                populateTodos(todos);
                addCheckboxListeners();
            })
            .catch(function(error) {
                console.error('Error fetching todos:', error);
            });
    });

    function populateTodos(todos) {
        ajresDiv.innerHTML = '';
        todos.forEach(function(todo) {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');

            const titleContainer = document.createElement('div');
            titleContainer.classList.add('todo-title');
            titleContainer.textContent = todo.title;

            const checkboxContainer = document.createElement('div');
            checkboxContainer.classList.add('checkbox-container');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.disabled = todo.completed; // Disable if task is already completed
            checkbox.checked = todo.completed;

            checkboxContainer.appendChild(checkbox);

            todoItem.appendChild(titleContainer);
            todoItem.appendChild(checkboxContainer);

            ajresDiv.appendChild(todoItem);
        });
    }

    function addCheckboxListeners() {
        const checkboxes = ajresDiv.querySelectorAll('.checkbox-container input[type="checkbox"]');
        let uncheckedCount = 0;

        checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', function() {
                if (!this.checked) {
                    uncheckedCount++;
                    if (uncheckedCount >= 5) {
                        showNotification('Congrats! You have completed 5 tasks.');
                        // Reset the unchecked count
                        uncheckedCount = 0;
                        checkboxes.forEach(function(checkbox) {
                            checkbox.checked = true; // Reset all checkboxes to checked state
                        });
                    }
                }
            });
        });
    }
});

//input field 

//list field
let list = document.querySelector('#list');
//last element 
let before = document.querySelector('#lastli');
//submit button
let button = document.querySelector('#submit1');

button.addEventListener('click', runEvent);

function runEvent(e) {
    e.preventDefault();
    // list creation
    let newList = document.createElement('li');
    newList.className = "list-group-item list-group-item-dark";
    newList.style.color = "Black";
    newList.style.fontFamily = "Verdana";
    let input = document.querySelector('#input1').value;

    //button creation
    let newButton = document.createElement('button');
    newButton.className = "btn btn-danger btn-sm";
    newButton.style.float = "right";
    newButton.append("X");

    newList.append(input);
    //console.log(newList);
    list.insertBefore(newList, before);
    newList.insertAdjacentElement("beforeend", newButton);
}

let deleteBtn = document.querySelector('ul');
deleteBtn.addEventListener('click', deleteEvent);

function deleteEvent(e) {
    if (e.target.classList.contains('btn')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            list.removeChild(li);
        }
    }
}
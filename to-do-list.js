const arr = [];


function rendertodolist(){
    let todolisthtml = "";

for (let i = 0; i < arr.length; i++){
    const todo = arr[i];
    const name = todo.name;
    const date = todo.date;
    
    const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button onclick = "arr.splice(${i},1);
        rendertodolist();"
        >delete</button>
    `;
    todolisthtml += html;
}


document.querySelector('.display-todo').innerHTML = todolisthtml;
}







function addtoDo(){
    const arrinput = document.querySelector('.arr-input');
    const name = arrinput.value;
    const dateinput = document.querySelector('.js-dueDate');
    const date = dateinput.value;
    arr.push({
        name:name,
        date:date
    });
    console.log(arr);
    arrinput.value = '';
    rendertodolist();
}


const button = document.getElementById('button')
let task = document.getElementById('task')
let teskList = document.querySelector('.task-list')

button.addEventListener('click', function () {

    if (task.value === '') {
        alert("Digite alguma tarefa")
    } else {
        let newTask = document.createElement('li')
        let newTaskText = document.createElement('span')
        newTaskText.innerText = task.value
        let newTaskBtn = document.createElement('button')
        newTaskBtn.type = 'button'
        newTaskBtn.innerText = 'X'
        newTaskBtn.addEventListener('click', function(){
            teskList.removeChild(newTask)
        })
        
        newTask.append(newTaskText, newTaskBtn)
        teskList.append(newTask)

        task.value = ''
    }
})
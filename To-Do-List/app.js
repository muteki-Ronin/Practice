class Todo {
  constructor(obj) {
    this.input = obj.input;
    this.btnCreate = obj.btnCreate;
    this.btnAll = obj.btnAll;
    this.btnNotChecked = obj.btnNotChecked;
    this.taskList = obj.taskList;
    this.startMessage = obj.startMessage;
    this.tasks = JSON.parse(localStorage.getItem('Todo')) || [];
    this.task = {};

    this.addEvent();
    this.render();
  }

  addEvent() {
    this.btnCreate.addEventListener('click', (event) => {
      this.createTask(this.input.value);
      this.input.value = "";
      this.input.focus();
    });

    this.btnAll.addEventListener('click', (event) => {
      console.log('Btn-All');
    });

    this.btnNotChecked.addEventListener('click', (event) => {
      console.log('Btn-btnNotChecked');
    });
  }

  createTask(inputValue) {
    this.task = {
      taskId: Date.now(),
      taskValue: inputValue,
      taskChecked: false,
    }

    this.tasks.push(this.task);
    localStorage.setItem('Todo', JSON.stringify(this.tasks));
    this.render();
  }

  render() {
    this.taskList.innerHTML = "";
    this.tasks.forEach((task) => {
      this.taskList.innerHTML += `
           <div class="task__list-element" data-taskId="${task.taskId}">
              <span class="task__list-span" contenteditable="false">${task.taskValue}</span>
              <button class="js--btn__edit-task btn btn-outline-warning btn-sm">Edit</button>
              <button class="js--btn__del-task btn btn-outline-danger btn-sm">Delete</button>
           </div>`;
    });
    this.editTask();
    this.deleteTask();
  }

  editTask() {
    this.taskList.addEventListener('click', (event) => {
      if (event.target.classList.contains('js--btn__edit-task')) {
        this.editable = event.target.previousElementSibling;
        if (this.editable.contentEditable === 'false') {
          event.target.innerText = 'SAVE';
          this.editable.contentEditable = 'true';
        } else {
          event.target.innerText = 'Edit';
          this.editable.contentEditable = 'false';
          this.tasks.find((item) => {
            if (item.taskId === +event.target.parentElement.dataset.taskid) {
              item.taskValue = this.editable.innerText;
              localStorage.setItem('Todo', JSON.stringify(this.tasks));
            }
          });
        }
      }
    }
    );
  }

  deleteTask() {
    this.taskList.addEventListener('click', (event) => {
      if (event.target.classList.contains('js--btn__del-task')) {
        event.target.parentElement.remove();
        this.tasks.find((item, index) => {
          if (item.taskId === +event.target.parentElement.dataset.taskid) {
            return this.tasks.splice(index, 1);
          }
        });
        localStorage.setItem('Todo', JSON.stringify(this.tasks));
      }
    });
  }
}

const newTodo = new Todo({
  input: document.querySelector('.js--input'),
  btnCreate: document.querySelector('.js--btn__create'),
  btnAll: document.querySelector('.js--btn__all'),
  btnNotChecked: document.querySelector('.js--btn__not-checked'),
  taskList: document.querySelector('.js--task__list'),
  startMessage: document.querySelector('.js--start__message'),
});











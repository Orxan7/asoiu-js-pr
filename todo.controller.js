import todoModel from './todo.model.js';
import todoView from './todo.view.js';


class todoController {
    constructor() {
        this.model = new todoModel()
        this.view = new todoView()
        this.view.showTodos(this.model.todos)
        this.eventListener()
    }


    eventListener(){
        document.querySelector('main').addEventListener('click', (event)=>{
            if(event.target.className=="container__button_text" || event.target.className=="container__button_first" 
            || event.target.className=="container__button_second"){
                this.addButton()
            }
            else if(event.target.className=="container__todos_delete"){
                this.deleteButton(event.target)
            }
            else if(event.target.className=="container__todos_input"){
                this.inputListener()
            }
            else if(event.target.className=="container__sort"){
                this.sortButton()
                console.log(1)
            }
        })
    }

    inputListener(){
        document.querySelectorAll('.container__todos_input').forEach((element)=>{
            element.addEventListener('input', (event)=>{
                this.editButton(element, event.target.value)
            })
        })
    }
    addButton(){
        this.model.addTodo()
    }

    sortButton(){

    }

    deleteButton(event){
        console.log(Array.from(event.parentNode.parentNode.children).indexOf(event.parentNode));
        this.model.deleteTodo(Array.from(event.parentNode.parentNode.children).indexOf(event.parentNode)+1)
    }

    editButton(event, eventl){
        console.log(Array.from(event.parentNode.parentNode.children).indexOf(event.parentNode)+1,eventl)
        this.model.editTodo(Array.from(event.parentNode.parentNode.children).indexOf(event.parentNode)+1, eventl)        
    }
  }

export default todoController;
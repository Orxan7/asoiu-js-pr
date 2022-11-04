import todoView from './todo.view.js';

class todoModel {
    constructor() {
      this.todos = [
        {
          id:1,
          text: ""
        }
      ]
      this.view = new todoView()
    }
  
    addTodo() {
      const todo = {
        id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
        text: "",
      }
      
      this.todos.push(todo)
      
      this.view.showTodos(this.todos)
    }
  
    editTodo(id, updatedText) {
      this.todos = this.todos.map(todo =>
        todo.id === id ? { id: todo.id, text: updatedText} : todo
      )
    }
  
    deleteTodo(id) {
      if(this.todos.length>1){
      this.todos.splice(id-1, 1)
      this.view.showTodos(this.todos)
      console.log(this.todos)
    }
  }
  }

export default todoModel;
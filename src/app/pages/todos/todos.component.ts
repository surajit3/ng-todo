import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  // todos = ['abc', 'xyz'];
  userInput = '';
  todos: { todo: string; status: string }[] = [];
  isEdit = false; editId = -1;

  constructor() {
    this.loadTodos();
  }

  loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    this.todos = storedTodos ? JSON.parse(storedTodos) : [];
  }
  
  addTodos() {
    if (this.userInput.trim()) {
      this.todos.push({
        todo: this.userInput.trim(),
        status: ''
      });
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.userInput = "";
  }

  actions(operation: string, index: number) {
    if (operation === 'delete') {
      if (index > -1 && index < this.todos.length) {
        this.todos.splice(index, 1);
      }
    } else if (operation === 'save') {
      if (index > -1 && index < this.todos.length) {
        this.todos[index].todo = this.userInput.trim(); // Update the todo item
        this.userInput = ""; // Clear input
        this.isEdit = false; // Exit edit mode
        this.editId = -1; // Reset editId
      }
    } else if (operation === 'status') {
      if (index > -1 && index < this.todos.length) {
        // Example: Toggle status between 'completed' and 'pending'
        this.todos[index].status = this.todos[index].status === '' ? 'done' : '';
      }
    } else {
      // Default case: Edit mode
      this.isEdit = true;
      this.editId = index;
      this.userInput = this.todos[index]?.todo || ''; // Set userInput to the todo item
    }
    localStorage.setItem('todos', JSON.stringify(this.todos)); // Save changes to localStorage    
  }
  
}

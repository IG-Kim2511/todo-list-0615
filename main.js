"use strict";

//js refresh page every 8 seconds (완성 이후 지우기)

// setTimeout(function () {
//   window.location.reload(1);
// }, 8000);

// generate new todo list whenever click '+' button

// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions
// JS2
function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();

  //   Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //   Create li
  // Node.appendChild() 새로운 단락 요소를 생성하고 문서에 있는 바디 요소의 끝에 붙입니다.
  // T:todoInput.value; : todoInput에 넣은 글자가 사용됨

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //   check mark button
  // B:"<i class="fas fa-check"></i>" 로하면 같은 따옴표때문에 에러 생김
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //   check trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //   Append to list
  todoList.appendChild(todoDiv);

  //clear todo input value
  todoInput.value = "";
}

// JS 4.휴지통 클릭하면 목록 지워짐
//T: e.target
// const todoList = document.querySelector(".todo-list");
// todoList.addEventListener('click',deleteCheck);
// function deleteCheck(e){
//   console.log(e.target); }

function deleteCheck(e) {
  // e.target체크
  //  console.log(e.target);
  // e.target 가져오기
  const item = e.target;

  // Delete Todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
}

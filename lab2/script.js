"use strict";

const inputBox = document.getElementById("input-box");
const listCointainer = document.getElementById("list-container");
const modal = document.querySelector(".modal");

let currentE = null;
let currentLi = null;
let lastDeletedToDoItem = null;

const addTask = () => {
  if (inputBox.value === "") {
    alert("You must write some task!");
  } else {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.classList.add("header");

    li.onclick = () => toggleChecked(li);

    p.innerText = inputBox.value;
    li.appendChild(p);

    const date = document.createElement("p");
    date.classList.add("date");
    date.innerHTML = "";
    li.appendChild(date);

    const span = document.createElement("span");
    span.onclick = (e) => deleteToDoElement(e, li);
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    listCointainer.appendChild(li);
  }
  inputBox.value = "";
};

const toggleChecked = (liElement) => {
  liElement.classList.toggle("checked");
  const dateContainer = liElement.getElementsByClassName("date")[0];
  if (liElement.classList.contains("checked")) {
    let date = new Date();
    dateContainer.innerHTML = date.toDateString();
  } else {
    dateContainer.innerHTML = "";
  }
};

const deleteToDoElement = (e, li) => {
  e.stopPropagation();
  currentE = e;
  currentLi = li;
  showModal();
};

$(document).keypress("Z", (e) => {
  if (!e.ctrlKey || lastDeletedToDoItem === null) {
    return;
  }

  listCointainer.appendChild(lastDeletedToDoItem);
  lastDeletedToDoItem = null;
});

const showModal = () => {
  $(".modal").css("display", "flex");
};

const hideModal = () => {
  currentE = null;
  currentLi = null;
  $(".modal").css("display", "none");
};

const deleteItemFromModal = () => {
  $(currentE.target).parent().remove();
  lastDeletedToDoItem = currentLi;
  hideModal();
};

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Confetti from "react-dom-confetti";

export default function ToDoList(props) {
  const { toDoList, setToDoList, toDoKey, setToDoKey } = props;

  const config = {
    angle: 90,
    spread: "193",
    startVelocity: 40,
    elementCount: "95",
    dragFriction: 0.12,
    duration: "6180",
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "689px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  function handleToDoButtonClick() {
    setToDoList([...toDoList, { key: toDoKey, task: "", checked: false }]);
    setToDoKey((previousValue) => previousValue + 1);
  }

  function handleToDoDeleteClick(event, itemKey) {
    let placeholderToDoList = toDoList.filter((toDo) => itemKey !== toDo.key);
    setToDoList(placeholderToDoList);
  }

  function handleToDoInputChange(event, itemKey) {
    let item = event.target.value;
    let placeholderToDoList = toDoList.map((toDo) => {
      if (itemKey === toDo.key) {
        let newToDo = { ...toDo, task: item };
        return newToDo;
      }
      return toDo;
    });
    setToDoList(placeholderToDoList);
  }

  function handleToDoCheckboxClick(event, itemKey) {
    let placeholderToDoList = toDoList.map((toDo) => {
      if (itemKey === toDo.key) {
        let done = event.target.checked;
        let newToDo = { ...toDo, checked: done };
        return newToDo;
      }
      return toDo;
    });
    setToDoList(placeholderToDoList);
  }

  return (
    <>
      <div>
        <button
          className="btn btn-secondary popover-inner-button"
          onClick={handleToDoButtonClick}
        >
          Add an item
        </button>
        <div className="container-fluid">
          {toDoList &&
            toDoList.map((item) => {
              let itemKey = item.key;
              let itemTodo = item.task;
              let toDoItemClassName = clsx({
                "todo-item-input": true,
                "todo-item-checked": item.checked,
              });
              let toDoItemCheckboxChecked = clsx({
                checkmark: true,
                "todo-checkbox-checked": item.checked,
              });

              return (
                <div className="row" key={item.key}>
                  <div className="col">
                    <label
                      className="container"
                      onClick={(event) =>
                        handleToDoCheckboxClick(event, itemKey)
                      }
                    >
                      <input type="checkbox" value={item.checked}></input>
                      <span className={toDoItemCheckboxChecked}></span>
                    </label>
                    <div className="todo-item">
                      <input
                        className={toDoItemClassName}
                        value={itemTodo}
                        onChange={(event) =>
                          handleToDoInputChange(event, itemKey)
                        }
                      ></input>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="todo-delete"
                        onClick={(event) =>
                          handleToDoDeleteClick(event, itemKey)
                        }
                      />
                      <Confetti active={item.checked} config={config} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

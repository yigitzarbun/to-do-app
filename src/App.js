import "./App.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewTask from "./components/NewTask";
import TasksList from "./components/TasksList";
import { useLocalStorage } from "./components/useLocalStorage";

const StyledAppContainer = styled.div`
  display: flex;
  column-gap: 3vw;
`;

const StyledNewTaskContainer = styled.div`
  width: 20%;
`;

const StyledListsContainer = styled.div`
  width: 80%;
`;

function App() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "not-started",
  });

  const [tasksList, setTasksList] = useLocalStorage("key", "initialValue");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    let newValue = value;
    if (type === "checkbox") {
      newValue = checked;
    }
    setNewTask({
      ...newTask,
      [name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast("Task was created successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
    setTasksList([...tasksList, newTask]);
    setNewTask({
      title: "",
      description: "",
      status: "not-started",
    });
  };

  const handleStatus = (title, status) => {
    const tasksCopy = [...tasksList];
    const clickedTask = tasksCopy.filter((task) => task.title === title)[0];
    clickedTask.status = status;
    setTasksList(tasksCopy);
  };

  const handleDelete = (title) => {
    const tasksCopy = [...tasksList];
    const clickedTask = tasksCopy.filter((task) => task.title === title)[0];
    const indexOfClickedTask = tasksCopy.indexOf(clickedTask);
    tasksCopy.splice(indexOfClickedTask, 1);
    setTasksList(tasksCopy);
  };
  return (
    <StyledAppContainer>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <StyledNewTaskContainer>
        <NewTask
          newTask={newTask}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </StyledNewTaskContainer>
      <StyledListsContainer>
        <TasksList
          tasksList={tasksList}
          handleStatus={handleStatus}
          handleDelete={handleDelete}
        />
      </StyledListsContainer>

      <ToastContainer />
    </StyledAppContainer>
  );
}

export default App;

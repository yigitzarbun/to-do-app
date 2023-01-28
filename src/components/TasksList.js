import React from "react";
import styled from "styled-components";

const StyledListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledListOuter = styled.div`
  text-align: center;
`;

const StyledListItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
`;
const StyledListInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  row-gap: 2vh;
  width: 20vw;
  background-color: white;
  border: 0.3rem solid black;
  border-radius: 10px;
`;

const StyledTaskTitle = styled.h3`
  font-weight: bold;
  font-size: 1.2rem;
`;

const StyledForwardButton = styled.button`
  background-color: #03c988;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  width: 100%;
  padding: 1vh;
`;

const StyledBackwardButton = styled.button`
  background-color: #0081c9;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  width: 100%;
  padding: 1vh;
`;

const StyledDeleteButton = styled.button`
  background-color: #eb455f;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  width: 100%;
  padding: 1vh;
`;

export default function TasksList(props) {
  const { tasksList, handleStatus, handleDelete } = props;
  return (
    <StyledListsContainer>
      <StyledListOuter>
        <h2>Not Started</h2>
        <StyledListItem>
          {tasksList.map(
            (task) =>
              task.status === "not-started" && (
                <StyledListInner key={task.title}>
                  <StyledTaskTitle>{task.title}</StyledTaskTitle>
                  <p>{task.description}</p>
                  <p>{task.status}</p>
                  <StyledForwardButton
                    onClick={() => handleStatus(task.title, "in-progress")}
                  >
                    Started
                  </StyledForwardButton>
                  <StyledDeleteButton onClick={() => handleDelete(task.title)}>
                    Delete
                  </StyledDeleteButton>
                </StyledListInner>
              )
          )}
        </StyledListItem>
      </StyledListOuter>
      <StyledListOuter>
        <h2>In Progress</h2>
        {tasksList.map(
          (task) =>
            task.status === "in-progress" && (
              <StyledListInner key={task.title}>
                <StyledTaskTitle>{task.title}</StyledTaskTitle>
                <p>{task.description}</p>
                <p>{task.status}</p>
                <StyledForwardButton
                  onClick={() => handleStatus(task.title, "completed")}
                >
                  Completed
                </StyledForwardButton>
                <StyledBackwardButton
                  onClick={() => handleStatus(task.title, "not-started")}
                >
                  To do
                </StyledBackwardButton>
                <StyledDeleteButton onClick={() => handleDelete(task.title)}>
                  Delete
                </StyledDeleteButton>
              </StyledListInner>
            )
        )}
      </StyledListOuter>
      <StyledListOuter>
        <h2>Completed</h2>
        {tasksList.map(
          (task) =>
            task.status === "completed" && (
              <StyledListInner key={task.title}>
                <StyledTaskTitle>{task.title}</StyledTaskTitle>
                <p>{task.description}</p>
                <p>{task.status}</p>{" "}
                <StyledBackwardButton
                  onClick={() => handleStatus(task.title, "in-progress")}
                >
                  In Progress
                </StyledBackwardButton>
                <StyledDeleteButton onClick={() => handleDelete(task.title)}>
                  Delete
                </StyledDeleteButton>
              </StyledListInner>
            )
        )}
      </StyledListOuter>
    </StyledListsContainer>
  );
}

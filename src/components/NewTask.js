import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5vh;
  background-color: #00337c;
  color: white;
  border-radius: 20px;
  text-align: center;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 20vw;
`;

const StyledAllStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledStatusContainer = styled.div`
  display: flex;
  width: 20vw;
  justify-content: center;
`;

const StyledLabelTitle = styled.h2`
  font-weight: bold;
  font-size: 1rem;
`;

const StyledInput = styled.input`
  width: 15vw;
  height: 7vh;
  border-radius: 20px;
  border: none;
  margin: 0 auto;
`;

const StyledForwardButton = styled.button`
  background-color: #03c988;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  width: 70%;
  margin: 1vh auto;
  padding: 1vh;
`;
export default function NewTask(props) {
  const { newTask, handleChange, handleSubmit } = props;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Create New Task</h2>
      <StyledLabel>
        <StyledLabelTitle> Title</StyledLabelTitle>
        <StyledInput
          type="text"
          id="title"
          name="title"
          placeholder="Do Laundry.."
          value={newTask.title}
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        <StyledLabelTitle> Description</StyledLabelTitle>
        <StyledInput
          type="text"
          id="description"
          name="description"
          placeholder="Take dirty clothes to the laundry. Wash them all"
          value={newTask.description}
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledAllStatusContainer>
        <label>
          <StyledLabelTitle>Status</StyledLabelTitle>
        </label>
        <StyledStatusContainer>
          <input
            type="radio"
            id="not-started"
            name="status"
            value="not-started"
            checked={newTask.status === "not-started"}
            onChange={handleChange}
          />{" "}
          <p>Not Started</p>
        </StyledStatusContainer>
        <StyledStatusContainer>
          <input
            type="radio"
            id="in-progress"
            name="status"
            value="in-progress"
            checked={newTask.status === "in-progress"}
            onChange={handleChange}
          />{" "}
          <p> In Progress</p>
        </StyledStatusContainer>
        <StyledStatusContainer>
          <input
            type="radio"
            id="completed"
            name="status"
            value="completed"
            checked={newTask.status === "completed"}
            onChange={handleChange}
          />{" "}
          <p>Completed</p>
        </StyledStatusContainer>
      </StyledAllStatusContainer>
      <StyledForwardButton type="submit">Create Task</StyledForwardButton>
    </StyledForm>
  );
}

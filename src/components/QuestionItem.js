import React from "react";
// create event handler for delete and answer change. 1). When the delete button is clicked, the question should be removed from the list by updating state. It should also be deleted on the server. Make sure to include the id of the question you're trying to delete in your request's url!
// add props:  onDeleteClick, onAnswerChange 
function QuestionItem({ question,  onDeleteClick, onAnswerChange  }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick() {
    onDeleteClick(id);
  }

  function handleAnswerChange(event) {
    onAnswerChange(id, parseInt(event.target.value));
  }


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        
        <select defaultValue={correctIndex} onChange={handleAnswerChange} >{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

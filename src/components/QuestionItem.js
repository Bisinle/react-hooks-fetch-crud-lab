import React from "react";

function QuestionItem({ question, onDeleteQuesion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete() {
    // console.log(question);
    fetch(`http://localhost:4000/questions/${question.id}`,
      {
        method: "DELETE",
        Headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((newQuestion) => onDeleteQuesion(question));
  }
  return (
    <li key={id}>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

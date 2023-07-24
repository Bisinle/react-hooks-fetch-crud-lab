import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  //************************************************** */
  function handleSubmit(question) {
    console.log(question);
    let answers = [
      question.answer1,
      question.answer2,
      question.answer3,
      question.answer4,
    ];
    console.log(answers);
    fetch(`http://localhost:4000/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: question.prompt,
        answers: answers,
        correctIndex: question.correctIndex,
      }),
    })
      .then((res) => res.json())
      .then((newQuestion) => console.log(newQuestion));
  }
  //*********************************************************** */
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm handleSubmit={handleSubmit} />
      ) : (
        <QuestionList />
      )}
    </main>
  );
}

export default App;

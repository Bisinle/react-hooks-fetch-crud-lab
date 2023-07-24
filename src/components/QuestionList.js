import React, { Suspense, useEffect } from "react";
import { useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
      .then((res) => res.json())
      .then((questions) => setQuestions(questions));
  }, []);

  function onDeleteQuesion(questionWeAreDeleting) {
    console.log(questionWeAreDeleting);
    const ArrayWithoutDeletedQuestion = questions.filter(
      (thisQuestion) => questionWeAreDeleting.id !== thisQuestion.id
    );
    setQuestions(ArrayWithoutDeletedQuestion);
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuesion={onDeleteQuesion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

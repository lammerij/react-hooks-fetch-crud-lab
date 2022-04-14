import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((questions) => setQuestions(questions));
  }, []);

  const questionsToDisplay = questions.filter((question) => (question))


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionsToDisplay.map((question) => (
        <QuestionItem 
        key={question.id}
        question={question}
        />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  console.log(questions)
  

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((questions) => setQuestions(questions));
  }, []);

  function handleDelete(){
    fetch(`http://localhost:4000/questions/${questions.id}`, {
    method: "DELETE",
})
  .then((response) => response.json())
  .then(() => setQuestions(questions))
}

  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions?.map((q) => (
          <QuestionItem key={q.id} question={q} handledelete={handleDelete} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

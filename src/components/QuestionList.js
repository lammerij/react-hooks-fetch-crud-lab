import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  console.log(questions);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((questions) => setQuestions(questions));
  }, []);

  function handleDelete(id) {
    console.log("delete");
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        const newQuestionsList = questions.filter((question) => {
        return  question.id !== id;
        });
        setQuestions(newQuestionsList)
      });
      
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions?.map((q) => (
          <QuestionItem
            key={q.id}
            question={q}
            handleDelete={handleDelete}
            setQuestions={setQuestions}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

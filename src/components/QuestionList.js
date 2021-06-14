import React, {useState, useEffect} from "react";
import QuestionForm from "./QuestionForm";



function QuestionList({questionData, setData, setPage, displayForm}) {
  

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(data => {
      setData(data)
    })
  }, [handleDelete])

  function handleDelete(e){
    console.log(e.target.id)
    fetch(`http://localhost:4000/questions/${e.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type":"application/json"
      },
    })
  }

 

  let displayData = questionData.map(obj => {
    return (
      <>
        <li>{obj.prompt} <button id={obj.id} onClick={handleDelete}>Delete Question</button><button id={obj.id} onClick={displayForm}>Question Form</button></li>
      
      </>
    )
  })


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayData}</ul>
    </section>
  );
}

export default QuestionList;

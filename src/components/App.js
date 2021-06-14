import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionData, setQuestionData] = useState([])
  const [formData, setFormData] = useState({
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: 0,
  });
  const [id, setId] = useState(0)

  function displayQuestionForm(e){
    let id = e.target.id

    fetch(`http://localhost:4000/questions/${id}`)
    .then(resp => resp.json())
    .then(data => {
      setFormData({
        prompt: data.prompt,
        answer1: data.answers[0],
        answer2: data.answers[1],
        answer3: data.answers[2],
        answer4: data.answers[3],
        correctIndex: data.correctIndex,
      })
      setId(id)

    })


    // set
    setPage("Form")
    console.log(e)

    // return <QuestionForm data={}/>
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm id={id} formData={formData} setFormData={setFormData} /> : <QuestionList displayForm={displayQuestionForm} setPage={setPage} questionData={questionData} setData={setQuestionData}/>}
    </main>
  );
}

export default App;

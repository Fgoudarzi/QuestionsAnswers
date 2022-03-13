import React, { useState, useEffect } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState([])
  useEffect(() => { setQuestions(data) }, [])

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.length && questions.map(q => {
            return (
              <SingleQuestion question={q} key={q.id}></SingleQuestion>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default App;

import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ question }) => {
  const [show, setShow] = useState(false)
  return (
    <article className='question'>
      <header>
        <h4>{question.title}</h4>
        <button className='btn' onClick={() => setShow(!show)}>
          {show ? <AiOutlineMinus></AiOutlineMinus> : <AiOutlinePlus></AiOutlinePlus>}
        </button>
      </header>
      {show && <p>{question.info}</p>}
    </article>
  )
};

export default Question;

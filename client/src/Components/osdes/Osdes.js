
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Osdes = () => {
    const [osData, setosData] = useState(null);
    const [questionAnswer, setQuestionAnswer] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3001/user/fetchQuestion?topic=os');
            setosData(response.data.data);
    
            const qa = {};
            response.data.data.forEach((item) => {
              qa[item.question] = item.answer;
            });
    
            setQuestionAnswer(qa);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []); 
  return (
    <>
    {osData ? (
      <div className='QuestionAnswer' style={{'margin-top':'20px'}}>
        <div className='Question' >
          {Object.entries(questionAnswer).map(([question, answer], index) => (
            <p key={index} style={{'margin-top':'0px'}}>
              <p className='ques'>{question}</p> 
              <p className='ans'>Answer: {answer}</p>
            </p>
          ))}
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </>
);
  
}

export default Osdes

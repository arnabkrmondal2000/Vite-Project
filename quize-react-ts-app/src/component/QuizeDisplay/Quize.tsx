import React, { useState } from 'react';
import quizeData  from '../QuizeData/QuizeData';
import './Quize.css';

interface Questions {
    question: string;
    options: string[];
    correctAnswer: string;
}
const QuizeDisplay = () => {
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [answer, setAnswer] = useState<string | null>(null);
    const [score, setScore] = useState<number>(0);
    const [finsh,setFinished] = useState<boolean>(false);

    const currentQuestion: Questions  = quizeData.questions[questionIndex];
    console.log(currentQuestion);


    const handleOptionsClick = (value:string) => {
        setAnswer(value);
    }
    console.log(answer);


    const handleNextQuestion = () => {
        if(answer === currentQuestion.correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        }
        setAnswer(null);
        

        if(questionIndex<quizeData.questions.length - 1 ){
            setQuestionIndex((prevIndex) => prevIndex + 1);
            // console.log('index is ====>',questionIndex);
        } else {
            // console.log('index is ====>',questionIndex);
            setFinished(true);
        }
    }
    console.log('index is ====>',questionIndex);
    console.log('score is ====> ',score);




 return (
    <>
    <div className='container'>
     {finsh ? (<div>
         <h2>Congratulation ! You have finish the task</h2> 
         <h3 className='score-data'> Your Score is {score}/{quizeData.questions.length}</h3>
     </div>) :
     (<div>
        <h2 className='question'>{currentQuestion.question}</h2>
        <div className='options'>
            {
                currentQuestion.options.map((data) => (
                    <button key={data} onClick={()=>{handleOptionsClick(data)}}
                    style={{
                        backgroundColor: answer === data ? "#add8e6" : "white",
                      }}
                    >
                        {data}
                    </button>
                ))
            }
        </div>
        <button className='next-button' onClick={handleNextQuestion} disabled ={!answer}>Next Question</button>
     </div>)}
     </div>
    </>
 )
}
export default QuizeDisplay;
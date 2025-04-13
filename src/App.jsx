import React, { useState } from 'react';
import QuestionScreen from './components/QuestionScreen';
import FeedbackScreen from './components/FeedbackScreen';
import questions from './data/questions.json';


function App(){
    const [current,setCurrent] = useState(0)
    const [answers,setAnswers] = useState([])
    const [showFeedbackScreen,setShowFeedback] = useState(false)

    function handleNext(answer){
        setAnswers([...answers,answer]
           
        )
        if(current+1 < questions.length){
            setCurrent(current+1)
        } else{
            setShowFeedback(true)
        }
    }


    return(
        <div> 
            {showFeedbackScreen ? (
                <FeedbackScreen questions={questions} answers={answers} />

            ):(
                <QuestionScreen data={questions[current]} onNext={handleNext} />
            )
            }

        </div>
    )
}

export default App;

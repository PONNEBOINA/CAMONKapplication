import React from "react";

function FeedbackScreen({ questions, answers }) {
  const score = answers.reduce((acc, ans, idx) => {
    const correct = questions[idx].answer.join(" ");
    const user = ans.answer.join(" ");
    return acc + (correct === user ? 1 : 0);
  }, 0);

  return (
    <div style={{backgroundColor:"black",height:"100vh",width:"100vw",marginTop:"40px"}}>
      <h2 style={{ display: "flex", alignItems: "center", gap: "10px" ,justifyContent:"center",color:"white",marginTop:"20px"}}>  Final Score: {score} / {questions.length}</h2>

     
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap", 
          marginTop: "20px",
          marginLeft:"20px"
        }}
      >
        {questions.map((q, i) => {
          const correctAnswer = q.answer.join(" ");
          const userAnswer = answers[i].answer.join(" ");
          const isCorrect = correctAnswer === userAnswer;

          return (
            <div
              key={i}
              style={{
                border: "2px solid #ccc",
                borderRadius: "10px",
                padding: "16px",
                minWidth: "250px",
                backgroundColor: isCorrect ? "#e0ffe0" : "#ffe0e0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p><strong>Question {i + 1}:</strong> {q.sentence}</p>
              <p>
                <strong>Your Answer:</strong> {userAnswer} {isCorrect ? "✅" : "❌"}
              </p>
              
                <p><strong>Correct Answer:</strong> {correctAnswer}</p>
            
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeedbackScreen;

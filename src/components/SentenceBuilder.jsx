import React from 'react';

function SentenceBuilder({ sentence, filled, onUnselect }) {
  const parts = sentence.split(/__+/);
  return (
    <div style={{marginTop:"10%"}}>
      {parts.map((text, i) => (
        <span key={i}>
          {text}
          {i < filled.length && (
            <button style={{backgroundColor:"grey",color:"white"}} onClick={() => onUnselect(i)}>
              {filled[i] || "____"}
            </button>
          )}
        </span>
      ))}
    </div>
  );
}

export default SentenceBuilder;

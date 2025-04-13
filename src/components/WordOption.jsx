import React from 'react';

function WordOptions({ words, onSelect }) {
  return (
    <div style={{marginTop:"20px"}}>
      {words.map((word, i) => (
        <button style={{marginLeft:"10px",backgroundColor:"#D3D3D3"}} key={i} onClick={() => onSelect(word)}>{word}</button>
      ))}
    </div>
  );
}

export default WordOptions;

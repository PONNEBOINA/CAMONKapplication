import {useState,useEffect} from "react"
import SentenceBuilder from "./SentenceBuilder"
import WordOptions from "./Options.jsx"

function QuestionScreen({data,onNext}){
    const [filledWords,setFilledWords] = useState(Array(data.blanks).fill(""))
    const [wordsLeft,setWordsLeft] = useState(data.options)
    const [timeleft,settimerleft] = useState(30)

    useEffect(()=>{
        setFilledWords(Array(data.blanks).fill(""));
        setWordsLeft(data.options);
        settimerleft(30);
   
        const Timer = setInterval(() => {
            settimerleft((prev) => {
              if (prev <= 1) {
                clearInterval(Timer);
                submit();
                return 0;
              }
              return prev - 1;
            });
          }, 1000);
        
          return () => clearInterval(Timer);

    },[data])


    function selectword(word){
        const index = filledWords.indexOf("")
        if(index === -1) return;
       const newFilledWord = [...filledWords]
       newFilledWord[index] = word 
       setFilledWords(newFilledWord)
       setWordsLeft(wordsLeft.filter(w=>w != word))

    }

    function submit() {
        onNext({ question: data.sentence, answer: filledWords });
      }

      function unselectWord(index) {
        const word = filledWords[index];
        if (!word) return;
        const newFilled = [...filledWords];
        newFilled[index] = "";
        setFilledWords(newFilled);
        setWordsLeft([...wordsLeft, word]);
      }

    return(
        <div style={{backgroundColor:"black",color:"white",padding:"10px",textAlign:"center",height:"100vh",width:"100vw"}} >
           <div
  style={{
    position: "absolute",
    top: "20px",
    left: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "orange",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  }}
>
  {timeleft}
</div>

            <SentenceBuilder sentence={data.sentence} filled={filledWords} onUnselect={unselectWord}/>
            <WordOptions words={wordsLeft} onSelect={selectword} />
            <button style={{marginTop:"20px",backgroundColor:"#4CAF50"}} disabled={filledWords.includes("")} onClick={submit}>NEXT</button>


        </div>
    )

}

export default QuestionScreen
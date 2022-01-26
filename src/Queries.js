import { useState } from 'react';
import questions from './API/Questions';
const Queries = () => {
  let i = 0;
  const [data, setdata] = useState(questions);
  const [index, setIndex] = useState(i);
  function setStar(checked, unchecked) {
    let star = [];
    for (let i = 0; i < checked; i++) {
      star.push(<span className="fa fa-star checked"></span>);
    }
    for (let j = 0; j < unchecked; j++) {
      star.push(<span className="fa fa-star"></span>);
    }
    return star;
  }
  const correctAns = () => {
    const newDiv = document.createElement("div");
    newDiv.className = "textVal";
    newDiv.id = "textVal"
    const newContent = document.createTextNode("Correct");
    newDiv.appendChild(newContent);
    let newElemdiv = document.getElementById("answers");
    newElemdiv.appendChild(newDiv);
    let button = document.createElement("button");
    button.innerHTML = "Next Question";
    button.className = "nextQues";
    button.id = "nextQues";
    button.onclick = function(){
      setIndex(index+1);
      var remElem1 = document.getElementById("textVal");
      var remElem2 = document.getElementById("nextQues");
      remElem1.remove();
      remElem2.remove();
    }
    let newElem = document.getElementById("answers");
    newElem.appendChild(button);
  }
  const incorrectAns = () => {
    const newDiv = document.createElement("div");
    newDiv.className = "textVal";
    newDiv.id = "textVal"
    const newContent = document.createTextNode("Sorry!");
    newDiv.appendChild(newContent);
    let newElemdiv = document.getElementById("answers");
    newElemdiv.appendChild(newDiv);
    let button = document.createElement("button");
    button.innerHTML = "Next Question";
    button.className = "nextQues";
    button.id = "nextQues";
    button.onclick = function(){
      setIndex(index+1);
      let remElem1 = document.getElementById("textVal");
      let remElem2 = document.getElementById("nextQues");
      remElem1.remove();
      remElem2.remove();
    }
    let newElem = document.getElementById("answers");
    newElem.appendChild(button);
  }
  const level = data[index].difficulty;
  let star;
  if (level === 'hard') {
    star = setStar(3, 2);
  }
  else if (level === 'medium') {
    star = setStar(2, 3);
  }
  else if (level === 'easy') {
    star = setStar(1, 4);
  }
  const percent = index + 1;
  let val = (percent / 20) * 100;
  return (
    <>
    {
      <div className='main'>
            <progress className="bar" value={val} max="100"> {val}% </progress> 
            <div className='inner'>
              <h3>Question {percent} of 20</h3>
              {star}
              <p>{data[index].category}</p>
              <br />
              <h4>{data[index].question}</h4>
              <div id='answers'>
                <button className='answerVal' id='btnAns' onClick={correctAns}>{data[index].correct_answer}</button>
                {data[index].incorrect_answers.map((val) => {
                  return (<button className='answerVal' onClick={incorrectAns}>{val}</button>);
                })}
              </div>
            </div>
          </div>
      } 
    </>
  );
};

export default Queries;

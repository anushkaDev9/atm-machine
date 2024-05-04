import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const[val,setValue]=useState(0)
  const[despoit,setDespoit]=useState('')
  const[bal,setBal]=useState(0)
 const[error,setError]=useState('')
 const[history,setHistory]=useState([])
 const submit=(e)=>{
   let num=parseInt(val)
   if(num<0){
   if(Math.abs(num)>bal){
      setError(`sorry not enough balanace! balance:$${bal}`)
   }else{
    setBal(bal + num);
    setError("");
     setHistory([...history, num]);
   }
   }else{
    setBal(bal + num);
     setHistory([...history, num]);
    setError("");
   }
  e.preventDefault()
  console.log(history)
  setValue('')
 alert(`Confirm transaction`);
 }

  return (
    <div className="App">
      <h1>ATM MACHINE</h1>
      <h3>Account Balance=${bal}</h3>
      <form onSubmit={submit}>
        {parseInt(val) > 0 && "Deposit"}
        {parseInt(val) < 0 && "Withdraw"}
        {(parseInt(val) === 0 || val === "") && "No amount added"}
        <input
          type="number"
          placeholder="Enter amount"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={val}
          required
        ></input>
        <button>
          {parseInt(val) > 0 && "Deposit"}
          {parseInt(val) < 0 && "WithDraw"}
          {(parseInt(val) === 0 || val === "") && "No amount added"}
        </button>
      </form>
      <h6>{error}</h6>
      <h4>Transaction History </h4>
      <ul>
        {history.map((item)=>{
           return (
             <li>
               {parseInt(item) > 0 && "Deposit-"}
               {parseInt(item) < 0 && "WithDraw"}
               {item}
             </li>
           );
        })}
      </ul>
    </div>
  );
}

export default App;

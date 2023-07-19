import React,{useState} from 'react'

export default function TextForm() {
    const handleOnclick=()=>{
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleOnchange=(event)=>{
        setText(event.target.value);
    }
    

    const [text,setText]=useState('Enter data here');
  return (
    <div className="container">
        <div className="mb-3 my-2 m" >
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Write your text here</label>
        <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
        <button className="btn btn-primary my-2" onClick={handleOnclick}>Upper case</button>
        </div>
    </div>
  )
}

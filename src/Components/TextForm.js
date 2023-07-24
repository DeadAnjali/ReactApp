import React,{useState} from 'react'

export default function TextForm() {
    const handleOnclick=()=>{
        let newText = text.toUpperCase();
        setText(newText);

    }
    const ConvertToJSX=()=>{
    const JSXText=text.replaceAll('class="','className="').replaceAll('for="','htmlFor="').replaceAll('href="#"','href="/"')
    console.log(JSXText);
    setText(JSXText);

    }

    //Defining a state which is like a special variable kind thing except its a function which has some value and we trigger to chnage its value using its sister function
    const[Toggle,setToggle]=useState({
      color:'black',
      backgroundColor: 'white'
    })
    const OnToggle=()=>{
      if(Toggle.color==='black'){
      setToggle({
        color:'white',
        backgroundColor: 'black'
      })
      }
      else if(Toggle.color==='white'){
        setToggle({
          color:'black',
          backgroundColor: 'white'
        })
      }
    }


    const SelectText=()=>{
      navigator.clipboard.writeText(text);
      alert("Copied the text");
      
    }    

    const handleClear=()=>{
      const empty="";
      setText(empty);
    }
    //had to add onchange to make sure that text can be added in the teaxtarea
    const handleOnchange=(event)=>{
        setText(event.target.value);
    }
    //Adding Hook ,text can only be updated using setText function. Its a descructor of object0
    const [text,setText]=useState('Enter data here');
  return (
    <div className="container">
        <div className="mb-3 my-2 m" >
        <label htmlFor="Boot" className="form-label">Write your text here</label>
        <textarea className="form-control" value={text} onChange={handleOnchange} style={Toggle} id="Boot" rows="8"></textarea>
        <button className="btn btn-primary my-2" onClick={handleOnclick}>Upper case</button>
        <button className="btn btn-primary my-2 mx-3" onClick={ConvertToJSX}>ConvertToJSX</button>
        <button className="btn btn-primary my-2 mx-3" onClick={SelectText}>Copy</button>
        <button className="btn btn-danger my-2 mx-3" onClick={handleClear} >Clear</button>
        <button className="btn btn-danger my-2 mx-3" onClick={OnToggle} >Toggle</button>
        </div>
    </div>
  )
}
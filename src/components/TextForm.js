import React, {useState} from 'react'



export default function TextForm(props) {
    const[text, setText] = useState('Enter text here')
    const handleClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleChange = (event) =>{
        setText(event.target.value)
    }
    const handleOnClick = () =>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick = () =>{
        setText("")
    }
    
    
    return (
        <>
            <div className="container">
            <h1>{props.heading}</h1>
            <div className="TextArea">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" >{props.text}</label>
                <textarea className="form-control" value={text} onChange={handleChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-success my-3" onClick={handleClick}>Convert to UpperCase</button>
            <button className="btn btn-success mx-3" onClick={handleOnClick}>Convert to LowerCase</button>
            <button className="btn btn-success mx-0" onClick={handleClearClick}>Clear the text</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>no of words - {text.split(" ").length}</p>
                <p>no of character- {text.length}</p>
                <p>{0.008 * text.split(" ").length} per min read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>



        </>
    )
}

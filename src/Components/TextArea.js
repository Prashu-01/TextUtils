import React, { useState } from 'react'

export default function TextArea(procs) {
    const handleChange = (event) => {
        setText(event.target.value)
        // console.log("Value Changed")
    }
    const ToUpper = () => {
        // console.log("Clicked")
        if(text==="") return setText("Please enter a text");
        let t = text.toUpperCase() 
        setText(t)
    }
    const clear=()=>{
        setText("");
    }

    const [text, setText] = useState("sampleText")

    return (
        <>
            <div className='container my-3'>
                <div className="mb-3">
                    <h3>{procs.heading}</h3>
                    <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8" /*style={myStyle}*/></textarea>
                </div>
                <button disabled={text.length===0} className={`btn btn-primary my-3`} onClick={ToUpper}>To UpperCase</button>
                <button disabled={text.length===0} className={`btn btn-danger mx-2 my-3`} onClick={clear}>Clear</button>
                <p className="my-3">
                    Number of words: {text.split(" ").filter((ele)=>{return ele.length!==0}).length} <br/>
                    Number of characters: {text.length} <br/>
                    Average Read to read this text: {0.008 * text.split(" ").length} Minutes<br/> 
                    <h2>Preview</h2>
                    <p>{text}</p>
                </p>
            </div>
        </>
    )
}
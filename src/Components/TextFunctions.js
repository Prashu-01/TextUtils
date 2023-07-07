import React, { useState } from 'react'

export default function TextFunctions(procs) {
    const handleChange=(event)=>{
        settext(event.target.value)
        console.log("Changed")
    }
    const ToUpper=()=>{
        let t=text.toUpperCase();
        settext(t);
    }
    const [text,settext]=useState("SampleText")
    return (
        <>
            <div className="container form-floating">
                <h3>{procs.heading}</h3>
                <textarea className="form-control" value={text} onChange={handleChange} id="mybox" rows="8"></textarea>
                <button type="button" onClick={ToUpper} class="btn btn-primary">ToUpper</button>
            </div>
            <p className="container my-3">
                Number of words: {text.split(" ").length} <br/>
                Number of characters: {text.length} <br/>
                Average Read to read this text: {0.008 * text.split(" ").length} Minutes <br/> 
                <h2>Preview</h2>
                <p>{text}</p>
            </p>
        </>
    )
}

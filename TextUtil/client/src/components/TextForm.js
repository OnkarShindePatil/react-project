import React, { useState } from 'react'

// shortcut key for make react function based component - rfce

export default function TextForm(props) {

    //function for button uppercase
    const handleUpClick = () => {
        // console.log('UpperCase was Clicked +text');
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!","success");
    }
    //function for button lowercase
    const handleLoClick = () => {
        // console.log('UpperCase was Clicked +text');
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!","success");

    }

    //function for button clear all
    const handleClearClick = () => {
        // console.log('UpperCase was Clicked +text');
        let newText = "";
        setText(newText)
        props.showAlert("cleared!","success");

    }

    //function for textfiled
    const handleOnChange = (event) => {
        // console.log('onChange');
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter Text Here');
    //  text = "new text"   wrong way to change the state
    // setText = ("new text");   //right way to change the state

    return (
        <>
            <div className='container' style={{$backgroundColor:props.mode==='dark'?'white':'dark'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{$backgroundColor:props.mode==='light'?'dark':'light'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary me-4" onClick={handleUpClick}>convert to uppercase</button>
                <button className="btn btn-primary me-4" onClick={handleLoClick}>convert to lowercase</button>
                <button className="btn btn-primary" onClick={handleClearClick}>clear all</button>
            </div>
            <div className="container my-4">
                <h1>Your Text Summary</h1>
                <p> {text.split(" ").length} words and {text.length} characters </p>
                <p>{0.008 * text.split(" ").length} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

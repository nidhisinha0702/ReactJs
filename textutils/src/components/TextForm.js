import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleClearClick=()=>{
        setText(' ');
        props.showAlert("text cleared!","success");
    }
    const handleCopyText=()=>{
        var copyText = document.getElementById('myBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!",'success');
    }
    
    const [text, setText] = useState('');
    return (
    <>
    <div className="container my-3" style = {{color: props.mode === 'dark' ? 'white':'#051762'}}>
        <h2 className='mb-2'>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange}  style={{backgroundColor: props.mode === 'dark' ? '#b6a6a6':'white', color: props.mode === 'dark' ? 'white':'#051762'}} id="myBox" rows="8"></textarea>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>convert to uppercase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>convert to lowercase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>clear text</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>copy text</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>remove extra spaces</button>
    </div>
    </div>
    <div className='container' style = {{color: props.mode === 'dark' ? 'white':'#051762'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text: 'Nothing to preview'}</p>
    </div>
    </>
  )
}

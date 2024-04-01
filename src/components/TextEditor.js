import React, { useState } from 'react'

export default function TextEditor(props) {
    const [text, setText] = useState('');

    //Onchange event handler for textarea
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    //Click event handler for button
    const handleOnClick = () => {
        if (text.length === 0 || text.length < 0) {
            props.alert({
                type: 'danger',
                msg: 'Pls add text in textarea'
            });
            return false;
        }
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.alert({
            type: 'success',
            msg: 'All Word UpperCase'
        });
    }
    //Click event handler for button to convert text to lowercase
    const handleLowercaseClick = () => {
        if (text.length === 0 || text.length < 0) {
            props.alert({
                type: 'danger',
                msg: 'Pls add text in textarea'
            });
            return false;
        }
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.alert({
            type: 'success',
            msg: 'All Word LowerCase'
        });
    }

    //Click event handler for button to clear text
    const handleClear = () => {
        if (text.length === 0 || text.length < 0) {
            props.alert({
                type: 'danger',
                msg: 'Pls add text in textarea'
            });
            return false;
        }
        let newText = '';
        setText(newText);
        props.alert({
            type: 'danger',
            msg: 'Clear'
        });
    }

    //Click event handler for button to download text
    const handleDownloadText = () => {
        if (text.length === 0 || text.length < 0) {
            props.alert({
                type: 'danger',
                msg: 'Pls add text in textarea'
            });
            return false;
        }
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        props.alert({
            type: 'info',
            msg: 'Download File Successfuly'
        });
    }
    //Function to count words
    const countWords = (str) => {
        let words;
        if (text === "") {
            words = 0;
        } else {
            words = str.trim().split(/\s+/).length;
        }
        return words;
    };
    return (
        <div className="container my-3">
            <h1 className={`text-center ${props.mode ? 'text-white' : 'text-black'}`}>{props.title}</h1>
            <div className='row mx-0'>
                <div className='col-md-9'>
                    <label htmlFor="exampleFormControlTextarea1" className={`form-label ${props.mode ? 'text-white' : 'text-black'}`}><b>Enter your text here : </b></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" style={props.style}></textarea>
                    <button className='btn btn-success mt-3' onClick={handleOnClick}>Converter Text to Uppercase</button> &nbsp;
                    <button className='btn btn-info text-white mt-3' onClick={handleLowercaseClick}>Converter Text to Lowercase</button> &nbsp;
                    <button className='btn btn-danger mt-3' onClick={handleClear}>Clear</button>
                    <button className='btn btn-primary mt-3 mx-2' onClick={handleDownloadText}>Download Text</button>
                </div>
                <div className='col-md-3 text-summary-details-section'>
                    <h3 className={`${props.mode ? 'text-white' : 'text-black'} mt-2`}>Summary</h3>
                    <hr />
                    <p className={` ${props.mode ? 'text-white' : 'text-black'}`}>Number of words : {countWords(text)}</p>
                    <p className={` ${props.mode ? 'text-white' : 'text-black'}`}>Number of character :  {text.length}</p>
                    <p className={`${props.mode ? 'text-white' : 'text-black'}`}>Reading time : {0.008 * countWords(text)}</p>
                </div>
                <div className='col-md-12 mt-4'>
                    <h3 className={` ${props.mode ? 'text-white' : 'text-black'}`}>Preview</h3>
                    <hr />
                    <p className={`${props.mode ? 'text-white' : 'text-black'}`}>{text.length > 0 ? text : 'Enter Text and see here preview'}</p>
                </div>
            </div>
        </div>
    )
}

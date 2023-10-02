import React, { useState } from 'react'

export default function Home(props) {
    const [text, setText] = useState('');

    const toConvertUp = () => {
        setText(text.toUpperCase());
    }
    const toConvertLow = () => {
        setText(text.toLowerCase());
    }
    const toConvertCap = () => {
        let textEle = document.getElementById("textarea");
        let textareaValue = textEle.value;
        const words = textareaValue.split(" ");
        const capitalizedText = words.map(word => {
            if (word.length > 0) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            } else {
                return "";
            }
        }).join(" ");
        console.log(capitalizedText);
        setText(capitalizedText);
    }
    const copy = () => {
        navigator.clipboard.writeText(`${text}`);

    }
    const reset = () => {
        setText(' ');

    }
    const removeSpaces = () => {
        let newString = text.split(/[ ]+/);
        setText(newString.join(" "));
    }
    const handleOnChange =(e) =>{
         setText(e.target.value);
    }

    return (
        <>
        <div className={`mainContainer h-[100vh] text-${props.textDark}`}>
            <div className='Container mt-[5rem] flex justify-center items-center flex-col space-y-3'>
                <h1 className='font-bold text-2xl'>Enter Text Below To Convert As You Want</h1>
                <div className="text-area">
                    <textarea onChange={handleOnChange} className={`border-2 rounded-lg border-solid border-${props.mode === "light"? "dark": "light"}`} value={text} id="textarea" cols="130" rows="10"></textarea></div>
                <div className={`btns flex space-x-8 mx-auto text-${props.textDark}`}>
                    <div className="btn border-2 px-5 py-2 rounded-lg border-blue-400  hover:bg-blue-600 hover:text-white hover:font-semibold" onClick={toConvertUp}>Upper Case</div>
                    <div className="btn border-2 px-5 py-2 rounded-lg border-blue-400 hover:bg-blue-600 hover:text-white hover:font-semibold" onClick={toConvertLow}>Lower Case</div>
                    <div className="btn border-2 px-5 py-2 rounded-lg border-blue-400 hover:bg-blue-600 hover:text-white hover:font-semibold" onClick={toConvertCap}>Capitalize</div>
                    <div className="btn border-2 px-5 py-2 rounded-lg border-blue-400 hover:bg-blue-600 hover:text-white hover:font-semibold" onClick={copy}>Copy </div>
                    <div className="btn border-2 px-5 py-2 rounded-lg border-blue-400 hover:bg-blue-600 hover:text-white hover:font-semibold" onClick={removeSpaces}>Remove Spaces</div>
                    <div className="btn border-2 px-5 py-2 rounded-lg border-blue-400 hover:bg-blue-600 hover:text-white hover:font-semibold" onClick={reset}>Reset</div>
                </div>
                </div>
                <div className="container2 mt-3 space-x-5 flex  justify-center items-start">
                    <p>Words Count:{text.split(/\s+/).filter((e) =>{return e.length!==0}).length}</p>
                    <p>Characters Count:{text.length}</p>
                    <p>Reading time:{0.008 * text.split(" ").filter((e) =>{return e.length!==0}).length}</p>

                </div>
                    <div className={`preview mt-6 ml-[10rem] text-${props.textDark}`}><p className='text-xl font-semibold'>Preview</p>{text}</div>
        </div>
        </>
    )
}

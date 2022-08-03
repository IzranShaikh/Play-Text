import React, {useState} from 'react'

export default function TextArea(props) {
    
    //STATE OF TEXT - text being the val and setText a function to modify the state
    const [text, setText] = useState("Enter text here");


    //////FUNCTIONS
    
    //FN ONCHANGE EVENT FOR TEXTAREA
    const handleOnChange = (event) => { //event holds all the information about modification to the element
        setText(event.target.value); //here event is onchanged and target is the html element and value is the text im filling in it
    }

    //FN FOR UPPERCASE CONVERSION
    const upCase = () => {
        setText(text.toUpperCase());
    }

    //FN FOR LOWERCASE CONVERSION
    const lowCase = () => {
        setText(text.toLowerCase());
    }

    //FN FOR WEIRD CONVERSION
    const wCase = () => {
        let newText = "";
        let u = true;
        text.split("").forEach(el => {
            newText += (u === true) ? el.toUpperCase() : el.toLowerCase();
            u = (u === true) ? false : true;
        });
        setText(newText);
    }

    //FN TO COPY TEXT TO CLIPBOARD
    const copy = () => {
        navigator.clipboard.writeText(text)
    }

    //FN TO CLEAR TEXT
    const clear = () => {
        setText("")
    }

    //FN FOR CALC WORDS
    const wordCount = () => {
        let a = text.split(/\s+/); //REGEX SPLITTING BY SPACE ASWELL AS LINEBREAKS
        let c = [];
        a.forEach((word) => {
            if (word !== "")
                c.push(word);
        })
        return c.length;
    }

    return (
        <>
            <div className="container my-4">
                <center><h2 style={{ backgroundColor:(props.mode==='light')?'white':'black', color:(props.mode==='dark')?'white':'black' }}>{props.label}</h2></center>
                <textarea style={{ backgroundColor:(props.mode==='light')?'white':'black', color:(props.mode==='dark')?'white':'black' }} className="form-control" id="textBox" onChange={handleOnChange} rows="12" value={text}></textarea><br/>
                <center><button disabled={text.length===0} type="button" className="btn btn-success mx-2" onClick={upCase} >UPPERCASE</button>
                <button disabled={text.length===0} type="button" className="btn btn-success mx-2" onClick={lowCase} >LOWERCASE</button>
                <button disabled={text.length===0} type="button" className="btn btn-success mx-2" onClick={wCase} >WEIRDCASE</button>
                <button disabled={text.length===0} type="button" className="btn btn-success mx-2" onClick={copy} >COPY TO CLIPBOARD</button>
                <button disabled={text.length===0} type="button" className="btn btn-success mx-2" onClick={clear} >CLEAR</button></center>
            </div>
            
            <div style={{ padding: 90, backgroundColor:(props.mode==='light')?'#18bc9c':'#1a252f', color:(props.mode==='dark')?'white':'#1a252f' }}>
                <div className="container text-center">
                    <h3>TEXT SUMMARY</h3><br /><br />
                        WORDS : {(text.split(/\s+/).filter((el) => {return el.length!==0})).length} <br /><br />
                        CHARACTERS : {text.length} <br /><br />
                    MINUTES TO READ : {Math.round(((0.008 * (text.split(/\s+/).filter((el) => {return el.length!==0})).length ) + Number.EPSILON) * 100) / 100}
                </div>
            </div>
            <div style={{ padding: 40, backgroundColor: (props.mode === 'light') ? '#FFDEAD' : 'black', color: (props.mode === 'dark') ? 'white' : 'black' }}>
                <center><h6 >MADE BY © IZRAN SHAIKH</h6></center>
            </div>
        </>
    )
}
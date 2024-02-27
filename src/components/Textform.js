
import React, { useState } from 'react'

export default function Textform(props) {
    const [Text, setText] = useState('');


    const lok = (e) => {
        e.preventDefault()
        setText(Text.toUpperCase());
        props.alot("Capitalised", "success");
    }
    const loo = (e) => {
        e.preventDefault()
        setText(Text.toLowerCase());
        props.alot("Lowerd", "success")
    }
    const lop = (event) => {
        setText(event.target.value);

    }
    const cop = (k) => {
        var text = document.getElementById("mybox");
        navigator.clipboard.writeText(text.value);
        text.select();
        k.preventDefault()
        props.alot("Copied", "primary")
    }
    const spa = (k) => {
        let bc = Text.split(/[ ]+/);
        setText(bc.join(" "))
        k.preventDefault()
        props.alot("Removed", "success")
    }

    return (
        <div>
            <form>
                <div className={`"mb-3" text-${props.mo === "dark" ? "light" : "dark"}`}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control my-3" style={{ backgroundColor: props.mo === "dark" ? "grey" : "white", color: props.mo === "dark" ? "white" : "black" }} value={Text} id="mybox" onChange={lop} rows="7"></textarea>
                </div>
                <div className="c mb-3">
                <button disabled={Text.length===0} onClick={lok} className="btn btn-primary">To Uppercase</button>
                <button disabled={Text.length===0} onClick={loo} className="btn btn-primary m-2">To lowercase</button>
                <button disabled={Text.length===0} onClick={cop} className="btn btn-primary m-2">Copy text</button>
                <button disabled={Text.length===0} onClick={spa} className="btn btn-primary m-2">Remove.Extra.space</button>
                </div>
            </form>
            <div className={`container text-${props.mo === "dark" ? "light" : "dark"}`}>
                <h5>Details</h5>
                {Text.length}characters and {Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words 
            </div>
        </div>
    )
} 

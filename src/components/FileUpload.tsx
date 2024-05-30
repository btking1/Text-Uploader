import { useState} from "react"

export default function FileUpload() {
    const [input, setInputs] =useState("")
    function sendForm(event ){
        event.preventDefault();
        setInputs("");
       const form =  document.querySelector("form");
    }
    function handleChange(event){
        const value = event.target.value;
        setInputs(value)
        console.log(value)
    }
    return (
       
        <form className="w-full max-w-xl" >
        <input  className="w-full p-3" type="text" name="text" value={input} onChange={handleChange}/>
            <button type="submit" onClick={sendForm}>submit</button>
        </form>
    )
};
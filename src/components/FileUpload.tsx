import { useState, type ErrorInfo} from "react"
import type { ErrorCallback } from "typescript";

export default function FileUpload() {
    const [input, setInputs] =useState("")
    
    async function sendForm(event){
        event.preventDefault();
        const form = new FormData(event.target);
        const file = form.get("file") as File;
        
        try {
            file.arrayBuffer().then(data => console.log(data) )
        }
        catch (e){
        }
       
        setInputs("");
    }

    function handleChange(event) {
        const value = event.target.value;
        setInputs(value)
    }
    return (
       
        <form method="post" className="w-full max-w-xl" onSubmit={sendForm} encType="multipart/form-data">
        <input  className="w-full p-3" type="text" name="text" value={input} onChange={handleChange}/>
        <input  className="w-full p-3" type="file" name="file"/>
            <button type="submit" >submit</button>
        </form>
    )
};
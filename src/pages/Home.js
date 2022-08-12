import React, { useState } from "react";
import { apiGet } from "../misc/config";




function Home() {
    const [input, setInput] = useState('');
    const [result,setResult] = useState(null);

    const onChange = (e) => {
        setInput(e.target.value);
    }

    const onSearch =  async() => {
        const result = await apiGet(`/search/shows?q=${input}`);
        setResult(result);
        console.log(result);
    }

    const handleSubmit = e => {
        onSearch();
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSearch();
        }
    }
    
    const renderResult = () =>{
        if(result && result.length == 0){
            return <div>No Result Found</div>
        }

        if(result && result.length > 0){
            return(
                <div>
                    {result.map(item=>{
                         return <div key={item.show.id}>{item.show.name}</div>
                    })}
                </div>
            )
        }
        
        return null;
    }

    return (
        <div>
            <input type="text" value={input} onChange={onChange} onKeyDown={handleKeyDown} />
            <button onClick={handleSubmit}>Submit</button>
            {renderResult()}
        </div>
    )
}

export default Home
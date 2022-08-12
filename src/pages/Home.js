import React, { useState } from "react";




function Home() {
    const [input, setInput] = useState('');

    const onChange = (e) => {
        setInput(e.target.value);
    }

    const onSearch = async () => {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`);
        const data = await response.json();
        console.log(data);
    }

    const handleSubmit = e => {
        onSearch();
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSearch();
        }
    }


    return (
        <div>
            <input type="text" value={input} onChange={onChange} onKeyDown={handleKeyDown} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Home
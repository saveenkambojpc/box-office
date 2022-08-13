import React, { useState } from "react";
import ActorGrid from "../components/actor/ActorGrid";
import ShowGrid from "../components/show/ShowGrid";
import Title from "../components/Title";
import { apiGet } from "../misc/config";




function Home() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const [searchOption, setSearchOption] = useState('shows');

    const isShowOption = searchOption === 'shows'



    const onChange = (e) => {
        setInput(e.target.value);
    }

    const onSearchOptionChange = (e) => {
        setSearchOption(e.target.value);
    }
    const onSearch = async () => {
        const result = await apiGet(`/search/${searchOption}?q=${input}`);
        setResult(result);
    }

    const handleSubmit = e => {
        onSearch();
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSearch();
        }
    }

    const renderResult = () => {
        if (result && result.length == 0) {
            return <div>No Result Found</div>
        }

        if (result && result.length > 0) {

            return (
                <div>
                    {result[0].show ? <ShowGrid result={result} /> : <ActorGrid result={result} />}

                </div>
            )
        }

        return null;
    }

    return (
        <div>
            <Title title="Box Office" subTitle="This is subtitle" />

            <input type="text" value={input} onChange={onChange} onKeyDown={handleKeyDown} />
            <div>
                <div>
                    <label htmlFor="">Shows</label>
                    <input type="radio" checked={isShowOption} value="shows" name="" id="" onChange={onSearchOptionChange} />
                </div>
                <div>
                    <label htmlFor="">Actor</label>
                    <input type="radio" checked={!isShowOption} value="people" name="" id="" onChange={onSearchOptionChange} />
                </div>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            {renderResult()}
        </div>
    )
}

export default Home
import React, { useState } from "react";
import ActorGrid from "../components/actor/ActorGrid";
import CustomRadio from "../components/CustomRadio";
import ShowGrid from "../components/show/ShowGrid";
import { apiGet } from "../misc/config";
import { useLastQuery } from "../misc/custom-hooks";
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from "./Home.style";




function Home() {
    const [input, setInput] = useLastQuery();
    const [result, setResult] = useState(null);

    const [searchOption, setSearchOption] = useState('shows');

    const isShowOption = searchOption === 'shows'



    const onChange = (e) => {
        setInput(e.target.value);
    }

    const onSearchOptionChange = (e) => {
        console.log("On Radio Change");
        setSearchOption(e.target.value);
    }
    const onRadioChange = ev => {
        setSearchOption(ev.target.value);
    };
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

            <SearchInput type="text" value={input} onChange={onChange} onKeyDown={handleKeyDown} />
            <RadioInputsWrapper>
                <div>
                    <CustomRadio
                        label="Shows"
                        id="shows-search"
                        value="shows"
                        checked={isShowOption}
                        onChange={onRadioChange}
                    />
                </div>

                <div>
                    <CustomRadio
                        label="Actors"
                        id="actors-search"
                        value="people"
                        checked={!isShowOption}
                        onChange={onRadioChange}
                    />
                </div>
            </RadioInputsWrapper>
            <SearchButtonWrapper>

                <button onClick={handleSubmit}>Submit</button>
            </SearchButtonWrapper>
            {renderResult()}
        </div>
    )
}

export default Home
import RandomChar from "../../randomChar/RandomChar";
import CharList from "../../charList/CharList";
import CharInfo from "../../charInfo/CharInfo";
import ErrorBoundary from "../../errorBoundary/ErrorBoundary";
import { useState } from "react";
import CharSearch from '../../charSearch/CharSearch';

import { Helmet } from "react-helmet";

import decoration from '../../../resources/img/vision.png';

const CharsPage = () => {
    const [charId, setCharId] = useState(null);
    const setSelectedChar = (id) => {
        setCharId(id);
    }

    return (
        <main>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel information portal</title>
            </Helmet>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList setSelectedChar={setSelectedChar}/>
                </ErrorBoundary>
                <div>
                    <ErrorBoundary>
                        <CharInfo selectedChar={charId}/>
                    </ErrorBoundary>
                    <CharSearch/>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </main>
    );
};

export default CharsPage;
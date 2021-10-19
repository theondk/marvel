import useMarvelServices from '../../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 

import './charList.scss';

const CharList = (props) => {
    const [chars, setChars] = useState([]);
    const [newCharsLoading, setNewCharsLoading] = useState(false);
    const [offset, setOffset] = useState(250);
    const [isEnd, setIsEnd] = useState(false);

    const {loading, error, getAllCharacters } = useMarvelServices();

    useEffect(() => {
        renderChars();
    }, [])

    const renderChars = () => {
        getAllCharacters(offset)
            .then(onCharsListLoaded);
    }

    const onCharsListLoaded = (items) => {
        setChars(chars => [...chars, ...items]);
        setNewCharsLoading(false);
        setOffset(offset => offset + 9);
        setIsEnd(!items.length ? true : false)
    }

    const onLoad = () => {
        setNewCharsLoading(true);
        renderChars();
    }
    
    const isLoading = !(!loading || newCharsLoading) ? <Spinner/> : null,
          isError = error ? <ErrorMessage/> : null,
          isLoaded = !(isLoading || isError) ? <View chars={chars} toSelect={(id) => props.setSelectedChar(id)}/> : null;
    return (
        <div className="char__list">
            {isLoading}
            {isError}
            {isLoaded}
            <button style={{display: isEnd ? 'none' : 'block'}} disabled={newCharsLoading} onClick={onLoad} className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default CharList;

const View = ({chars, toSelect}) => {
    const liRefs = useRef([]);

    const selectedChar = (id, idx) => {
        liRefs.current.forEach(item => {item.classList.remove('char__item_selected')});
        liRefs.current[idx].classList.add('char__item_selected');
        toSelect(id);
    }

    const cards = chars.map((item, i) => {
        const {name, thumbnail, id} = item;
            return (
                <CSSTransition key={id} timeout={500} classNames="char__item">
                <li 
                    tabIndex="0" 
                    ref={el => liRefs.current[i] = el}
                    onClick={() => selectedChar(id, i)}
                    className="char__item"
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            selectedChar(id, i);
                        }
                    }}
                >
                    <img src={thumbnail} alt="character" style={{objectFit: (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? 'contain' : 'cover')}}/>
                    <div className="char__name">{name}</div>
                </li>
                </CSSTransition>
            )
        });

    return (
            <ul className="char__grid">
                <TransitionGroup component={null}>
                    {cards}    
                </TransitionGroup>
            </ul>
    );
};
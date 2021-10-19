import { useState, useEffect } from 'react';
import useMarvelServices from '../../services/MarvelServices';

import './comicsList.scss';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const ComicsList = () => {
    const [comics, setComics] = useState([]);
    const [offset, setOffset] = useState(250);
    const [newComicsLoading, setNewComicsLoading] = useState(false);

    const {loading, error, getAllComics} = useMarvelServices();
    
    useEffect(() => {
        onComicsLoad();
    }, []);

    const onComicsLoad = () => {
        getAllComics(offset)
            .then(onComicsLoaded);
    }

    const onComicsLoaded = (items) => {
        setComics(comics => [...comics, ...items]);
        setOffset(offset => offset + 9);
        setNewComicsLoading(false);
    }

    const isLoading = !(!loading || newComicsLoading) ? <Spinner/> : null;
    const isError = error ? <ErrorMessage/> : null;
    const isLoaded = comics ? <View comics={comics}/> : null;

    return (
        <div className="comics__list">
            {isLoading}
            {isError}
            {isLoaded}
            <button onClick={() => {setNewComicsLoading(true); onComicsLoad()}} disabled={newComicsLoading} className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

const View = ({comics}) => {
    const items = comics.map(({title, id, price, thumbnail}, i) => {
        return (
            <li key={i} className="comics__item">
                <Link to={`comics/${id}`}>
                    <img className="comics__img" style={{objectFit: (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? 'contain' : 'cover')}} src={thumbnail} alt="ultimate war" className="comics__item-img"/>
                    <div className="comics__item-name">{title}</div>
                    <div className="comics__item-price">{price ? price : 'The price was not found'}</div>
                </Link>
            </li>
        )
    })

    return (
        <ul className="comics__grid">
            {items}
        </ul>
    )
}

export default ComicsList;
import useMarvelServices from '../../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CharInfo = ({selectedChar}) => {
    const [char, setChar] = useState(null);

    const {loading, error, getOneCharacter} = useMarvelServices();
    useEffect(() => {
        if (selectedChar) {
            setSelectedChar();
        }
    }, [selectedChar]);

    const setSelectedChar = () => {
        getOneCharacter(selectedChar)
            .then(onCharLoaded);
    }

    const onCharLoaded = (res) => {
        setChar(res);
    }

    const isSkeleton = !(char || loading || error) ? <Skeleton/> : null,
          isLoaded = !(loading || error || !char) ? <View char={char}/> : null,
          isLoading = loading === true ? <Spinner/> : null,
          isError = error === true ? <ErrorMessage/> : null;
    return (
        <div className="char__info">
            {isSkeleton}
            {isLoaded}
            {isLoading}
            {isError}
        </div>
    )
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    const charComics = comics.slice(0, 10).map(item => {
        const comicsId = item.resourceURI.split('/').pop();
        return(
            <Link className="char__comics-item" key={item.name} to={`/comics/${comicsId}`}>
                {item.name}
            </Link>
        )
    });

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt="character"  style={{objectFit: (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? 'contain' : 'cover')}}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">{description === '' ? 'The description was not found' : description}</div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {charComics.length === 0 ? 'The comics were not found' : charComics}
            </ul>  
        </>
    );
};

export default CharInfo;
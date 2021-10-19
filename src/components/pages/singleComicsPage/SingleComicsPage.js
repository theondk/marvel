import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './singleComic.scss';

const SingleComicsPage = ({data}) => {
    const {title, price, thumbnail, description, pages, language} = data;

    return (
        <div className="single-comic">
            <Helmet>
                <meta
                    name="description"
                    content="Single comics"
                />
                <title>{title}</title>
            </Helmet>
            <img src={thumbnail} alt="x-men" className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description ? description : 'Description was not found'}</p>
                <p className="single-comic__descr">{pages !== 0 ? pages + ' pages' : 'Count of pages was not found'}</p>
                <p className="single-comic__descr">{language ? 'Language: ' + language : 'Language was not found'}</p>
                <div className="single-comic__price">{price ? price + '$' : 'Price was not found'}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleComicsPage;
import { Helmet } from 'react-helmet';

import './singleChar.scss';

const SingleCharPage = ({data}) => {
    const {name, thumbnail, description} = data;

    return (
        <div className="single-char">
            <Helmet>
                <meta
                    name="description"
                    content="Single character"
                />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt="x-men" className="single-char__img"/>
            <div className="single-char__info">
                <h2 className="single-char__name">{name}</h2>
                <p className="single-char__descr">{description ? description : 'Description was not found'}</p>
            </div>
        </div>
    )
}

export default SingleCharPage;
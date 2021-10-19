import img404 from '../../../resources/img/error404.png';
import { Helmet } from "react-helmet";

import './error404.scss';
import { Link } from 'react-router-dom';

const Page404 = ({title = 'Page'}) => {
    return (
        <div className="error404">
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel information portal</title>
            </Helmet>
            <div className="error404__message">
                <h3 className="error404__name">Error 404</h3>
                <p className="error404__text">{title} is not exist.</p>
                <Link className="error404__link" to='/'>Back to main page.</Link>
            </div>
            <img src={img404} alt="404image"/>
        </div>
    );
};

export default Page404;
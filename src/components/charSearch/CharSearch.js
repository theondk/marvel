import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import useMarvelServices from '../../services/MarvelServices';
import { useState } from 'react';

import './charSearch.scss';

const CharSearch = () => {
    const [char, setChar] = useState({id: null, name: null});
    const [found, setFound] = useState(null);
    const {getCharByName} = useMarvelServices();
    
    const onLoaded = (res) => {
        res ? setChar({id: res.id, name: res.name}) : setFound(false);
    }

    const isChar = char.id ? <Link to={`/character/${char.id}`} className="char__search-success">`Visit {char.name} page...`</Link> : null;
    const isFound = found === false ? <div className="char__search-success">The character was not found...</div> : null;

    return (
        <>
            <Formik
                initialValues={{ name: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                            .required('Field is required')
                })}
                onSubmit={values => 
                    getCharByName(values.name)
                        .then(res => onLoaded(res))
                }
            >
                {({ isSubmitting }) => (
                    <Form className="char__search">
                        <div className="char__search-title">Or find a character by name:</div>
                        <div className="char__search-wrapper">
                            <Field onInput={() => {setChar({id: null, name: null}); setFound(null)}} placeholder="Enter name" className="char__search-input" type="text" name="name" />
                            <button disabled={isSubmitting} type="submit" className="button button__main">
                                <div className="inner">find</div>
                            </button>
                        </div>
                        <ErrorMessage className="char__search-error" name="name" component="div" />
                        {isChar}
                        {isFound}
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default CharSearch;
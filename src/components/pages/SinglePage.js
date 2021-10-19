import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMarvelServices from "../../services/MarvelServices";
import Spinner from "../spinner/Spinner";
import Page404 from "./404Page/Page404";
import AppBanner from "../appBanner/AppBanner";

const SinglePage = ({Component, pageName}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const {loading, error, getOneCharacter, getOneComics} = useMarvelServices();
    const isLoading = loading ? <Spinner/> : null;
    const isError = error ? <Page404 title={'Comics'}/> : null;
    const isLoaded = !(loading || error || !data) ? <Component data={data}/> : null; 

    useEffect(() => {
        onCharLoad();
    }, [id]);

    const onCharLoad = () => {
        switch (pageName) {
            case 'char':
                getOneCharacter(id)
                    .then(onDataLoaded);
                break;
            case 'comics':
                getOneComics(id)
                    .then(onDataLoaded);
                break;
            default:
                break;
        }
    }

    const onDataLoaded = (item) => {
        setData(item);
    }
    
    return (
        <>
            <AppBanner/>
            {isLoading}
            {isError}
            {isLoaded}
        </>
    );
};

export default SinglePage;
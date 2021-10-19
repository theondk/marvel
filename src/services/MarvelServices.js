import { useHttp } from '../hooks/http.hook';

const useMarvelServices = () => {
    const {loading, error, request} = useHttp();
    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=0969786fd5dd4d9e4cd0a47260474b70';
    const _baseCharOffset = 210;
    const _baseComicsOffset = 11;

    const getAllCharacters = async (offset = _baseCharOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_writeChar);
    }

    const getOneCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _writeChar(res.data.results[0]);
    }

    const getAllComics = async (offset = _baseComicsOffset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_writeComics);
    }

    const getOneComics = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _writeComics(res.data.results[0]);
    }

    const getCharByName = async (name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
        return res.data.results[0];
    }

    const _writeComics = (res) => {
        return {
            id: res.id,
            title: res.title,
            price: res.prices[0].price,
            thumbnail: res.thumbnail.path + '.' + res.thumbnail.extension,
            description: res.description,
            pages: res.pageCount,
            language: res.textObjects.length ? res.textObjects[0].language : '' 
        }
    }

    const _writeChar = (res) => {
        return {
            id: res.id,
            name: res.name,
            description: res.description,
            thumbnail: res.thumbnail.path + '.' + res.thumbnail.extension,
            homepage: res.urls[0].url,
            wiki: res.urls[1].url,
            comics: res.comics.items
        }
    }

    return {loading, error, request, getAllCharacters, getOneCharacter, getAllComics, getOneComics, getCharByName}
}

export default useMarvelServices;
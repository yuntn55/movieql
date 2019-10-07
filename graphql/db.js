import fetch from 'node-fetch';

const API_URL = "https://yts.am/api/v2/list_movies.json?"

export const getApiMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;

    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    console.log(REQUEST_URL);
    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
}





export let movies = [
    {
        id: 1,
        name: "JunSoo",
        score: 30,

    },
    {
        id: 2,
        name: "경희",
        score: 28,

    },
    {
        id: 3,
        name: "test3",
        score: 28,
    },
    {
        id: 4,
        name: "test4",
        score: 282,
    }
];

export const getMovies = () => {
    return movies;
}

export const getById = id => {
    const filterdMovie = movies.filter(movie => id === movie.id);
    return filterdMovie[0];
}

export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => movie.id !== (id));
    if (movies.length > cleanMovies.length) {
        movies = cleanMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}
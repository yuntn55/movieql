import { getMovies, getById, addMovie, deleteMovie, getApiMovies } from "./db";

const resolvers = {
    Query: {
        apimovies: (_, { limit, rating }) => getApiMovies(limit, rating),
        movies: () => getMovies(),
        movie: (_, args) => {
            //console.log(args);
            return getById(args.id);
        }
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id),
    }
};

export default resolvers;
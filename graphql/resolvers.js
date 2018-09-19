import { getMovies, getSuggestions } from "./db";

const resolvers = {
    Query: {
        movies: (_, { rating, limit }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovies(id),
        suggestions: (_, { id }) => getSuggestions(id)
    }
};

export default resolvers;
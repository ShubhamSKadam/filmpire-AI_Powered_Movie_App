import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
export const tmdbApi = createApi({
    reducerPath: "tmdbApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
    endpoints: (builder) => ({
        // Get genres
        getGenres: builder.query({
            query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
        }),

        // Get movies by [Type]
        getMovies: builder.query({
            query: ({ genreIdOrCategoryName, page, searchQuery }) => {
                // Get Movies by Search
                if (searchQuery) {
                    return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
                }

                // Get Movies by Category
                if (
                    genreIdOrCategoryName &&
                    typeof genreIdOrCategoryName === "string"
                ) {
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
                }
                // Get movies by Genre
                if (
                    genreIdOrCategoryName &&
                    typeof genreIdOrCategoryName === "number"
                ) {
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
                }
                // Get popular Movies
                return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
            },
        }),

        // Get Movie
        getMovie: builder.query({
            query: (id) =>
                `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
        }),

        // Get user specific lists
        getList: builder.query({
            query: ({ listName, accountId, sessionId, page }) =>
                `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
        }),
        getRecommendations: builder.query({
            query: ({ movie_id, list }) =>
                `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
        }),

        getActorDetails: builder.query({
            query: (id) => `person/${id}?api_key=${tmdbApiKey}`,
        }),

        getMoviesByActorId: builder.query({
            query: ({ id, page }) =>
                `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
        }),
    }),
});

export const {
    useGetGenresQuery,
    useGetMoviesQuery,
    useGetMovieQuery,
    useGetListQuery,
    useGetRecommendationsQuery,
    useGetActorDetailsQuery,
    useGetMoviesByActorIdQuery,
} = tmdbApi;

import React from "react";
import MovieCreateForm from "../../../components/movieCreateForm";
import {createMovie, getMovieById, updateMovie} from "../../../actions";
import Router from "next/router";


class EditMovie extends React.Component {

    static async getInitialProps({query}) {
        const movie = await getMovieById(query.id)
        return { movie }
    }

    handleUpdateMovie = (movie) => {
        updateMovie(movie).then((updatedMovie) => {
            // console.log('Test id: ', movie.id)
            // console.log('Movie-data: ', movie)
            Router.push('/movies/[id]', `/movies/${movie.id}`)
        })
    }

    render() {
        const {movie} = this.props
        return (
            <div className="container">
                <h1>Edit the Movie</h1>
                <MovieCreateForm
                    submitButton='Update'
                    initialData={movie}
                    handleFormSubmit={this.handleUpdateMovie}
                />
            </div>
        )
    }
}

export default EditMovie
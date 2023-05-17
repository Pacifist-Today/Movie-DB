import App from "next/app";
import Head from "next/head";
import Navbar from "../components/navbar";
import React from "react";
import Footer from "../components/footer";

import '../styles/index.scss'
import {getMovies} from "../actions";

class MovieApp extends App {

    static async getInitialProps(appContext) {
        const appProps = await App.getInitialProps(appContext)
        return { ...appProps }
    }

    render() {
        const { Component, pageProps } = this.props
        // console.log(this.props.pageProps.movies)
        const { movies } = pageProps

        return (
            <>
                <Head>
                    <title>Home</title>
                    <script async src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                            crossOrigin="anonymous"/>
                    <script async src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                            crossOrigin="anonymous"/>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
                          rel="stylesheet"
                          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
                          crossOrigin="anonymous" />
                    <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
                            integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
                            crossOrigin="anonymous"/>

                </Head>
                <Navbar movies={movies} />
                <div className="base-page">
                    <Component {...pageProps} />
                </div>
                <Footer />
                <style jsx>{`
                  .base-page {
                    padding-top: 100px;
                  }
                `}
                </style>
            </>
        )
    }
}

export default MovieApp
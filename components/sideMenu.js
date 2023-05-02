import React, {useState} from "react";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import {createMovie} from "../actions";
import {useRouter} from "next/router";

const SideMenu = (props) => {
    const { categories } = props
    const router = useRouter()
    let modal = null

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            modal.closeModal()
            router.push('/')
        })
    }

    return (
        <>
            <Modal ref={elem => modal = elem} hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                {
                    categories.map(c => (
                        <a
                            key={c.id}
                            href="#"
                            className="list-group-item"
                        >
                            {c.name}
                        </a>
                    ))
                }
            </div>
        </>
    )
}

export default SideMenu
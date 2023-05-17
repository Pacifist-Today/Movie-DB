import React, {useState} from "react";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import {createMovie} from "../actions";
import {useRouter} from "next/router";

const SideMenu = (props) => {
    const { categories } = props
    const router = useRouter()
    let modal = null

    const [show, setShow] = useState(false);

    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            handleCloseModal()
            // modal.closeModal()
            router.push('/')
        })
    }

    return (
        <>
            <Modal
                ref={elem => modal = elem}
                hasSubmit={false}
                show={show}
                setShow={setShow}
                handleCloseModal={handleCloseModal}
                handleShowModal={handleShowModal}
            >
                <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                {
                    categories.map(c => (
                        <a
                            onClick={() => props.changeCategory(c.name)}
                            key={c.id}
                            href="#"
                            className={`list-group-item ${props.activeCategory === c.name ? 'active' : ''}`}
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
import { useState } from "react";

const MovieCreateForm = (props) => {

    const [form, setForm] = useState({
        name: '',
        description: '',
        rating: '',
        image: '',
        cover: '',
        longDesc: ''
    })

    const handleChange = (event) => {
        const target = event.target
        const name = target.name

        setForm({
            ...form,
            [name]: target.value
        })
    }

    const handleGenreChange = (event) => {
        const options = event.target.options
        const optionsLength = options.length
        let value = []

        for (let i = 0; i < optionsLength; i++) {
            if (options[i].selected) {
                console.log(options[i])
                value.push(options[i].value)
            }
        }

        setForm({
            ...form,
            genre: value.toString()
        })
    }
    
    const submitForm = () => {
        console.log(form)
        props.handleFormSubmit({...form})
    }

    return (
        <form>
            {
                JSON.stringify(form)
            }
            <div class="form-group">
                <label htmlFor="name">Name</label>
                <input
                    onChange={handleChange}
                    name='name'
                    value={form.name}
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Lord of the Rings"
                />
            </div>
            <div class="form-group">
                <label htmlFor="description">Description</label>
                <input
                    onChange={handleChange}
                    value={form.description}
                    name='description'
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="Somewhere in Middle-earth..."
                />
            </div>
            <div class="form-group">
                <label htmlFor="description">Rating</label>
                <input
                    onChange={handleChange}
                    name='rating'
                    value={form.rating}
                    type="number"
                    max="5"
                    min="0"
                    class="form-control"
                    id="rating"
                    placeholder="3"
                />
                <small id="emailHelp" class="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div class="form-group">
                <label htmlFor="image">Image</label>
                <input
                    onChange={handleChange}
                    value={form.image}
                    name='image'
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="http://....."
                />
            </div>
            <div class="form-group">
                <label htmlFor="cover">Cover</label>
                <input
                    onChange={handleChange}
                    value={form.cover}
                    name='cover'
                    type="text"
                    class="form-control"
                    id="cover"
                    placeholder="http://......"
                />
            </div>
            <div class="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea
                    onChange={handleChange}
                    value={form.longDesc}
                    name='longDesc'
                    class="form-control"
                    id="longDesc"
                    rows="3"
                >
                </textarea>
            </div>
            <div class="form-group">
                <label htmlFor="genre">Genre</label>
                <select
                    onChange={handleGenreChange}
                    multiple
                    class="form-control"
                    id="genre">
                    <option>drama</option>
                    <option>music</option>
                    <option>adventure</option>
                    <option>historical</option>
                    <option>action</option>
                </select>
            </div>
            <button onClick={submitForm} type="button" className="btn btn-primary">Create</button>
        </form>
    )
}

export default MovieCreateForm
import { useRouter } from "next/router";
import {getMovieById} from "../../actions";

const Movie = (props) => {
    const router = useRouter()
    const { id } = router.query
    const { movie } = props

      return (
          <div className="container">
              <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                  <div className="container-fluid py-5">
                      <h1 className="display-5 fw-bold">{ movie.name }</h1>
                      <p className="col-md-8 fs-4">{ movie.description }</p>
                      <hr className="my-4" />
                      <p>{ movie.genre}</p>
                      <button className="btn btn-primary btn-lg" type="button">Example button</button>
                      <img src={movie.image}/>
                  </div>
                  <p className="desc-text">{ movie.longDesc }</p>
              </div>
              <style jsx>{`
                .desc-text {
                  font-size: 21px;
                }
              `}
              </style>
          </div>
      )
}

Movie.getInitialProps = async ({ query }) => {
    const movie = await getMovieById(query.id)

    return { movie }
}

export default Movie


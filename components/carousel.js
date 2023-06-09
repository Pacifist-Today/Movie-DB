import Image from "next/image";


const Carousel = (props) => {

    const { images } = props
    // console.log(images)

    return (

        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                { images.map((movie, index) => (
                    <div key={movie.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={movie.url} className="d-block w-100" alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>


      //   <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
      //       <ol className="carousel-indicators">
      //           { images.map((image, index) => (
      //                   <li
      //                       key={image.id}
      //                       data-target="#carouselExampleIndicators"
      //                       data-slide-to={index}
      //                       className={index === 0 ? 'active' : ''}>
      //                   </li>
      //               )
      //           )
      //           }
      //       </ol>
      //       <div className="carousel-inner" role="listbox">
      //           { images.map((image, index) => (
      //                   <div key={image.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
      //                       <img
      //                           className="d-block img-fluid carousel-image"
      //                           src={image.url}
      //                           alt={image.name} />
      //                   </div>
      //               )
      //           )
      //           }
      //       </div>
      //       <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      //           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      //           <span className="sr-only">Previous</span>
      //       </a>
      //       <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      //           <span className="carousel-control-next-icon" aria-hidden="true"></span>
      //           <span className="sr-only">Next</span>
      //       </a>
      //       <style jsx>{`
      //   .carousel-item {
      //     max-height: 350px;
      //   }
      // `}
      //       </style>
      //   </div>
    )
}

export default Carousel
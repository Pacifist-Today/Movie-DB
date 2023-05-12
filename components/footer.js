import React from "react";


const Footer = () => {
    return (
        <footer className="py-3">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
            </ul>
            <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
        </footer>
        // <footer className="py-5 bg-dark">
        //     <div className="container">
        //         <p className="m-0 text-center text-white">Copyright &copy; D.B.</p>
        //     </div>
        // </footer>
    )
}

export default Footer
import React from 'react'
import Button from 'react-bootstrap/Button';
import {Modal as ModalBoot} from 'react-bootstrap';
import {useState} from "react";
import MovieCreateForm from "./movieCreateForm";

const Modal = (props) => {
    const {children, show, handleShowModal, handleCloseModal} = props

    // const [show, setShow] = useState(false);
    //
    // const handleCloseModal = () => setShow(false);
    // const handleShowModal = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShowModal}>
                Create Movie
            </Button>

            <ModalBoot show={show} onHide={handleCloseModal}>
                <ModalBoot.Header closeButton>
                    <ModalBoot.Title>Create movie form</ModalBoot.Title>
                </ModalBoot.Header>
                <ModalBoot.Body>
                    {children}
                </ModalBoot.Body>
                {/*<ModalBoot.Footer>*/}
                {/*    <Button variant="secondary" onClick={handleCloseModal}>*/}
                {/*        Close*/}
                {/*    </Button>*/}
                {/*    <Button variant="primary" onClick={handleCloseModal}>*/}
                {/*        Save Changes*/}
                {/*    </Button>*/}
                {/*</ModalBoot.Footer>*/}
            </ModalBoot>
        </>
    );

    // return (
    //     <>
    //         <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    //             Create movie
    //         </button>
    //
    //         <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //             <div className="modal-dialog">
    //                 <div className="modal-content">
    //                     <div className="modal-header">
    //                         <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
    //                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
    //                     </div>
    //                     <div className="modal-body">
    //                         {props.children}
    //                     </div>
    //                     {/*<div className="modal-footer">*/}
    //                     {/*    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
    //                     {/*    <button type="button" className="btn btn-primary">Save changes</button>*/}
    //                     {/*</div>*/}
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
}

// class Modal extends React.Component {
//
//     constructor(props) {
//         super(props)
//         this.closeButton = null
//     }
//
//     closeModal() {
//         this.closeButton.click()
//     }
//
//     submitModal = () => {
//         alert('Submitting Modal')
//         this.closeModal()
//     }
//
//     render() {
//         return (
//             <div>
//                 <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//                     Create Movie
//                 </button>
//
//                 <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="exampleModalLabel">Create Movie</h5>
//                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div className="modal-body">
//                                 {this.props.children}
//                             </div>
//                             <div className="modal-footer">
//                                 <button ref={ele => this.closeButton = ele} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                                 { this.props.hasSubmit &&
//                                     <button onClick={this.submitModal} type="button" className="btn btn-primary">Save changes</button>
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }



// const Modal = (props) => {

//   let closeButton = null

//   const submitModal = () => {
//     alert('Submitting Modal')
//     closeButton.click()
//   }

//   return (
//     <div>
//       <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//         Create Movie
//       </button>

//       <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">Create Movie</h5>
//               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               {props.children}
//             </div>
//             <div className="modal-footer">
//               <button ref={ele => closeButton = ele} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//               { props.hasSubmit &&
//                 <button onClick={submitModal} type="button" className="btn btn-primary">Save changes</button>
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export default Modal
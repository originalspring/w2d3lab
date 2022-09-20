import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DisplayProducts(props) {
    const [show, setShow] = useState(false);
    const [showImg, setShowImg] = useState({});
    const handleShow = (product) => {
      setShow(true);
      setShowImg(product);
    };
    const handleClose = () => {
      setShow(false);
    };

    return (
    <div>
        {props.products.map((product) => {
         return (
          <>
          <div key={product.id} className="border border-1 p-3">
                 <h3 className="mx-5">
                     {product.title}
                 </h3>
                 <img
                     onClick={() => handleShow(product)}
                     src={product.img}
                     width="150"
                     alt={product.title}
                     className="mx-5" />
                 <button
                     className="btn btn-secondary mx-2"
                     onClick={() => props.increaseBtn(product)}
                 >
                     <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" />
                 </button>
                 <button
                     className="btn btn-secondary mx-2"
                     onClick={() => props.decreaseBtn(product)}
                 >
                     <FontAwesomeIcon icon={faMinusCircle} className="fas fa-lg" />
                 </button>
                 <span id="qty" className="mx-5 p-3 border border-3">
                     {product.quantity}
                 </span>
                 Quantity
             </div>
             <Modal show={show} onHide={handleClose}>
                     <Modal.Header closeButton>
                         <Modal.Title>{showImg.title}</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                         <img
                             src={showImg.img}
                             width="350"
                             alt={showImg.title}
                             className="mx-5" />
                         <p>
                             <span className="text-dark">Ratings: </span>
                             {showImg.ratings}/5
                         </p>
                     </Modal.Body>
                 </Modal>
                 </>
                );
             })}
         </div>
    );
}

    
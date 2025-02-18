import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState(null);

  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <div
              key={item.id} // Add a unique key
              className="card"
              onClick={() => {
                setShow(true);
                setItem(item);
              }}
            >
              <img src={thumbnail} alt={item.volumeInfo.title} />
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
                <p className="amount">&#8377;{amount}</p>
              </div>
            </div>
          );
        }
        return null; // Ensure undefined cases are handled
      })}

      {/* Modal is placed outside the loop and shown only when needed */}
      {show && (
        <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
      )}
    </>
  );
};

export default Card;

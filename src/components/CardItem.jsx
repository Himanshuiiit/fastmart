import React from 'react'
import {useCart} from 'react-use-cart'

const CardItem = (item) => {
    const {addItem} = useCart();
  return (
    <div
      className="card my-5 py-4"
      key={item.id}
      style={{ width: "18rem", margin: "1.5rem" }}
    >
      <img src={item?.img} className="card-img-top" alt={item.title} />
      <div className="card-body text-center">
        <h5 className="card-title">{item.title}</h5>
        <div className="lead">${item.price}</div>
        <button onClick={addItem(item.item)} className="btn btn-primary">
          "Add to Cart"
        </button>
      </div>
    </div>
  );
};

export default CardItem
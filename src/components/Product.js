import React from 'react';
import { useStateValue } from '../StateProvider';
import './Product.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    toast.dark(
      <div>
        <h4>
          <strong>Added To Basket!</strong>
        </h4>
        <div className='toastProduct'>
          <img className='toastProduct__image' src={image} alt={title} />
          <div className='toastProduct__info'>
            <p className='toastProduct__title'>{title}</p>
            <p className='toastProduct__price'>
              <small>$</small>
              <strong>{price}</strong>
            </p>
          </div>
        </div>
      </div>,
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  return (
    <>
      <div className='product'>
        <div className='product__info'>
          <p>{title}</p>
          <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='product__rating'>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt={title} />
        <button onClick={addToBasket}>Add To Basket</button>
      </div>
      <ToastContainer style={{ marginTop: 50 }} />
    </>
  );
}

export default Product;

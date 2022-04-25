import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useBasket } from "../contexts/BasketContext";
import { BASE_URL } from "../api/ApiConfig";
import { useLanguage } from "../contexts/LanguageContext";
const ProductDetail = () => {
  const { id } = useParams();
  const [singlePro, setSinglePro] = useState();
  const [loading, setLoading] = useState(true);
  const {items,addToCart}=useBasket()
  const {language}=useLanguage()

  useEffect(() => {
    fetch(`${BASE_URL}/api/products/${id}/${language}`)
      .then((c) => c.json())
      .then((c) => setSinglePro(c));
    setLoading(false);
  }, [id, language]);
  const findBasketItem=items.find(item=>item.id===Number(id));
  return (
    <section className="product-detail py-5">
      <div className="container">
        {loading && <p>loading...</p>}
        {singlePro != null ? (
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="pro-img">
                {/* <img className='img-fluid' src={singlePro.image} alt={singlePro.title} /> */}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="pro-info">
                {/* <span>{singlePro.category}</span> */}
                {singlePro.productRecords.map((rec) => (
                  <div key={rec.id}>
                    <h2>{rec.name}</h2>
                    <p>{rec.description}</p>
                  </div>
                ))}
                <p>Price:{singlePro.price} AZN</p>
                <button className={`btn ${findBasketItem?"btn-danger":"btn-outline-success"}`}
                  onClick={()=>addToCart(singlePro,findBasketItem)}
                >
                 {findBasketItem?"Remove From Cart":"Add To Cart"} 
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="row align-items-center">
            <div className="col-lg-5">
              <Skeleton count={5} />
            </div>
            <div className="col-lg-7">
              <Skeleton count={1} width={"40%"} />
              <Skeleton count={2} width={"80%"} />
              <Skeleton count={3} width={"60%"} />
              <Skeleton count={1} width={"20%"} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;

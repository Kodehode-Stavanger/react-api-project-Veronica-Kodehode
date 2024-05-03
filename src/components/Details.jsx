import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Details.module.css";

const renderStars = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span key={i}>⭐</span>);
    } else {
      stars.push(<span key={i}>✰</span>);
    }
  }
  return stars;
};

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}${id}`)
      .then((response) => {
        setItem(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Fetching product...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!item) {
    return <p>Product not found...</p>;
  }

  return (
    <div className={styles.product}>
      <img src={item.image} alt={item.title} />
      <div>
        <h2>{item.title}</h2>
        <div className={styles.stars}>
          {renderStars(item.rating.rate)}{" "}
          <span>{item.rating.count} reviews</span>{" "}
        </div>
        <p>
          <span>{item.description}</span>{" "}
        </p>
        <p>£ {item.price}</p>
      </div>
    </div>
  );
};

export default Details;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching data", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Fetching...</p>;

  return (
    <>
      <div className={styles.mainContainer}>
        {items.map((item) => (
          <Link
            to={`/item/${item.id}`}
            key={item.id}
            className={styles.productLink}>
            <div className={styles.product}>
              <p className={styles.title}>{item.title}</p>
              <img src={item.image} alt={item.title} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

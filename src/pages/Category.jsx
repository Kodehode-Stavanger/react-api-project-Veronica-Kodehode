import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Category.module.css";

const Category = () => {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_CATEGORY_API_URL}${categoryName}`)
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) {
    return <p>Fetching product... </p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const capCategoryName =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <div className={styles.container}>
      <h2 className={styles.headline}>{capCategoryName}</h2>
      <div className={styles.itemsContainer}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <Link to={`/item/${item.id}`} className={styles.itemLink}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.itemImage}
              />
            </Link>
            <div className={styles.itemDetails}>
              <p className={styles.itemPrice}> £ {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

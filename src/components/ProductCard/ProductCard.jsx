import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.image}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.price}>${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;

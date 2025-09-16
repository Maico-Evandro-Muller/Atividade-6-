import React, { useState, useEffect } from 'react';
import Button from './Button';
import Skeleton from './Skeleton';

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Skeleton width="100%" height="300px" />;

  return (
    <div className="product-card" tabIndex="0">
      <div className="image-container">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>
      <h3 className="title">{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="rating">{'★'.repeat(product.rating)}</p>
      <span className={`tag ${product.tag.toLowerCase()}`}>{product.tag}</span>
      <Button variant="solid">Adicionar</Button>
    </div>
  );
};

export default ProductCard;
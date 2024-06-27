import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box active">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Discover the latest trends and a wide range of high-quality clothing, footwear, and accessories for men, women, and children. Enjoy a seamless shopping experience with our user-friendly website, secure payment options, and fast shipping. Stay ahead in style with our regularly updated collections and exclusive offers. Shop now and elevate your wardrobe with Trendy Threads!
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;

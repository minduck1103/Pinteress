import React from 'react';
import Image from '../Image/Image';
import ImageSkeleton from '../ImageSkeleton/ImageSkeleton';
import './ImageGrid.css';

const ImageGrid = ({ images, loading }) => {
  return (
    <div className="grid-container">
      {loading ? (
        <div className="grid-skeleton">
          <ImageSkeleton cards={6} />
        </div>
      ) : (
        <div className="grid">
          {images.map((item, index) => (
            <Image key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGrid; 
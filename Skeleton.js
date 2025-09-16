import React from 'react';

const Skeleton = ({ width = '100%', height = '100%' }) => {
  return <div className="skeleton" style={{ width, height }} />;
};

export default Skeleton;
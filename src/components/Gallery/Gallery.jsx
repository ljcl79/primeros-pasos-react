import React from 'react'
import Product from '../Product/Product.jsx';

const Gallery = () => {
  return (
    <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Product nombre="Producto 1" precio="1000" descripcion="Descripción del producto 1"></Product>
            <Product nombre="Producto 2" precio="1200" descripcion="Descripción del producto 2"></Product>
            <Product nombre="Producto 3" precio="2000" descripcion="Descripción del producto 3"></Product>
            <Product nombre="Producto 4" precio="2200" descripcion="Descripción del producto 4"></Product>
        </div>
    </div>
  )
}

export default Gallery
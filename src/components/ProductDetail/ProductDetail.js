import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    //useParams can read your data "productKey" we take it from App.js file line 32. to show exact product details here tutorial 25.5
    const {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey);
    
    return (
        <div>
            {/* <h1>{productKey} Detail is coming soon</h1> */}
            <h1>Product details</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;
import React from 'react'
import { connect } from "react-redux"
import {getProducts,clearProducts} from "./actions"
import "./product.css"

 const Product = ({products,getProducts,loading,clearProducts}) =>{
    return(
            <div style = {{display: 'grid'}}>
                <button className = "btn btn-primary" onClick={getProducts}>Get Products</button>
                {loading ? <div class="loader"></div> : null}
               {products.map(product =>(
                   <h3 key = {product.id}>{product.title}</h3>
               ))}
               {products.length > 0 ? <button className = "btn btn-primary" onClick={clearProducts}>Clear Products</button>:null}
            </div>
    )
}
function mapStateToProps({productState : {loading,products}}) {
    return { products: products,loading: loading}
}
const mapDispatchToProps ={
    getProducts,
    clearProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
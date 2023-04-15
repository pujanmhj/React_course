import React from 'react'
// import { Products } from './Products'
// import { useState } from 'react';
function Form() {
    // const [o, setProducts]= useState(Products);
    return (
        <div  class="d-flex flex-row p-2">
           
            <div class="p-4 lg-6 ">
            <p>Fill Free to add Products</p>
                <table class="tbl-cart" cellpadding="10" cellspacing="1">
                    <tbody>
                        <tr>
                            <td>Product Name</td>
                            <td><input type="text" name="product_name" value="" required /></td>

                        </tr>
                        <tr>
                            <td>Product Price</td>
                            <td><input type="number" name="product_price" value="" required /></td>

                        </tr>
                        <tr>
                            <td>Product CurrencyType</td>
                            <td><input type="text" name="product_currencytype" value="" required /></td>

                        </tr>
                        <tr>
                            <td>Product Image</td>
                            <td> <input type="file" name="product_image" /></td>

                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><input type="submit" name="submit" value="Add Product" /></td>


                        </tr>
                    </tbody>
                </table>
            </div>
            <div  class="p-4 lg-6 ">
                <p>List of product</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">SN</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* {
                          o.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{value.name}</td>
                                        <td>{value.price}</td>
                                        <td>
                                            <button>EDit</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default  Form
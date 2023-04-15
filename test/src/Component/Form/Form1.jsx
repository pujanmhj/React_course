import Product from "../../Product";
// import './Form.css';
// import { useState } from 'react';
// function Form() {
//     const [productts, setProducts] = useState(Product);
//     return (
//       <div className="container">
//                 <div className="right">
//                     <table class="tbl-cart" cellpadding="10" cellspacing="1">
//                         <tbody>
//                             <tr>
//                                 <td>Product Name</td>
//                                 <td><input type="text" name="product_title" value="" required/></td>

//                             </tr>
//                             <tr>
//                                 <td>Product Price</td>
//                                 <td><input type="number" name="price" value="" required/ ></td>

//                             </tr>
//                             <tr>
//                                 <td>Product CurrencyType</td>
//                                 <td><input type="text" name="code" value="" required/ ></td>

//                             </tr>
//                             <tr>
//                                 <td>Product Image</td>
//                                 <td> <input type="file" name="product_image" /></td>

//                             </tr>
//                             <tr>
//                                 <td>&nbsp;</td>
//                                 <td><input type="submit" name="submit" value="Add Product" /></td>


//                             </tr>
//                     </tbody>
//                 </table>
//             </div>
//             <div className="left">
//                 <table>
//                     <thead>
//                         <tr>
//                             <td>Product Name</td>
//                             <td>Price</td>
//                             <td>Action</td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             productts.map((value, key) => {
//                                 return (
//                                     <tr key={key}>
//                                         <td>{value.name}</td>
//                                         <td>{value.price}</td>
//                                         <td>
//                                             <button>EDit</button>
//                                             <button>Delete</button>
//                                         </td>
//                                     </tr>
//                                 )
//                             })
//                         }
//                     </tbody>
//                 </table>
//             </div>
//             </div>
       
//     )
// }

// export default Form;
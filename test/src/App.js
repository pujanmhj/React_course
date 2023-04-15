//import './App.css';
import Name from './Name';
import { useState } from 'react';
import Product from './Product';
// import Card from './Component/Card'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

// import Nav from './Nav'
// import {BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
function App() {
  //from grandchild to parent function
  // const fromChildFunction = (data) => {
  //   console.log("data",data)
  // } 

  // eventhandling 
  const [count, setCount] = useState(0);
  const minus = () => { if (count > 0) setCount(count - 1) }
  const plus = (val, e) => { setCount(count + val); (console.log(e)) }

  //
  const [products, setProduct] = useState(Product);

  return (
    <div className=" ">
      <div>
      
       
      </div>
      <div>
        {/* //yei bata atribute halna milcha ani pachadi chai props use garni */}
        <Name
          fname={"Pujan"}
          lname={"MHJ"}
          address={"Thecho"}
        // fromName={fromChildFunction}
        />
        {/* <Name fname={"Pujan1"} lname={"MH1J"} address={"LALITPUR"} /> */}
      </div>
      <div className='Calculator'>
        <div className="Cal">
          <button className='Btn' onClick={minus}>-</button>
          <div style={{ color: "red", fontSize: 50 }}>{count}</div>
          <button className='Btn' onClick={(e) => { plus(10, e) }}>+</button>
        </div>
      </div>
      <div className='main'>
        {
          products.map((product, key) => {
            return (
              // product.price>25000 ?
              //   <li key={key}>
              //   {
              //      <span>{product.name}</span>
              //   }
              //   </li>
              // :
              //   <li key={key}>else part</li>
              // <Card product={product} key={key}/>
              <Card title={product.name} subTitle={product.price} className="md:w-25rem">
                <p className="m-50">
                  {product.description.map((des, key) => {
                    return (
                      <div key={key}>
                        <p>{des.name}</p>
                      </div>

                    )
                  })}
                </p>
              </Card>
            )
          })
        }
      </div>
      <Button label="Submit" />

      <div className="card">
        <div className="card-container blue-container flex align-items-center justify-content-start">
          <div className="w-4rem h-4rem bg-blue-500 text-white font-bold p-4 border-round mr-3">1</div>
          <div className="w-4rem h-4rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-4 border-round mr-3">2</div>
          <div className="w-4rem h-4rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-4 border-round">3</div>
        </div>
      </div>
    </div>
  );
}

export default App;


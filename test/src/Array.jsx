import React from 'react'

const Array = () => {

    const data =[
        {
            name:"Rakesh Shrestha",
            address:"Kathmandu",
            phone:9893876256
        },
        {
            name:"Pujan Maharjan",
            address:"Thecho",
            phone:98987876776
        },
        {
            name:"Rojan Maharjan",
            address:"Thecho",
            phone:9898787676
        },
        {
            name:"Kuldip Silwal",
            address:"Godawari",
            phone:93884774647
        }
    ]

  return (
    <div>
{
    data.map((o,i) =>{
        return <div className='' style={{border: "2px solid grey", marginBottom: "5px"}}>
                <h1>{o.name}</h1>
                <h3>{o.phone}</h3>
                <p>{o.address}</p>
            </div>
    })
}

    </div>
  )
}

export default Array
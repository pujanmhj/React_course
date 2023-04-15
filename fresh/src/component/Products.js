import React from 'react'
// import './Styleforproduct.css';
export const Products = () => {

  let saman = [
    {
      name: "Camera",
      price: 500000,
      currencyType: "Rs",
      image: "https://images.unsplash.com/photo-1599533706820-b9a1b6725125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhJTIwcGhvdG98ZW58MHx8MHx8&w=1000&q=80",
      description: [
        {
          name: "MF"
        },
        {
          name: "lorem"
        }
      ]
    },
    {
      name: "hardware",
      price: 25000,
      currencyType: "Rs",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyZHdhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      description: [
        {
          name: "MF"
        },
        {
          name: "lorem"
        },
        {
          name: "luck"
        },
        {
          name: "habit"
        }
      ]
    },
    {
      name: "Charger",
      price: 2500,
      currencyType: "Rs",
      image: "https://images.unsplash.com/photo-1586254116951-5263e2cdb44c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhcmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      description: [
        {
          name: "MF"
        },
        {
          name: "lorem"
        }
      ]
    },
    // {
    //   name: "laptop",
    //   price: 250000,
    //   currencyType: "Rs",
    //   image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    //   description: [
    //     {
    //       name: "MF"
    //     },
    //     {
    //       name: "lorem"
    //     }
    //   ]
    // },
    // {
    //   name: "Watch",
    //   price: 50000,
    //   currencyType: "Rs",
    //   image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //   description: [
    //     {
    //       name: "MF"
    //     },
    //     {
    //       name: "lorem"
    //     }
    //   ]
    // },
    // {
    //   name: "earphone",
    //   price: 250000,
    //   currencyType: "Rs",
    //   image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVhcnBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //   description: [
    //     {
    //       name: "MF"
    //     },
    //     {
    //       name: "lorem"
    //     }
    //   ]
    // }
  ]
  return (
    <>
      {
        saman.map((value, key) => {
          return (
            <div key={key}>

              <div class="card mx-auto mb-4 w-25 p-3">
                <img class="card-img-top" src={value.image} alt="Card image loading"/>
                  <div class="card-body">
                    <h5 class="card-title">{value.name}</h5>
                    <p class="card-text">{value.currencyType}</p>
                    <p class="card-text">{value.price}</p>
                    <a href="#" class="btn btn-primary">Visit</a>
                  </div>
              </div>

            </div>

          )
        })
      }
    </>
  )
}

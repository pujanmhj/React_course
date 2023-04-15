import Age from './Age';

//one of the method of function class
// function Child({
//     fname ,lname
// }) {
//   var age = 21;
//   var address = "lalitpur";

//   return (
//     <div className="App">
//       <h1>{age} {address}</h1>
//       <h2>{fname} {lname}</h2>
//     </div>
//   );
// }

// function Child(props) {
//     var age = 21;
//     var address = "lalitpur";

//     return (
//       <div className="App">
//         <h1>{age} {address}</h1>
//         <h2>{props.fname} {props.lname}</h2>
//       </div>
//     );
//   }

//   export default Child;

function Name(props) {
    // for data transfer from child to parent one
    // const fromChildFunction = (data) => {
    //     props.fromName(data);        
    // }
    return (
        <>
            <spam> {`First Name : ${props.fname}`} </spam>
            <spam> {`Last Name : ${props.lname}`} </spam>
            <spam> {`Address : ${props.address}`} </spam>

            <Age
                umer={21}
                // fromChild={fromChildFunction}
            />
        </>
    )
}

export default Name;
import './CardCss.css';
function Card(props){
    return(
    <div>
<div className="main">
<div class="card">
    <div class="cardHeader">
    <img src={props.product.image}  />
    </div>
    <div class="cardBody">
        <span>{props.product.name}</span>
        <span>{props.product.price}</span>
        <span>{props.product.currencyType}</span>
        {/* <span>{props.product.description}</span> */}
    </div>
    </div>
</div>
    </div>
    )
}

export default Card;
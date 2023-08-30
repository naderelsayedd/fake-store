import { Link } from "react-router-dom";
import './layout/product.css';
export default function Product(props){
    const {product} = props
    return(
        <div className="card">
        <div className="card-img">
        <img src={product.image} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
            <h5 className="card-title">{product.title.slice(0 , 30)}</h5>
            <p className="text-center">Price :{product.price} LE</p>
            <p className="text-center">Count :{product.rating.count}</p>
            <Link to={`/product/${product.id}`} className="btn btn-primary details">View Details</Link>
        </div>
        </div>
    )
}
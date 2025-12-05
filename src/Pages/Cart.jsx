import { useParams } from "react-router-dom";


function Cart(){

    const { id } = useParams();

    return(
        <div>
            <p>omo</p>
             <h1>Product ID: {id}</h1>
        </div>
    )
}

export default Cart
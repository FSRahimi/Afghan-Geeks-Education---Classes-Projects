import { useParams } from "react-router-dom";

function ProductDetails() {
    const {id} = useParams();

    return(
     <div className="details">
       <h2> Product Details</h2>

       <p  style={{
        marginTop: "20px",
        fontSize: "20px"
       }}> Product ID: {id} </p>
       <p style={{
        color:"#64748b",
        marginTop: "10px"
       }}> This page Explain useParams hooks</p>
     </div>

    );
}

export default ProductDetails;
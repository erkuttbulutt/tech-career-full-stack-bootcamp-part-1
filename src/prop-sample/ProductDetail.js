import React from "react";
import PropTypes from "prop-types";

function ProductDetail({ name, unitPrice, stock, status, calc }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <h6>Price: {unitPrice}</h6>
      <h6>Stock: {stock}</h6>
      <h6>Status: {status}</h6>
      <div>
        <button onClick={() => calc()}>Calc Price</button>
      </div>
    </div>
  );
}

const calcTax = () => {
  alert("Calc Tax");
};

ProductDetail.propTypes = {
  name: PropTypes.string.isRequired,
  unitPrice: PropTypes.number,
  stock: PropTypes.number.isRequired,
  status: PropTypes.bool,
};

ProductDetail.defaultProps = {
  unitPrice: 5000,
  calc: calcTax,
};

export default ProductDetail;

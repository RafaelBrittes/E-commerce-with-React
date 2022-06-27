import { useContext } from "react";
import {Footer, Name, Price, ProductFormComponent } from "./product-card.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

  return (
    <ProductFormComponent>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductFormComponent>
  );
};

export default ProductCard;

import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Preview,
  TitleLink,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={`/shop/${title}`}>{title.toUpperCase()}</TitleLink>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

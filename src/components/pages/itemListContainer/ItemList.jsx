import { ProductCard } from "../../common/productCard/ProductCard";

export const ItemList = ({ items }) => {
  return (
    <section style={{ display: "flex", justifyContent: "space-evenly" }}>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  { id: 1, name: "Shoes", description: "Running shoes", price: "$5", image: "https://th.bing.com/th/id/R.3e15794a9cdcbd41630f9a7d91cc3f3d?rik=CLhcKIoeAn5TQQ&pid=ImgRaw&r=0"},
  { id: 2, name: "Macbook", description: "Apple Macbook", price: "$10", image: "https://www.hiptoro.com/wp-content/uploads/2019/06/MacBook-Pro-2019-e1559558024264.jpg" }
]

const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
  return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products;

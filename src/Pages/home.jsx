import { Fragment } from "react";
import HeaderPage from "../components/Fragments/Header";
import ProductsPage from "../components/Fragments/products";

const HomePage = () => {
    return (
        <Fragment>
            <HeaderPage />
            <ProductsPage />
        </Fragment>
    )
}

export default HomePage;
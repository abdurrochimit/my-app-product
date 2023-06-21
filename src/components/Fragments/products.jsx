import CardProduct from "../Elements/CardProduct";

const Products = [
    {
        id: 1,
        image: "https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg",
        description: "Fujifilm, Camera Body Only, Photography",
        price: "Rp10.000.000"
    },
    {
        id: 2,
        image: "https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg",
        description: "Fujifilm, Camera Body Only, Photography",
        price: "Rp10.000.000"
    },
    {
        id: 3,
        image: "https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg",
        description: "Fujifilm, Camera Body Only, Photography",
        price: "Rp10.000.000"
    },
    {
        id: 4,
        image: "https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg",
        description: "Fujifilm, Camera Body Only, Photography",
        price: "Rp10.000.000"
    },
    {
        id: 5,
        image: "https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg",
        description: "Fujifilm, Camera Body Only, Photography",
        price: "Rp10.000.000"
    },
    {
        id: 6,
        image: "https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg",
        description: "Fujifilm, Camera Body Only, Photography",
        price: "Rp10.000.000"
    }
]

const ProductsPage = () => {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32">
            {Products.map((product) => (
                <CardProduct>
                    <CardProduct.Header
                        image={product.image}
                    />
                    <CardProduct.Body
                        description={product.description}
                        price={product.price}
                    />
                </CardProduct>
            ))}
        </div>
    )
}

export default ProductsPage;
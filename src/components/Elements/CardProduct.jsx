const CardProduct = (props) => {
    const {children} = props;
    return (
        <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
           {children}
        </div>
    )
}

const Header = (props) => {
    const { image } = props;
    return (
        <img className="p-8 rounded-t-lg" src={image} alt="product image" />
    )
}

const Body = (props) => {
    const {description, price} = props;
    return (
        <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-sky-900">{description}</h5>
            <span className="text-3xl font-bold text-sky-900">{price}</span>
            <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 text-center">Add to cart</button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;

export default CardProduct;
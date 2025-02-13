import React, { useEffect, useState } from 'react';
import { FaStar, FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../api/Productapi';
import { Carousel } from 'react-bootstrap'; // For image carousel

export function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [productImages, setProductImages] = useState([]); // For multiple product images

    useEffect(() => {
        getProductById(id)
            .then((response) => {
                setProduct(response.data);
                // Simulate multiple images for the product
                setProductImages([
                    response.data.image, // Main image
                    "https://via.placeholder.com/500x300", // Placeholder image 1
                    "https://via.placeholder.com/500x300", // Placeholder image 2
                ]);
            })
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <div className="container my-5">
            {/* Back to Products Link */}
            <Link to="/products" className="btn btn-outline-secondary mb-4">
                <FaArrowLeft className="me-2" /> Back to Products
            </Link>

            {/* Product Details Section */}
            <div className="row">
                {/* Product Image Carousel */}
                <div className="col-md-6">
                    <Carousel>
                        {productImages.map((img, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100 rounded"
                                    src={img}
                                    alt={`Product Image ${index + 1}`}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

                {/* Product Information */}
                <div className="col-md-6">
                    <h1 className="fw-bold mb-4">{product?.name}</h1>
                    <p className="lead fs-4 text-muted mb-4">${product?.price}</p>

                    {/* Rating Section */}
                    <div className="d-flex align-items-center mb-4">
                        <div className="text-warning me-2">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="fs-4" />
                            ))}
                        </div>
                        <span className="text-muted">(4.5/5.0)</span>
                    </div>

                    {/* Quantity and Availability */}
                    <p className="lead fs-5 mb-4">
                        <strong>Availability:</strong> {product?.quantity > 0 ? "In Stock" : "Out of Stock"}
                    </p>

                    {/* Product Description */}
                    <div className="mb-4">
                        <h3 className="mb-3">Description</h3>
                        <p className="lead fs-6">
                            {product?.description ||
                                "This is a high-quality product designed to meet your needs. It features the latest technology and is built to last. Perfect for everyday use."}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="d-flex gap-3">
                        <button className="btn btn-primary btn-lg">
                            Add to Cart
                        </button>
                        <button className="btn btn-success btn-lg">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="mt-5">
                <h2 className="fw-bold mb-4">Customer Reviews</h2>
                <div className="row">
                    {/* Review 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="text-warning me-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="fs-5" />
                                        ))}
                                    </div>
                                </div>
                                <p className="card-text">
                                    "This product is amazing! It exceeded my expectations."
                                </p>
                                <footer className="blockquote-footer mt-2">John Doe</footer>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="text-warning me-2">
                                        {[...Array(4)].map((_, i) => (
                                            <FaStar key={i} className="fs-5" />
                                        ))}
                                    </div>
                                </div>
                                <p className="card-text">
                                    "Great value for the price. Highly recommended!"
                                </p>
                                <footer className="blockquote-footer mt-2">Jane Smith</footer>
                            </div>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="text-warning me-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="fs-5" />
                                        ))}
                                    </div>
                                </div>
                                <p className="card-text">
                                    "Fast delivery and excellent quality. Will buy again!"
                                </p>
                                <footer className="blockquote-footer mt-2">Mike Johnson</footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
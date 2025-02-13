import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home() {
    return (
        <div className="container-fluid p-0">
            {/* Hero Section */}
            <div className="hero-section bg-dark text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold">Welcome to TechZone</h1>
                    <p className="lead">Your one-stop shop for the latest electronics and gadgets.</p>
                    <a href="#featured-products" className="btn btn-primary btn-lg">Explore Products</a>
                </div>
            </div>

            {/* Featured Products Section */}
            <div id="featured-products" className="container my-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                <div className="row">
                    {/* Product Card 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <img src="../../public/pexels-photo.webp" className="card-img-top" alt="Smartphone" />
                            <div className="card-body">
                                <h5 className="card-title">Smartphone X</h5>
                                <p className="card-text">Experience the future with our latest Smartphone X. Featuring a 6.5" OLED display and 128GB storage.</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    {/* Product Card 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <img src="../../public/pexels-photo.webp" className="card-img-top" alt="Laptop" />
                            <div className="card-body">
                                <h5 className="card-title">UltraBook Pro</h5>
                                <p className="card-text">Powerful and portable, the UltraBook Pro is perfect for work and play.</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    {/* Product Card 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <img src="../../public/pexels-photo.webp" className="card-img-top" alt="Smartwatch" />
                            <div className="card-body">
                                <h5 className="card-title">SmartWatch 3</h5>
                                <p className="card-text">Stay connected and track your fitness with the SmartWatch 3.</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Shop by Category</h2>
                    <div className="row">
                        {/* Category 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow">
                                <img src="../../public/pexels-photo.webp" className="card-img-top" alt="Smartphones" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Smartphones</h5>
                                    <a href="#" className="btn btn-outline-primary">Shop Now</a>
                                </div>
                            </div>
                        </div>

                        {/* Category 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow">
                                <img src="../../public/pexels-photo.webp" className="card-img-top" alt="Laptops" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Laptops</h5>
                                    <a href="#" className="btn btn-outline-primary">Shop Now</a>
                                </div>
                            </div>
                        </div>

                        {/* Category 3 */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow">
                                <img src="../../public/pexels-photo.webp" className="card-img-top" alt="Accessories" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Accessories</h5>
                                    <a href="#" className="btn btn-outline-primary">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="container my-5">
                <h2 className="text-center mb-4">What Our Customers Say</h2>
                <div className="row">
                    {/* Testimonial 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <p className="card-text">"TechZone has the best electronics at great prices. Highly recommended!"</p>
                                <footer className="blockquote-footer">John Doe</footer>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <p className="card-text">"I love my new Smartphone X. The delivery was fast, and the product is amazing!"</p>
                                <footer className="blockquote-footer">Jane Smith</footer>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <p className="card-text">"Great customer service and high-quality products. Will shop here again!"</p>
                                <footer className="blockquote-footer">Mike Johnson</footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-4">
                <p>&copy; 2025 TechZone. All rights reserved.</p>
                <div className="social-icons">
                    <a href="#" className="text-white mx-2"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
                </div>
            </footer>
        </div>
    );
}
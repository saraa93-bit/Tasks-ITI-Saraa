import React, { useEffect, useState } from 'react';
import { Table, Container, Button, Form, Spinner, Alert, Modal } from 'react-bootstrap';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { deleteProduct, getAllProducts } from '../api/Productapi';

export function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // For search functionality
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(''); // For search input
    const [showDeleteModal, setShowDeleteModal] = useState(false); // For delete confirmation modal
    const [productToDelete, setProductToDelete] = useState(null); // Product to delete

    // Fetch products on component mount
    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                let response = await getAllProducts();
                setProducts(response.data);
                setFilteredProducts(response.data); // Initialize filtered products
                setIsLoading(false);
            } catch (error) {
                setErrors(error);
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Handle search input change
    useEffect(() => {
        if (searchTerm) {
            const filtered = products.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products); // Reset to all products if search term is empty
        }
    }, [searchTerm, products]);

    // Delete product handler
    const deleteHandler = async (productId) => {
        try {
            await deleteProduct(productId);
            setProducts(products.filter((product) => product.id !== productId));
            setFilteredProducts(filteredProducts.filter((product) => product.id !== productId));
            setShowDeleteModal(false); // Close the modal
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    // Show delete confirmation modal
    const confirmDelete = (productId) => {
        setProductToDelete(productId);
        setShowDeleteModal(true);
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center text-primary mb-4">Our Products</h2>

            {/* Add Product and Search Bar */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Link to="0/edit" className="btn btn-primary">
                    <FaPlus className="me-2" /> Add New Product
                </Link>
                <Form.Control
                    type="text"
                    placeholder="Search products..."
                    className="w-25"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Loading State */}
            {isLoading && !errors && (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <p className="mt-2">Loading products...</p>
                </div>
            )}

            {/* Error State */}
            {errors && (
                <Alert variant="danger" className="text-center">
                    {errors.message || "An error occurred while fetching products."}
                </Alert>
            )}

            {/* Products Table */}
            {!isLoading && !errors && (
                <Table striped bordered hover responsive className="mt-4">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    {/* Edit Button */}
                                    <Link to={`${product.id}/edit`} className="btn btn-sm btn-info me-2">
                                        <FaEdit />
                                    </Link>

                                    {/* View Button */}
                                    <Link to={`${product.id}`} className="btn btn-sm btn-warning me-2">
                                        <IoEye />
                                    </Link>

                                    {/* Delete Button */}
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => confirmDelete(product.id)}
                                    >
                                        <MdDelete />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this product? This action cannot be undone.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => deleteHandler(productToDelete)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
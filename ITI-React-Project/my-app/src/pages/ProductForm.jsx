import { useEffect, useState } from 'react';
import { Button, Container, Form, Card, Alert } from 'react-bootstrap';
import { addNewProduct, editProduct, getProductById } from '../api/Productapi';
import { useNavigate, useParams } from 'react-router-dom';

export function ProductForm() {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the product ID from the URL (if editing)
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        quantity: ""
    });
    const [errors, setErrors] = useState({}); // For validation errors
    const [isSubmitting, setIsSubmitting] = useState(false); // For loading state

    // Fetch product data if editing
    useEffect(() => {
        if (id != 0) { // If ID is not 0, it means we're editing an existing product
            getProductById(id)
                .then((response) => setFormData(response.data)) // Set form data with the fetched product details
                .catch((error) => console.log(error));
        }
    }, [id]);

    // Handle input changes
    const inputHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear errors when user starts typing
        setErrors({
            ...errors,
            [e.target.name]: ""
        });
    };

    // Validate form data
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Product name is required.";
        if (!formData.price || isNaN(formData.price)) newErrors.price = "Price must be a valid number.";
        if (!formData.quantity || isNaN(formData.quantity)) newErrors.quantity = "Quantity must be a valid number.";
        return newErrors;
    };

    // Handle form submission
    const productHandler = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true); // Show loading state
        try {
            if (id == 0) { // If ID is 0, it means we're adding a new product
                await addNewProduct(formData);
            } else { // Otherwise, we're editing an existing product
                await editProduct(id, formData);
            }
            navigate('/products'); // Redirect to the products list page
        } catch (error) {
            console.error("Error saving product:", error);
            setErrors({ submit: "An error occurred while saving the product." });
        } finally {
            setIsSubmitting(false); // Hide loading state
        }
    };

    return (
        <Container className="mt-5">
            <Card className="shadow">
                <Card.Body>
                    <h2 className="mb-4 text-center text-primary">
                        {id == 0 ? "Add New Product" : "Edit Product"}
                    </h2>

                    {/* Display submit error if any */}
                    {errors.submit && <Alert variant="danger">{errors.submit}</Alert>}

                    <Form onSubmit={productHandler}>
                        {/* Product Name Field */}
                        <Form.Group className="mb-4" controlId="formName">
                            <Form.Label className="fw-bold">Product Name</Form.Label>
                            <Form.Control
                                name="name"
                                value={formData.name}
                                onChange={inputHandler}
                                type="text"
                                placeholder="Enter Product Name"
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {/* Product Price Field */}
                        <Form.Group className="mb-4" controlId="formPrice">
                            <Form.Label className="fw-bold">Price</Form.Label>
                            <Form.Control
                                name="price"
                                value={formData.price}
                                onChange={inputHandler}
                                type="text"
                                placeholder="Enter Product Price"
                                isInvalid={!!errors.price}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.price}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {/* Product Quantity Field */}
                        <Form.Group className="mb-4" controlId="formQuantity">
                            <Form.Label className="fw-bold">Quantity</Form.Label>
                            <Form.Control
                                name="quantity"
                                value={formData.quantity}
                                onChange={inputHandler}
                                type="text"
                                placeholder="Enter Product Quantity"
                                isInvalid={!!errors.quantity}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.quantity}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {/* Submit Button */}
                        <div className="d-grid">
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Saving..." : (id == 0 ? "Add Product" : "Save Changes")}
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}
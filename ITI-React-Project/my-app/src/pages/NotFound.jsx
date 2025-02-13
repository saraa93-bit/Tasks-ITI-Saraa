import React from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="notfound d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="text-center">
                <h1 className="display-1 text-muted">404</h1>
                <h2 className="mb-4">Oops! Page Not Found</h2>
                <p className="lead text-muted mb-4">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <button
                    className="btn btn-primary btn-lg"
                    onClick={() => navigate('/')}
                >
                    Go Back Home
                </button>
            </div>
        </div>
    );
}
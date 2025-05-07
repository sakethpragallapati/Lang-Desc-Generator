import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [langName, setLangName] = useState('');
    const [loading, setLoading] = useState(false);
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setOutput('');
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/gemini', { langName });
            setOutput(response.data.output);
        } catch (err) {
            console.error(err);
            setError('Something went wrong while fetching data.');
        } finally {
            setLoading(false);
        }
    };

    // Function to split the output into paragraphs
    const formatOutput = (text) => {
        if (!text) return null;
        
        return text.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-3">{paragraph}</p>
        ));
    };

    return (
        <div className="min-vh-100 bg-dark-blue py-5 px-3 text-white">
            <div className="container max-w-2xl mx-auto bg-white text-dark rounded-3 shadow-lg p-5">
                <h2 className="text-3xl font-weight-bold text-center text-primary mb-4">Language Description Generator</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="langName" className="form-label text-primary">Language Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="langName"
                            placeholder="e.g., Swahili"
                            value={langName}
                            onChange={(e) => setLangName(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={loading}
                    >
                        {loading ? 'Generating...' : 'Generate'}
                    </button>
                </form>

                {error && (
                    <div className="mt-3 alert alert-danger">
                        {error}
                    </div>
                )}

                {output && (
                    <div className="mt-4">
                        <h5 className="h5 text-primary mb-2">Generated Description</h5>
                        <div className="p-3 bg-light border rounded">
                            {formatOutput(output)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Form;
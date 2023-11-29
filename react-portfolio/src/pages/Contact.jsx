import React, { useState } from 'react';
function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
    };
  
    const handleBlur = (e) => {
      if (!e.target.value.trim()) {
        setErrors({ ...errors, [e.target.name]: 'This field is required' });
      } else {
        setErrors({ ...errors, [e.target.name]: '' });
      }
    };
  
    return (
      <section className="p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          {/* Repeat similar structure for email and message fields */}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </form>
      </section>
    );
  }
  
  export default Contact;
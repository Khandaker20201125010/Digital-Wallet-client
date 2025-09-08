import React, { useState } from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Your message was sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(`${data.error}`);
      }
    } catch (err) {
      toast.error('Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-lg rounded-lg bg-white text-black dark:text-white p-6 shadow-md">
      <h1 className="mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
        Contact Us
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input  
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-md border p-2 focus:ring-2 focus:ring-purple-500"
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-md border p-2 focus:ring-2 focus:ring-purple-500"
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full rounded-md border p-2 focus:ring-2 focus:ring-purple-500"
        />
        <Button
          variant={'gradient'}
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-purple-600 py-2 text-white transition hover:bg-purple-700"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};

export default ContactForm;

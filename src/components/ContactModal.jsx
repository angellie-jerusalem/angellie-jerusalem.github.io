import { useEffect, useRef, useState } from 'react';
import useEscapeKey from '../hooks/useEscapeKey';
import { site } from '../data/site';

const EMPTY = { name: '', email: '', message: '' };

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState(EMPTY);
  const firstField = useRef(null);

  useEscapeKey(onClose, open);

  useEffect(() => {
    if (!open) return undefined;
    firstField.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setForm(EMPTY);
    onClose();
  };

  return (
    <div
      className="page-contact active"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title">
        <button type="button" className="close-modal" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <p className="label">Get in Touch</p>
        <h2 className="title" id="contact-title">Let's talk</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input ref={firstField} type="text" id="name" name="name" value={form.name} onChange={update} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={update} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={form.message} onChange={update} required />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

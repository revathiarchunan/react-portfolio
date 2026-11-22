
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
    setServerError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSending(true);
    setServerError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/revathiarchunan11@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: "New Portfolio Contact Message",
          }),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setServerError(
          result.message || "Message could not be sent. Please try again."
        );
      }
    } catch (error) {
      setServerError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="section-heading">
        <span className="section-label">GET IN TOUCH</span>

        <h2>
          Let's <span>Connect</span>
        </h2>

        <p>
          Have a project or opportunity? I'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's work together</h3>

          <p>
            I'm open to frontend opportunities, collaborations and
            exciting projects. Feel free to reach out!
          </p>

          <div className="contact-detail">
            <span>Email</span>
            <p>
              <a href="mailto:revathiarchunan11@gmail.com">
                revathiarchunan11@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-detail">
            <span>Location</span>
            <p>Abu Dhabi, UAE</p>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
        >
          {submitted && (
            <div className="success-message" role="status">
              Your message has been sent successfully! 🎉
            </div>
          )}

          {serverError && (
            <div className="error-message" role="alert">
              {serverError}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <small>{errors.name}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small>{errors.email}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <small>{errors.message}</small>}
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message ↗"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

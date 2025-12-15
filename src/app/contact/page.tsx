export default function Contact() {
  return (
    <>
      <main className="contact-us-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear about your project. Fill out the form below and we'll get back to you shortly.</p>
      </main>

      <section className="contact-section">
        <div className="contact-container">
          <h2>Request a Custom Quote</h2>

          <form action="https://formspree.io/f/xvgrbvzp" method="POST" className="contact-form">
            <div className="form-group">
              <label htmlFor="role">Which describes you best?*</label>
              <select id="role" name="role" required>
                <option value="">-- Please Select --</option>
                <option value="homeowner">Homeowner</option>
                <option value="contractor">Contractor</option>
                <option value="business">Business Owner</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Notes</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell us what you need..."></textarea>
            </div>
            <input type="hidden" name="_redirect" value="/thanks" />

            <button type="submit" className="button">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}


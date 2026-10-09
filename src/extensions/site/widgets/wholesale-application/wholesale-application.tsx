import { widgetMarkup } from '../../../../lib/wholesale/widget';

class WholesaleApplication extends HTMLElement {
  static get observedAttributes() {
    return ['background', 'primary', 'text', 'button-label'];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = widgetMarkup('Apply for wholesale access', '<p>Tell us about your business. Our team will review your application and email you when your account is ready.</p><div style="display:grid;gap:8px"><input placeholder="Business email" style="padding:10px;border:1px solid #d1d5db;border-radius:6px"/><input placeholder="Company name" style="padding:10px;border:1px solid #d1d5db;border-radius:6px"/></div>', this.attributes);
  }
}

export default WholesaleApplication;

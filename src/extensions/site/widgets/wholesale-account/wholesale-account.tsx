import { widgetMarkup } from '../../../../lib/wholesale/widget';

class WholesaleAccount extends HTMLElement {
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
    this.innerHTML = widgetMarkup('Wholesale account', '<p>Manage company users, saved order lists, orders, quotes, tax certificates, and payment terms.</p><strong>Welcome back</strong><br/><small>Access is limited to approved wholesale customers.</small>', this.attributes);
  }
}

export default WholesaleAccount;

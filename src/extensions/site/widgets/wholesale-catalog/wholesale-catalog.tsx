import { widgetMarkup } from '../../../../lib/wholesale/widget';

class WholesaleCatalog extends HTMLElement {
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
    this.innerHTML = widgetMarkup('Wholesale catalog', '<p>Your approved catalog and pricing are shown here. Products can be filtered by collection, availability, and customer group.</p><strong>Sign in to view your wholesale prices.</strong>', this.attributes);
  }
}

export default WholesaleCatalog;

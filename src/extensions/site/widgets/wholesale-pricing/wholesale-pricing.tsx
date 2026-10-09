import { widgetMarkup } from '../../../../lib/wholesale/widget';

class WholesalePricing extends HTMLElement {
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
    this.innerHTML = widgetMarkup('Wholesale pricing', '<p>Retail <s>$100.00</s></p><p style="font-weight:700;color:#15803d">Wholesale $72.00</p><small>12 units minimum · increments of 6</small>', this.attributes);
  }
}

export default WholesalePricing;

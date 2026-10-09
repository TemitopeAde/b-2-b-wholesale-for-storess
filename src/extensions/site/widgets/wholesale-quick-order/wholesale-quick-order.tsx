import { widgetMarkup } from '../../../../lib/wholesale/widget';

class WholesaleQuickOrder extends HTMLElement {
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
    this.innerHTML = widgetMarkup('Quick order', '<p>Search by product name or SKU, set quantities, and add approved wholesale items to your Wix cart.</p><div style="display:grid;gap:8px"><input aria-label="Search products" placeholder="Search products or SKU" style="padding:10px;border:1px solid #d1d5db;border-radius:6px"/><div><strong>Wholesale catalog</strong><br/><small>MOQ and quantity increments are checked before checkout.</small></div></div>', this.attributes);
  }
}

export default WholesaleQuickOrder;

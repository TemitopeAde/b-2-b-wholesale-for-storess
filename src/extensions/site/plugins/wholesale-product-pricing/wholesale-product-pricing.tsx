class WholesaleProductPricing extends HTMLElement {
  static get observedAttributes() {
    return ['wholesale-price', 'retail-price', 'moq'];
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
    const wholesalePrice = this.getAttribute('wholesale-price') || 'Sign in to view wholesale pricing';
    const retailPrice = this.getAttribute('retail-price');
    const moq = this.getAttribute('moq') || 'Wholesale MOQ applies';

    this.innerHTML = `
      <div style="font:inherit;padding:12px 0;border-top:1px solid #e5e7eb">
        ${retailPrice ? `<span style="color:#6b7280;text-decoration:line-through;margin-right:8px">${retailPrice}</span>` : ''}
        <strong style="color:#15803d">${wholesalePrice}</strong>
        <p style="margin:6px 0 0;color:#6b7280;font-size:14px">${moq}</p>
      </div>
    `;
  }
}

export default WholesaleProductPricing;

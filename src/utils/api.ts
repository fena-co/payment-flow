const apiUrl = process.env.API_URL || `https://api.stage.fena.co`;

class Api {
  private readonly apiUrl: string;

  constructor(url) {
    this.apiUrl = url;
  }

  public async getProviderList() {
    const res = await fetch(`${this.apiUrl}/providers/list`, {
      method: `GET`,
    });
    return res.json();
  }

  public async getPaymentInfo(paymentId) {
    const res = await fetch(
      `${this.apiUrl}/payment-flow/public/payment/${paymentId}`,
      {
        method: `GET`,
      },
    );
    return res.json();
  }

  public async getInvoiceInfo(invoiceId) {
    const res = await fetch(
      `${this.apiUrl}/payment-flow/public/invoice/${invoiceId}`,
      {
        method: `GET`,
      },
    );
    return res.json();
  }

  public async initiatePayment(id, type, provider) {
    const res = await fetch(`${this.apiUrl}/payment-flow/initiate`, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify({
        type,
        id,
        provider,
      }),
    });
    return res.json();
  }

  public async markInvoiceAsPaid(id) {
    const res = await fetch(
      `${this.apiUrl}/payment-flow/public/invoice/${id}/complete`,
      {
        method: `POST`,
      },
    );
    return res.json();
  }

  public async markPaymentAsPaid(id) {
    const res = await fetch(
      `${this.apiUrl}/payment-flow/public/payment/${id}/complete`,
      {
        method: `POST`,
      },
    );
    return res.json();
  }

  public async getLastPaymentByTerminal(terminalId) {
    const res = await fetch(
      `${this.apiUrl}/payment-flow/public/terminal/${terminalId}`,
      {
        method: `GET`,
      },
    );
    return res.json();
  }
}

export default new Api(apiUrl);

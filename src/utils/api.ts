const apiUrl = process.env.API_URL || `http://localhost:8084`;

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
}

export default new Api(apiUrl);

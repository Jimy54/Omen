export class Invoice {
  constructor(
    private InvoiceID: string,
    private ClientName: string,
    private ClientLastName: string,
    private ClientNit: string,
    private InvoiceDate: string,
    private BusinessID: number
  ) {}
}

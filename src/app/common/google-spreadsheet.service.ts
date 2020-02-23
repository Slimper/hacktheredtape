import {Injectable} from '@angular/core';

const {GoogleSpreadsheet} = require('google-spreadsheet');

export class GoogleSpreadsheetService {
  public async getDoc(url) {
    const doc = new GoogleSpreadsheet(url);

    await doc.useServiceAccountAuth({
      // client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      // private_key: process.env.GOOGLE_PRIVATE_KEY,
    });
  }
}

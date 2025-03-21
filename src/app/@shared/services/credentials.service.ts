import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private readonly CREDENTIALS_KEY = 'auth_credentials';

  constructor() {}

  /**
   * Save user credentials (e.g., token, username)
   */
  saveCredentials(credentials: Credentials) {
    localStorage.setItem(this.CREDENTIALS_KEY, JSON.stringify(credentials));
  }

  /**
   * Get user credentials
   */
  getCredentials(): Credentials | null {
    const storedCredentials = localStorage.getItem(this.CREDENTIALS_KEY);
    return storedCredentials ? JSON.parse(storedCredentials) : null;
  }

  /**
   * Check if the user is authenticated
   */
  isAuthenticated(): boolean {
    return !!this.getCredentials()?.token;
  }

  /**
   * Remove user credentials (logout)
   */
  clearCredentials() {
    localStorage.removeItem(this.CREDENTIALS_KEY);
  }
}

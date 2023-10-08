import { Injectable } from '@angular/core';
import { Users } from '../class/users';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  hashPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
  }


  verifyPassword(plainPassword: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(plainPassword, hashedPassword);
  }
  private username = 'admin';
  private password = 'password';

  authenticate(user: string, pass: string): boolean {
    if (user === this.username && pass === this.password) {
      sessionStorage.setItem('authenticatedUser', user);
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('authenticatedUser');
    return user !== null;
  }

  logout(): void {
    sessionStorage.removeItem('authenticatedUser');
  }
}
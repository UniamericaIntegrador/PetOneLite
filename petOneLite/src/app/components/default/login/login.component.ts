import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="p-8 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-6 text-center">Welcome</h1>
        <div class="space-y-4">
          <button 
            *ngIf="!isLoggedIn" 
            (click)="login()" 
            class="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-200"
          >
            Login with SSO
          </button>
          <button 
            *ngIf="isLoggedIn" 
            (click)="logout()" 
            class="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;

  constructor(
    private keycloakService: KeycloakService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.isLoggedIn = await this.keycloakService.isLoggedIn();
  }

  login() {
    this.keycloakService.login();
  }

  logout() {
    this.keycloakService.logout('http://localhost:4200');
  }
}
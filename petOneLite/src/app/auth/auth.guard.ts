import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

export const authGuard = async () => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);

  if (await keycloak.isLoggedIn()) {
    return true;
  }

  await keycloak.login({
    redirectUri: window.location.origin + router.url
  });
  return false;
};
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor() {}

  isAuthorized(role: string, priviledge: string, attribute: string) {
    const accessDetails = JSON.parse(localStorage.getItem(role) || '');
    if (role && priviledge && attribute) {
      if (accessDetails[priviledge] && accessDetails[priviledge].attributes) {
        const index = (accessDetails[priviledge]
          .attributes as Array<string>).findIndex((attr) => attr === attribute);
        return index !== -1;
      }
    } else if (role && priviledge) {
      return !!accessDetails[priviledge];
    }

    return false;
  }
}

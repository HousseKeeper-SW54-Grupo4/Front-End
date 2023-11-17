export interface RegisterRequest {
  type: 'keeper' | 'traveller';
  name: string;
  lastName: string;
  birthdate: string;
  phone: string;
  email: string;
  password: string;
  repeat_password: string
}

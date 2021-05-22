import { Vaccination } from './vaccination';

export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public gender: string,
    public dateOfBirth: string,
    public ssno: string,
    public email: string,
    public phone: string,
    public street: string,
    public houseNo: string,
    public city: string,
    public zipCode: string,
    public isAdmin: boolean,
    public isVaccinated: boolean,
    public vaccination: Vaccination,
    public vaccination_id: number,
  ) {}

  hasAppointment() {
    return this.vaccination ? true : false;
  }
}

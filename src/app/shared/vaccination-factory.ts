import { Vaccination } from './vaccination';

export class VaccinationFactory {
  static empty(): Vaccination {
    return new Vaccination(null, null, new Date(), new Date(), new Date(), null);
  }
  static fromObject(raw: any): Vaccination {
    return new Vaccination(
      raw.id,
      raw.maxPatients,
      typeof raw.date === 'string' ? new Date(raw.date) : raw.date,
      typeof raw.from === 'string' ? new Date(raw.from) : raw.from,
      typeof raw.to === 'string' ? new Date(raw.to) : raw.to,
      raw.location,
    );
  }
}

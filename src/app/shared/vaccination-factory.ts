import { Vaccination } from './vaccination';

export class VaccinationFactory {
  static empty(): Vaccination {
    return new Vaccination(null, null, new Date(), '', '', null, null);
  }
  static fromObject(raw: any): Vaccination {
    return new Vaccination(
      raw.id,
      raw.maxPatients,
      typeof raw.date === 'string' ? new Date(raw.date) : raw.date,
      raw.from,
      raw.to,
      raw.location,
      raw.location_id,
    );
  }
}

import Location from '../shared/location';

export class Vaccination {
  constructor(
    public id: number,
    public maxPatients: number,
    public date: Date,
    public from: string,
    public to: string,
    public location: Location,
  ) {}
}

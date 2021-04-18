import Location from '../shared/location';

export class Vaccination {
  constructor(
    public id: number,
    public maxPatients: number,
    public date: Date,
    public from: Date,
    public to: Date,
    public location: Location,
  ) {}
}

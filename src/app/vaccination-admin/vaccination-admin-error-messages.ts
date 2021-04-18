export class ErrorMessage {
  constructor(public forControl: string, public forValidator: string, public text: string) {}
}

export const VaccinationAdminErrorMessages = [new ErrorMessage('date', 'required', 'Please enter a date.')];

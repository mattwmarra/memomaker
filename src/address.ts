class Address {
  private street: string;

  private unit: string;

  private city: string;

  private state: string;

  private country: string;

  private zip: string;

  constructor(street, unit, city, state, country, zip) {
    this.street = street;
    this.unit = unit;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zip = zip;
  }

  public getStreet(): string {
    return this.street;
  }

  public setStreet(street: string): void {
    this.street = street;
  }

  public getUnit(): string {
    return this.unit;
  }

  public setUnit(unit: string): void {
    this.unit = unit;
  }

  public getCity(): string {
    return this.city;
  }

  public setCity(city: string): void {
    this.city = city;
  }

  public getState(): string {
    return this.state;
  }

  public setState(state: string): void {
    this.state = state;
  }

  public getCountry(): string {
    return this.country;
  }

  public setCountry(country: string): void {
    this.country = country;
  }

  public getZip(): string {
    return this.zip;
  }

  public setZip(zip: string): void {
    this.zip = zip;
  }
}

export default Address;

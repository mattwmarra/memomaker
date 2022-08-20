export default class FormItemClass {
  private name: string;

  private id: string;

  private placeholder: string;

  public getPlaceholder(): string {
    return this.placeholder;
  }

  public setPlaceholder(value: string) {
    this.placeholder = value;
  }

  private value: string;

  public getValue(): string {
    return this.value;
  }

  public setValue(value: string) {
    this.value = value;
  }

  private description: string;

  public getDescription(): string {
    return this.description;
  }

  public setDescription(value: string) {
    this.description = value;
  }

  private group: string;

  public getGroup(): string {
    return this.group;
  }

  public setGroup(value: string) {
    this.group = value;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string) {
    this.name = value;
  }

  public getId(): string {
    return this.id;
  }

  public setId(value: string) {
    this.id = value;
  }

  private type: string;

  public getType(): string {
    return this.type;
  }

  public setType(value: string) {
    this.type = value;
  }

  constructor(
    name: string,
    id: string,
    type: string,
    placeholder: string,
    description: string,
    value: string,
    group: string,
  ) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.placeholder = placeholder;
    this.description = description;
    this.group = group;
    this.id = id;
    this.value = '';
  }
}

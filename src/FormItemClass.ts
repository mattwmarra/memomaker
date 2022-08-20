export default class FormItemClass {
  name: string;

  id: string;

  type: string;

  placeholder: string;

  value: string;

  description: string;

  group: string;

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
    this.value = value;
  }
}

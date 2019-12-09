export class Type {
  public static readonly TEXT = 'text';
}

export class FormFields {

  public static readonly fields: IFormInput[] = [
    {name: 'name1', placeHolder: 'placeHolder1', type: Type.TEXT},
    {name: 'name2', placeHolder: 'placeHolder2', type: Type.TEXT},
  ];
}



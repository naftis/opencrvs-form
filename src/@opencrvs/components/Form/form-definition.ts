import type * as Fields from "./Fields";

/** @example `{ 'mother.firstname': string, 'mother.lastname': string }` */
export type Draft = {
  [key: string]: string | undefined;
};

/** @example TEXT, BUTTON, BULLET_LIST */
export type FieldType = keyof typeof Fields;

/** @example `{ id: string, label: string }` */
export type FieldProps<T extends FieldType> = React.ComponentProps<
  (typeof Fields)[T]
>;

export type Field<T extends FieldType = FieldType> = {
  id: string;
  type: T;
} & FieldProps<T>;

type Page<T extends FieldType> = {
  title: string;
  fields: Array<Field<T>>;
};

export type Form<T extends FieldType> = {
  version: string;
  title: string;
  pages: Array<Page<T>>;
};

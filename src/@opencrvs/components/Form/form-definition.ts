import type * as Components from "./Components";

/** @example `{ 'mother.firstname': string, 'mother.lastname': string }` */
export type Draft = {
  [key: string]: string | undefined;
};

/** @example TEXT, BUTTON, BULLET_LIST */
type ComponentType = keyof typeof Components;

/** @example `{ id: string, label: string }` */
type ComponentProps<T extends ComponentType> = React.ComponentProps<
  (typeof Components)[T]
>;

type SpecificField<T extends ComponentType> = {
  id: string;
  type: T;
} & ComponentProps<T>;

export type Field = {
  [K in ComponentType]: SpecificField<K>;
}[ComponentType];

export type Page = {
  title: string;
  fields: Array<Field>;
};

export type Form = {
  version: string;
  title: string;
  pages: Array<Page>;
};

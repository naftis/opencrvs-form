import React from "react";
import * as Fields from "./Fields";
import { FieldType } from "./form-definition";

export const deserialized = (
  field: (
    props: React.ComponentProps<(typeof Fields)[keyof typeof Fields]>
  ) => JSX.Element
) => {
  return field;
};

export const BULLET_LIST = deserialized(
  ({ id, items, number }: { id: string; items: string[]; number: number }) => {
    return <BulletList id={id} items={items} font="reg16" />;
  }
);

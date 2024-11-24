import { useState } from "react";
import { Context, State } from "./useState";
import { FieldType, Field as JSONField } from "./form-definition";
import { Field } from "./Field";

export function Provider<T extends FieldType = FieldType>({
  fields,
}: {
  fields: JSONField<T>[];
}) {
  const [values, setValues] = useState<State>({});

  return (
    <Context.Provider value={{ values, setValues }}>
      {fields.map((field) => (
        <Field key={field.id} field={field} />
      ))}
    </Context.Provider>
  );
}

import type {
  FieldType,
  Field as JSONField,
  FieldProps,
} from "./form-definition";
import * as Fields from "./Fields";

export const Field = <T extends FieldType>({
  field: { type, ...field },
}: {
  field: JSONField<T>;
}) => {
  const FieldComponent = Fields[type] as React.FC<FieldProps<T>>;
  return <FieldComponent key={field.id} {...field} />;
};

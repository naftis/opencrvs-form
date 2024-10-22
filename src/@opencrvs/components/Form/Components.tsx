/*
 * Form fields: the properties of these transformers flow to form definitions
 *
 * 1. Avoid spreading {...props} to allow seeing unused props
 * 2. Document properties with JSDoc
 */

/* eslint-disable react-refresh/only-export-components */
import {
  BulletList,
  Button,
  DateField,
  InputField,
  TextInput,
} from "@opencrvs/components";
import { useField } from "./store";

export const BULLET_LIST = ({ id, items }: { id: string; items: string[] }) => {
  return <BulletList id={id} items={items} font="reg16" />;
};

export const BUTTON = ({ id, label }: { id: string; label: string }) => {
  return (
    <Button id={id} type="primary">
      {label}
    </Button>
  );
};

export const TEXT = ({
  id,
  label,
  required,
  maxLength,
}: {
  id: string;
  /** The label shown on top of the text field */
  label: string;
  required?: boolean;
  maxLength?: number;
}) => {
  const [value = "", setValue] = useField(id);

  const error = value.length > 5;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <InputField
      label={label}
      id={id}
      touched={true}
      required={required}
      error={error ? "error" : undefined}
    >
      <TextInput
        type="text"
        maxLength={maxLength}
        value={value}
        error={error}
        onChange={onChange}
      />
    </InputField>
  );
};

export const DATE = ({
  id,
  label,
  notice,
  ignorePlaceholder,
  required,
}: {
  id: string;
  label: string;
  notice?: string;
  ignorePlaceholder?: boolean;
  required?: boolean;
}) => {
  const [value, setValue] = useField(id);

  return (
    <InputField label={label} id={id} touched={true} required={required}>
      <DateField
        id={id}
        notice={notice}
        ignorePlaceHolder={ignorePlaceholder}
        onChange={(date) => setValue(date)}
        value={value}
      />
    </InputField>
  );
};

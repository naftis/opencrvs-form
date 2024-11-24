import { createContext, useContext, useMemo } from "react";

export type State = { [key: string]: string | undefined };

export const Context = createContext<{
  values: { [key: string]: string | undefined };
  setValues: React.Dispatch<React.SetStateAction<State>>;
}>({
  values: {},
  setValues: () => {},
});

export const useValue = () => {
  const { values, setValues } = useContext(Context);
  return [values, setValues] as const;
};

export const useField = (id: string) => {
  const [state, setState] = useValue();
  const fieldValue = state[id];

  const memoizedValue = useMemo(() => fieldValue, [fieldValue]);

  const setValue = (newValue: string) => {
    setState((prevValues) => ({
      ...prevValues,
      [id]: newValue,
    }));
  };

  return [memoizedValue, setValue] as const;
};

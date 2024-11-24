import {
  Frame,
  AppBar,
  Stack,
  Button,
  Icon,
  Content,
} from "@opencrvs/components";
import { Field, Form } from "./@opencrvs/components";
import {
  Draft,
  FieldType,
  Form as FormDefinition,
} from "./@opencrvs/components/Form/form-definition";
import { useRef, useState } from "react";
import { State } from "./@opencrvs/components/Form/useState";

const usePaginate = <T = unknown,>(pages: T[]) => {
  const [page, setPage] = useState(0);

  const next = pages[page + 1] && (() => setPage(page + 1));
  const previous = pages[page - 1] && (() => setPage(page - 1));

  return [pages[page], next, previous] as const;
};

function App<T extends FieldType>({ form }: { form: FormDefinition<T> }) {
  const [{ title, fields }, next, previous] = usePaginate(form.pages);
  const draft = useRef<Draft>({});

  const saveAndExit = () => {
    console.log(draft.current);
    setValues({});
  };

  const onExit = () => {
    console.log("exit");
  };

  const finish = () => {
    console.log("finish");
  };

  const setValue = (key: string, value: string) => {
    draft.current[key] = value;
  };

  return (
    <Frame
      skipToContentText="Skip to form"
      header={
        <AppBar
          mobileLeft={title}
          desktopLeft={title}
          desktopRight={
            <Stack direction="row">
              <Button type="primary" onClick={saveAndExit}>
                <Icon name="DownloadSimple" />
                Save and exit
              </Button>
              <Button type="secondary" onClick={onExit}>
                <Icon name="X" />
                Exit
              </Button>
            </Stack>
          }
        />
      }
    >
      <Frame.LayoutForm>
        <Frame.SectionFormBackAction>
          {previous && (
            <Button type="tertiary" size="small" onClick={previous}>
              <Icon name="ArrowLeft" size="medium" />
              Back
            </Button>
          )}
        </Frame.SectionFormBackAction>

        <Frame.Section>
          <Content
            title={title}
            bottomActionButtons={
              <Button
                fullWidth
                type="primary"
                size="large"
                onClick={next ?? finish}
              >
                Continue
              </Button>
            }
          >
            <Form>
              {fields.map((field) => (
                <Field
                  key={field.id}
                  field={field}
                  onChange={(value) => setValue(field.id, value)}
                />
              ))}
            </Form>
          </Content>
        </Frame.Section>
      </Frame.LayoutForm>
    </Frame>
  );
}

export default App;

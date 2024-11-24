import { Button, Content, Frame, Icon } from "@opencrvs/components";
import * as Components from "./Fields";

import type { Field } from "./form-definition";

type Props = {
  title: string;
  fields: Field[];
  nextPage?: () => void;
  previousPage?: () => void;
};

export function Page({ title, fields, nextPage, previousPage }: Props) {
  return (
    <Frame.LayoutForm>
      <Frame.SectionFormBackAction>
        {previousPage && (
          <Button type="tertiary" size="small" onClick={previousPage}>
            <Icon name="ArrowLeft" size="medium" />
            Back
          </Button>
        )}
      </Frame.SectionFormBackAction>

      <Frame.Section>
        <Content
          title={title}
          bottomActionButtons={
            nextPage && (
              <Button fullWidth type="primary" size="large" onClick={nextPage}>
                Continue
              </Button>
            )
          }
        >
          {fields.map(({ type, ...props }) => {
            const FieldComponent = Components[type] as React.FC<
              React.ComponentProps<(typeof Components)[typeof type]>
            >;
            return <FieldComponent key={props.id} {...props} />;
          })}
        </Content>
      </Frame.Section>
    </Frame.LayoutForm>
  );
}

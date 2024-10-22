import React from "react";
import {
  Frame,
  AppBar,
  Button,
  Icon,
  Stack,
  Content,
} from "@opencrvs/components";
import type { Draft, Page } from "./form-definition";
import { usePagination } from "./usePagination";
import { getDraft, useSetInitialDraft } from "./store";
import * as Components from "./Components";

type Props = {
  title: string;
  pages: Page[];
  initialDraft?: Draft;
  onSaveAndExit: (draft: Draft) => void;
  onFinish: (draft: Draft) => void;
  onExit: () => void;
  children?: React.ReactNode;
};

export function Form({
  title,
  pages,
  initialDraft,
  onSaveAndExit,
  onExit,
  onFinish,
  children,
}: Props) {
  useSetInitialDraft(initialDraft);
  const { page, nextPage, previousPage } = usePagination(pages.length);
  const { fields } = pages[page];

  const saveAndExit = () => onSaveAndExit(getDraft());
  const finish = () => onFinish(getDraft());

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
              <Button
                fullWidth
                type="primary"
                size="large"
                onClick={nextPage ?? finish}
              >
                Continue
              </Button>
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

      {children}
    </Frame>
  );
}

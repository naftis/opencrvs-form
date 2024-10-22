import {
  Frame,
  AppBar,
  Stack,
  Button,
  Icon,
  Content,
} from "@opencrvs/components";
import { Draft } from "../Form/form-definition";

type Props = {
  title: string;
  draft: Draft;
  onSaveAndExit: () => void;
  onExit: () => void;
  onPrint: () => void;
  onSubmit: () => void;
};

export function Preview({
  title,
  draft,
  onSaveAndExit,
  onExit,
  onPrint,
  onSubmit,
}: Props) {
  return (
    <Frame
      skipToContentText="Skip to form"
      header={
        <AppBar
          mobileLeft={title}
          desktopLeft={title}
          desktopRight={
            <Stack direction="row">
              <Button type="primary" onClick={onSaveAndExit}>
                <Icon name="DownloadSimple" />
                Save and exit
              </Button>
              <Button type="secondary" onClick={onPrint}>
                <Icon name="Printer" />
                Print declaration
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
      <Content
        title={title}
        bottomActionButtons={
          <Button fullWidth type="positive" size="large" onClick={onSubmit}>
            Register
          </Button>
        }
      >
        <pre>{JSON.stringify(draft, null, 4)}</pre>
      </Content>
    </Frame>
  );
}

import { useState } from "react";
import { form } from "./form";
import { Form, Preview, Draft } from "./@opencrvs/components";

const urlParams = new URLSearchParams(window.location.search);
const draftParam = urlParams.get("draft");
const initialDraft = draftParam
  ? JSON.parse(decodeURIComponent(draftParam))
  : undefined;

function App() {
  const [draft, setDraft] = useState<Draft>();

  const exit = () => (window.location.href = "/");
  const saveAndExit = () => {
    window.location.href = `?draft=${encodeURIComponent(
      JSON.stringify(draft)
    )}`;
  };

  if (draft) {
    return (
      <Preview
        title={form.title}
        draft={draft}
        onSaveAndExit={saveAndExit}
        onExit={exit}
        onPrint={() => {
          setDraft(undefined);
        }}
        onSubmit={() => {
          setDraft(undefined);
        }}
      />
    );
  }

  return (
    <Form
      title={form.title}
      pages={form.pages}
      initialDraft={initialDraft}
      onExit={exit}
      onSaveAndExit={saveAndExit}
      onFinish={setDraft}
    />
  );
}

export default App;

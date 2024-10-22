import { create } from "zustand";
import { Draft } from "./form-definition";
import { devtools } from "zustand/middleware";
import { useEffect } from "react";

type DraftStore = {
  draft: Draft;
  setDraft: (draft: Draft) => void;
  setField: (id: string, value: string) => void;
};

export const useDraftStore = create<DraftStore>()(
  devtools((set) => ({
    draft: {},

    setDraft: (draft) =>
      set(
        () => ({ draft }),
        undefined,
        "form:set-draft" // for Redux Devtools
      ),

    setField: (id, value) =>
      set(
        (state) => ({ draft: { ...state.draft, [id]: value } }),
        undefined,
        "form:set-field" // for Redux Devtools
      ),
  }))
);

export const useField = (id: string) => {
  const setField = useDraftStore((state) => state.setField);
  const value = useDraftStore((state) => state.draft[id]);

  const setValue = (value: string) => setField(id, value);

  return [value, setValue] as const;
};

export const useSetInitialDraft = (initialDraft?: Draft) => {
  const setDraft = useSetDraft();

  useEffect(() => {
    if (initialDraft) {
      setDraft(initialDraft);
    }
  }, [setDraft, initialDraft]);
};

export const useSetDraft = () => useDraftStore((state) => state.setDraft);

/** not reactive, useful on events */
export const getDraft = () => useDraftStore.getState().draft;

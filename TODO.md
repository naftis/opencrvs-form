### Todo

- [ ] Publish @opencrvs/components to remove the tasks.json workaround
- [ ] Make styled-components a peer dependency
- [ ] DateField has this bug where draft is '--' when the amounts are empty
- [ ] Scope the draft store to the form https://tkdodo.eu/blog/zustand-and-react-context

### Ask if user wants to leave?

```ts
/**
 * Use this hook to listen for unsaved changes before the user leaves the page
 */
export const useDraftBeforeUnload = (callback: (draft: Draft) => void) => {
  const handleBeforeUnload = useAtomCallback(
    useCallback(
      (get, _, event: BeforeUnloadEvent) => {
        const draft = get(draftAtom);

        if (Object.keys(draft).length === 0) {
          return;
        }

        event.preventDefault();
        callback(draft);
      },
      [callback]
    )
  );

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [handleBeforeUnload]);
};
```

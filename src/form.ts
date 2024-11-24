import type {
  FieldType,
  Form,
} from "./@opencrvs/components/Form/form-definition";

export const form = {
  version: "1.0.0",
  title: "Form 1.0.0",
  pages: [
    {
      title: "Introduction",
      fields: [
        {
          id: "introduction.text",
          type: "BULLET_LIST",
          label: "",
          items: [
            "This is an early beta of opencrvs-forms",
            "Install Redux DevTools to see the draft state",
          ],
        },
      ],
    },
    {
      title: "Your information",
      fields: [
        {
          type: "TEXT",
          id: "user.first-name",
          label: "First name",
          number: "5",
          required: true,
          maxLength: 6,
        },
        {
          type: "TEXT",
          id: "user.last-name",
          label: "Last name",
          required: true,
        },
        {
          type: "DATE",
          id: "user.date-of-birth",
          label: "Date of birth",
        },
      ],
    },
    {
      title: "Your parents",
      fields: [
        {
          type: "TEXT",
          id: "parents.mother",
          label: "Mothers first name",
          required: true,
        },
        {
          type: "TEXT",
          id: "parents.father",
          label: "Fathers first name",
          required: true,
        },
      ],
    },
  ],
} satisfies Form<FieldType>;

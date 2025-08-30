import { defineField } from "sanity";

export const YouthServiceSchema = {
  name: "youthService",
  title: "Youth Service",
  type: "document",
  fields: [
    defineField({
      name: "educators",
      title: "Educators & Caretakers",
      description: "Select the educators and caretakers of our youth.",
      type: "array",
      of: [{ type: "reference", to: [{ type: "leader" }] }],
      validation: (rule) =>
        rule.required().error("Select the Deep Dive instructors."),
    }),

    defineField({
      name: "cirriculum_file",
      type: "file",
      title: "Cirriculum",
      description:
        "Upload a PDF of the youth service cirriculum to be download applicable.",
    }),
  ],
};

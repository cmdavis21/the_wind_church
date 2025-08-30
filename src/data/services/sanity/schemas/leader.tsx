import { defineField } from "sanity";

export const LeaderSchema = {
  name: "leader",
  title: "Leaders",
  type: "document",
  fields: [
    defineField({
      name: "contact",
      title: "Contact",
      type: "reference",
      to: [{ type: "contact" }],
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      description: "The official position assigned to the Leader.",
      validation: (rule) =>
        rule.required().error("Enter the Leader's position."),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description:
        "Select a category this leader belongs to (if they fit more than one; select their primary role).",
      options: {
        list: [
          { title: "Senior Leadership", value: "senior leadership" },
          { title: "Church Staff", value: "church staff" },
          { title: "Church Council", value: "church council" },
          { title: "Coaches", value: "coaches" },
          { title: "Elders", value: "elders" },
          {
            title: "Deacons and Deaconesses",
            value: "deacons and deaconesses",
          },
          { title: "Youth Educators", value: "youth educators" },
        ],
      },
      validation: (rule) =>
        rule.required().error("You must select a category."),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description:
        "Describe the Leader's personailty, goals, and aspirations (3-7 sentences).",
    }),
    defineField({
      name: "roles",
      title: "Roles",
      description: "List the leader's roles if they have more than one.",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      description: "Poster image of leader (use from video).",
      validation: (rule) =>
        rule.required().error("Add a profile picture of the leader."),
    }),
    defineField({
      name: "video",
      type: "file",
      title: "Video",
      description: "5-second video of leader.",
    }),
  ],
  preview: {
    select: {
      first_name: "contact.first_name",
      last_name: "contact.last_name",
      position: "position",
      image: "image",
    },
    prepare({
      first_name,
      last_name,
      position,
      image,
    }: {
      first_name: string;
      last_name: string;
      position: string;
      image?: { asset: any };
    }) {
      return {
        title: `${first_name} ${last_name}`,
        subtitle: position || "",
        media: image || (
          <span>
            {first_name.charAt(0)}
            {last_name.charAt(0)}
          </span>
        ),
      };
    },
  },
};

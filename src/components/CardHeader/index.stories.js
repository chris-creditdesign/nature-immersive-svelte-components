import { withKnobs, object, text, select } from "@storybook/addon-knobs";
import ViewDefault from "./index.svelte";
import cardData from "../preview-content/card-data.js";

export default {
  title: "Layout components/Card/Components/CardHeader",
  parameters: {
    knobs: {
      // Escapes strings to be safe for inserting as innerHTML. This option is true by default. It's safe to set it to `false` with frameworks like React which do escaping on their side.
      // You can still set it to false, but it's strongly discouraged to set to true in cases when you host your storybook on some route of your main site or web app.
      escapeHTML: false,
    },
  },
};

let { eyebrow, subHead, headline, href } = cardData;

export const Default = () => ({
  Component: ViewDefault,
  decorators: [withKnobs],
  props: {
    id: text("id", "card-id"),
    cardData: object("cardData", { eyebrow, subHead, headline, href }),
    headerLevel: select("headerLevel", ["h1", "h2", "h3", "h4", "none"], "h2"),
  },
});

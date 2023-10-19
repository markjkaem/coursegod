import { component$ } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import fs from "node:fs";

export const onGet: RequestHandler = async ({ headers, send, params }) => {
  headers.set("Content-Type", "image/png");
  headers.set("Content-Disposition", `attachment; filename="course.png"`);

  const file = fs.readFileSync(`assets/${params.title}/course.png`);
  const buffer = Buffer.from(file);
  send(201, buffer);
};

export default component$(() => {
  return <div></div>;
});

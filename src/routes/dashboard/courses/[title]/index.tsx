import { component$ } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import { list } from "@vercel/blob";

export const onGet: RequestHandler = async ({ headers, send, params }) => {
  headers.set("Content-Type", "application/x-rar-compressed");
  headers.set(
    "Content-Disposition",
    `attachment; filename="${params.title}.rar"`,
  );

  // UPLOAD FILES FROM HERE INTO VERCEL BLOB
  // const file = fs.readFileSync(`assets/${params.title}.rar`);
  // const buffer = Buffer.from(file);
  // const { url } = await put(`assets/${params.title}.rar`, buffer, {
  //   access: "public",
  // });
  // console.log(url);
  const { blobs } = await list();
  const response = await fetch(blobs[0].url);
  const buffer = Buffer.from(await response.arrayBuffer());
  send(201, buffer);
};

export default component$(() => {
  return <div></div>;
});

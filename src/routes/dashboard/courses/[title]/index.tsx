import { component$ } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import { list, del } from "@vercel/blob";

export const onGet: RequestHandler = async ({ headers, send, params, env }) => {
  headers.set("Content-Type", "application/x-rar-compressed");
  headers.set(
    "Content-Disposition",
    `attachment; filename="${params.title}.rar"`,
  );

  //  UPLOAD FILES
  // const file = fs.readFileSync(`assets/${params.title}.rar`);
  // const buffer = Buffer.from(file);
  // const { url } = await put(`assets/${params.title}.rar`, buffer, {
  //   access: "public",
  // });
  // console.log(url);

  //  GET ALL BLOBS
  const { blobs } = await list({ token: env.get("BLOB_READ_WRITE_TOKEN") });
  const response = await fetch(blobs[0].url);

  //  DELETE BLOB
  // await del(blobs[0].url)

  //  CONVERT BLOB
  const buffer = Buffer.from(await response.arrayBuffer());
  send(201, buffer);
};

export default component$(() => {
  return <div></div>;
});

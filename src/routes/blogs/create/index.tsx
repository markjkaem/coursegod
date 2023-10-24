import { component$ } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import OpenAI from "openai";
import db from "../../../../drizzle/db";
import { blogs } from "../../../../drizzle/schema";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface Blog {
  id: number;
  title: string | null;
  intro: string | null;
  text1: string | null;
  text2: string | null;
  header1: string | null;
  text3: string | null;
  text4: string | null;
  header2: string | null;
  text5: string | null;
  text6: string | null;
  text7: string | null;
  image: string | null;
  author: string | null;
  date: string | null;
}

export const onGet: RequestHandler = async ({ query }) => {
  if (query.get("token") !== "doIET") {
    throw new Error("There was an error.");
  }
  console.log("creating keywords..");
  const keywords = await generateKeywords();
  console.log("creating text..");
  const text = await generateText(keywords as string);
  console.log(text);
  console.log("parsing blog..");
  const parsedBlog = parseBlog(text as string);
  console.log("insert in database");
  await insertDatabase(parsedBlog);
};

export default component$(() => {
  return <div>generate</div>;
});

const generateKeywords = async () => {
  // const prompt =
  //   "Give me 20 top keywords for a website that sells courses about moneymaking online. ";
  // const response = await openai.chat.completions.create({
  //   model: "gpt-3.5-turbo",
  //   messages: [
  //     {
  //       role: "user",
  //       content: prompt,
  //     },
  //   ],
  //   temperature: 2,
  //   max_tokens: 256,
  //   top_p: 1,
  //   frequency_penalty: 0,
  //   presence_penalty: 0,
  // });
  // return response.choices[0].message.content;
  const keywords =
    "make money online, make cash online, generate income online, create money online, make money, money make money, ways to make money online, ways to earn money online, ways to get money online, ways to make money on the internet, online money making methods, ways to make cash online, ways to earn cash online, buy courses";
  return keywords;
};

const generateText = async (keywords: string) => {
  const format =
    "{title:*;intro:*;text1:*;text2:*;header1:*;text3:*;text4:*;header2:*;text5:*;text6:*;text7:*;}";
  const prompt = `I want to create a blog with some of the following keywords included: ${keywords}. Write a 800-word to 1000-word 100% Unique, Human-Written article in English. Write The article In Your Own Words Rather Than Copying And Pasting From Other Sources. IMPORTANT: I want you to return the blog in json format. This is the format: ${format}. Replace the * for the output.`;
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 1,
    max_tokens: 2500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response.choices[0].message.content;
};

const parseBlog = (humanText: string) => {
  const parsedBlog: Blog = JSON.parse(humanText.toString());
  return parsedBlog;
};

const insertDatabase = async (parsedBlog: Blog): Promise<void> => {
  await db.insert(blogs).values({
    author: "Mark Teekens",
    date: new Date().toISOString(),
    title: parsedBlog.title,
    intro: parsedBlog.intro,
    text1: parsedBlog.text1,
    text2: parsedBlog.text2,
    header1: parsedBlog.header1,
    text3: parsedBlog.text3,
    text4: parsedBlog.text4,
    header2: parsedBlog.header2,
    text5: parsedBlog.text5,
    text6: parsedBlog.text6,
    text7: parsedBlog.text7,
    image: "image1.png",
  });
};

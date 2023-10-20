import { OpenAI } from "openai";
import 'dotenv/config'
import { writeStringToFileInSlices, readFileSynchronously } from "./fileUtils";
import { extractFirstCodeBlock, } from "./extractFirstCodeBlock";

const openai = new OpenAI({
  organization: "org-SfCPiMjxXwObTZKRIVFAfcYL",
  apiKey: process.env.OPENAI_API_KEY,
});

const brandGuidelines = readFileSynchronously("brandGuidelines.txt")
const formattingGuidelines = readFileSynchronously("formattingGuidelines.txt")
const task = readFileSynchronously("task.txt")

const prompts = [
  // {
  //   "name":"FeaturedBanner",
  //   "description":"\n\nwebsite section definition:The section is the Featured banner:\nThe section takes the full width of the page.\nIt is split in half (left-half and right-half):\n- on one side there is an eyebrow, a title, a description and a Watch Now button\n- on the other side there is a image"
  // },
  // {
  //   "name":"VideoCarousel",
  //   "description":"website section definition:The section is the Video Carousel, that displays:\n- 3 video cards in desktop size\n- 2 video cards in tablet size\n- 1 video card in mobile size\nEach card is composed of a screenshot of the video, with the title and the author below. When you hover over the image, a play button shows up to let you know this link goes to a video."
  // },
  // {
  //   "name":"SmallVideoCarousel",
  //   "description":"website section definition:The section is the Small Video Carousel, that displays a title, a link to see more and then:\n- 6 small video cards in desktop size\n- 3 small video cards in tablet size\n- 1 video card in mobile size\nEach card is composed of a screenshot of the video and below it you have the title, the author and the publication month. When you hover over the image, a play button shows up to let you know this link goes to a video."
  // },
  {
    "name":"Text Centered",
    "description":"website section definition:The section is the Text Centered, that displays in the center a title, and a description."
  },
]

async function generateComponent(prompt: {name: string, description:string}) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: task + formattingGuidelines },
      { role: "user", content: brandGuidelines + prompt.description }
    ],
    model: "gpt-4",
  });

  return completion.choices[0].message.content!;
}

prompts.forEach(async (prompt) => writeStringToFileInSlices(prompt.name, extractFirstCodeBlock(await generateComponent(prompt))))
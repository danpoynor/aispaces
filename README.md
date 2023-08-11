# AiSpaces.com Website Code

## Built with

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/): TypeScript-first schema validation with static type inference.
- [React Hook Form](https://react-hook-form.com/): Performant, flexible and extensible forms with easy-to-use validation.
- [Vercel](https://vercel.com/)
- [Lucide](https://lucide.dev/): Icons by Vercel
- [react-markdonw](https://github.com/remarkjs/react-markdown): React component to render markdown.

Inspired by:
Build a SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe | Full Tutorial 2023
<https://www.youtube.com/watch?v=ffJ38dBzrlY>

### Services Used

- [Vercel](https://vercel.com/): Hosting
- [Stripe](https://stripe.com/): Payments
- [Clerk](https://dashboard.clerk.com/): Authentication and User Management
- [Prisma](https://www.prisma.io/): Database

## Potential Features for Development

- cover-letter-buddy 
- language translation
- promptopia feature
  - https://www.youtube.com/watch?v=wm5gMKuwSYk&t=2671s
  - https://medium.com/@nayan.j.paul/building-a-reusable-prompt-management-system-for-large-language-models-810e92284b27
  - https://prst.ai
- sql generator
  - https://www.youtube.com/watch?v=uRQH2CFvedY
- Create a movie pitch using an AI Chatbot
  - https://www.youtube.com/watch?v=jlogLBkPZ2A
- Create a movie script using an AI Chatbot
- Create a book using an AI Chatbot
- Create a song using an AI Chatbot
- Create a poem using an AI Chatbot
- Create a blog post using an AI Chatbot
- Generate logos
- Generate website designs
- Generate business names
- Generate business ideas
- Generate business plans
- Generate business pitches
- Generate business proposals
- Generate business contracts
- Generate business agreements
- Generate business emails
- Generate contracts
- Generate agreements
- Generate emails
- Bulk generate social media images <https://www.dito.so/>
- Generate icons
- Generate app icons
- Add voice input like seen at <https://usellm.org/>
- Generate a travel guide <https://usellm.org/docs>, <https://usellm.org/docs/examples/streamlit-app>
- Summarize PDFs
- Summarize terms and conditions (use links or copy/paste text)
- Summarize privacy policies (use links or copy/paste text)
- Generate graphcs
- Planning and strategy for business
- Thank you note generation
- Marketing email generation
- Summarize meeting transcripts <https://www.ibm.com/products/watsonx-ai>
- Convert blog posts to podcasts
- Convert blog posts to videos
- Integrate with removepaywall.com
- Look at <https://youai.ai/mindstudio>, <https://youai.ai/> for ideas
- Look at Replicate for ideas (perhaps use for generating business plans, headshots, etc.) <https://replicate.com/showcase>, <https://replicate.com/>
- IA Image editing solutions <https://vanceai.com/api/?
- Trip Planner <https://ui8.net/enver-studio-ffdda4/products/triperz---ai-trip-planner-app-ui-kit>
- Ideas for teachers on how to use AI <https://www.oneusefulthing.org/p/using-ai-to-make-teaching-easier>
- Might be some other interesting ideas in the newsletter at <https://www.oneusefulthing.org/archive>


## Addiontal Incentives to Use AiSpaces.com

- Give away a Chrome plugin that allows you to use the AI Chatbot on any website. AiHelp
- Give away a Chrome plugin that allows you to summarize web pages <https://usellm.org/docs/examples/chrome-extension>

## Tutorials To Go Through

- <https://replicate.com/docs/get-started/nextjs>

## TODO

- Add favicon.ico to app/ folder.
- Add opengraph-image.png to public folder (REF: 18:20 in <https://www.youtube.com/watch?v=DfukYzUonnk>)
- Colocate .css, .test.js, and .stories.js files with their respective .tsx files (REF: 17:05 in <https://www.youtube.com/watch?v=DfukYzUonnk>)
- Add Google Tag Manager and test with Google Analytics
- Add unit tests
- Add create ping cronjob to monitor and report uptime
- Get Strip Working!!!
- Finsish tutorial!!!

## Potential Workflows for Development

### AI Automation Agency (AAA) Services

1. AI Chatbots
	- BotPress
2. Content Generation Systems
	- Stack.ai
	Example: Input previous meal plans from trainer and get new ideas for meal plans.
3. AI Enhanced Automations

## Dev Notes

- `<Link>` elements are for navigating between pages in your application. It works similar to the HTML anchor tag, but it's more powerful. For example, it ensures your application pages are preloaded, prefetches page assets, navigates without a browser refresh, runs your page code, and more.

DOCS: <https://nextjs.org/docs/pages/api-reference/components/link>

- `useRouter` hook gives you access to the `router` object. We can use it to get the current route pathname. This is commonly used to conditionally style the navigation links based on the current path name.

The `useRouter` hook allows you to programmatically change routes inside [Client Components](https://nextjs.org/docs/getting-started/react-essentials).

Recommendation: Use the [`<Link>` component](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#link-component) for navigation unless you have a specific requirement for using `useRouter`.

DOCS: <https://nextjs.org/docs/pages/api-reference/functions/use-router>

- `useEffect` hook is used to perform side effects in function components. It's similar to `componentDidMount` and `componentDidUpdate` in React classes.

DOCS: <https://react.dev/reference/react/useEffect>

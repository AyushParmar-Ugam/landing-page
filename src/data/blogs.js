const blogs = [
  {
    id: 1,
    category: "AI",
    title: "What artificial intelligence actually means for a small business",
    date: "2026-05-12",
    readTime: "4 min read",
    excerpt:
      "AI gets talked about like one big idea, but for most businesses it's really a handful of narrow, useful tools — the kind that read, sort, write, and predict. Here's what that looks like in practice.",
    body: [
      "When people say \"AI,\" they're usually pointing at very different things: a chatbot that answers questions, a model that reads a photo and tells you what's in it, or a system that predicts which customers are about to churn. None of these are magic. They're pattern-matching tools trained on examples, and each one is good at a narrow job.",
      "For a small business, the useful question isn't \"should we use AI?\" — it's \"which repetitive, judgment-light task is eating our time?\" Sorting inbound emails, writing first drafts of replies, tagging support tickets, and summarizing long documents are all places where a narrow AI tool can take the first pass so a person only has to review and approve.",
      "The businesses that get the most out of AI right now aren't the ones chasing the newest model. They're the ones that picked one slow, annoying process and automated just that — then measured whether it actually saved time before moving on to the next one."
    ]
  },
  {
    id: 2,
    category: "AI Automation",
    title: "AI automation: saving time without losing control",
    date: "2026-05-26",
    readTime: "5 min read",
    excerpt:
      "Automation has a reputation for being rigid — great until something unexpected happens. Pairing it with AI changes that. Here's how to automate a workflow and still keep a human in charge of it.",
    body: [
      "Traditional automation follows fixed rules: if this happens, do that. It's reliable, but brittle — the moment a real-world case falls outside the rule, it breaks or does the wrong thing silently. AI automation adds a layer of judgment on top of those rules, so the system can handle the messy, slightly-different cases that used to require a person.",
      "In practice, this looks like a workflow that reads an incoming request, decides what kind of request it is, fills in the obvious parts, and then either acts directly or hands it to a person with the boring part already done. A lead form gets read and enriched before it ever reaches a salesperson. A support ticket gets categorized and drafted before it reaches an agent.",
      "The part people worry about — losing control — is a design choice, not an inevitable outcome. Every automation I build has a clear point where a person can review, edit, or override before anything customer-facing happens. Automating a task doesn't mean removing the person from it; it means only asking for their attention at the moment it's actually needed."
    ]
  },
  {
    id: 3,
    category: "Agentic AI",
    title: "Agentic AI: when software starts taking action, not just answering",
    date: "2026-06-09",
    readTime: "6 min read",
    excerpt:
      "Most AI tools respond to a single question and stop. Agentic AI keeps going — it plans a few steps, uses tools, checks its own work, and only stops when the task is actually done. Here's what that changes.",
    body: [
      "A regular AI assistant answers a question and waits for the next one. An AI agent is given a goal, not just a question, and works toward it across several steps: it might look something up, call an API, write a draft, check that draft against a rule, and only then report back or take the next action.",
      "This matters because a lot of real work isn't a single question — it's a small project. \"Follow up with this lead\" involves looking up who they are, deciding what to say, sending it, and remembering to check back if they don't reply. An agent can own that whole loop instead of a person doing each step by hand.",
      "The trade-off is that more autonomy needs more guardrails. The agents I build are scoped tightly to one job, given clear limits on what they're allowed to do without approval, and logged so it's always possible to see exactly why they took a given action. Agentic AI is genuinely useful for the right task — it's just worth being deliberate about which tasks earn that trust."
    ]
  }
];

export default blogs;

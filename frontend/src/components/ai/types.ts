export interface AIModel {
  id: string;
  name: string;
  description: string;
  icon: string;
  model: string;
}

export const availableModels: AIModel[] = [
  {
    id: 'gemini_2.5',
    name: 'Gemini 2.5 Pro Experimental',
    description:
      'Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.',
    model: 'google/gemini-2.5-pro-exp-03-25:free',
    icon: '🤖',
  },
  {
    id: 'deepseek_v3_0324',
    name: 'DeepSeek V3 0324 ',
    description:
      'DeepSeek V3, a 685B-parameter, mixture-of-experts model, is the latest iteration of the flagship chat model family from the DeepSeek team. It succeeds the DeepSeek V3 model and performs really well on a variety of tasks.',
    model: 'deepseek/deepseek-chat-v3-0324:free',
    icon: '🧠',
  },
  {
    id: 'deepseek_r1',
    name: 'DeepSeek R1',
    description:
      'DeepSeek R1 is here: Performance on par with OpenAI o1, but open-sourced and with fully open reasoning tokens. Its 671B parameters in size, with 37B active in an inference pass.',
    model: 'deepseek/deepseek-r1:free',
    icon: '🧠',
  },
  {
    id: 'llama_3.3_70b_instruct',
    name: 'Llama 3.3 70B Instruct',
    description:
      'The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model is optimized for multilingual dialogue use cases and outperforms many of the available open source and closed chat models on common industry benchmarks.',
    model: 'meta-llama/llama-3.3-70b-instruct:free',
    icon: '🦙',
  },
  // {
  //   id: 'quasar-alpha',
  //   name: 'Quasar Alpha',
  //   description:
  //     'This is a cloaked model provided to the community to gather feedback. It’s a powerful, all-purpose model supporting long-context tasks, including code generation. All prompts and completions for this model are logged by the provider as well as OpenRouter.',
  //   model: 'openrouter/quasar-alpha',
  //   icon: '🤖',
  // },
  // {
  //   id: 'gpt4',
  //   name: 'GPT-4',
  //   description: 'OpenAI의 최신 AI 모델',
  //   icon: '🧠',
  // },
  // {
  //   id: 'mistral',
  //   name: 'Mistral',
  //   description: '고성능 오픈소스 AI 모델',
  //   icon: '🌪️',
  // },
];

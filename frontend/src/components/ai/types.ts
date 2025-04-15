export interface AIModel {
  id: string;
  name: string;
  description: string;
  icon: string;
  model: string;
}

export const availableModels: AIModel[] = [
  {
    id: 'gemini_2.5-openrouter',
    name: 'Google: Gemini 2.5 Pro Experimental (OpenRouter)',
    description:
      'Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.',
    model: 'google/gemini-2.5-pro-exp-03-25:free',
    icon: '🤖',
  },
  {
    id: 'deepseek_v3_0324-openrouter',
    name: 'DeepSeek V3 0324 (OpenRouter)',
    description:
      'DeepSeek V3, a 685B-parameter, mixture-of-experts model, is the latest iteration of the flagship chat model family from the DeepSeek team. It succeeds the DeepSeek V3 model and performs really well on a variety of tasks.',
    model: 'deepseek/deepseek-chat-v3-0324:free',
    icon: '🔍', // Changed to magnifying glass to represent DeepSeek's search/seeking nature
  },
  {
    id: 'deepseek_r1-openrouter',
    name: 'DeepSeek R1 (OpenRouter)',
    description:
      'DeepSeek R1 is here: Performance on par with OpenAI o1, but open-sourced and with fully open reasoning tokens. Its 671B parameters in size, with 37B active in an inference pass.',
    model: 'deepseek/deepseek-r1:free',
    icon: '🧠',
  },
  {
    id: 'llama_3.3_70b_instruct-openrouter',
    name: 'Meta:Llama 3.3 70B Instruct (OpenRouter)',
    description:
      'The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model is optimized for multilingual dialogue use cases and outperforms many of the available open source and closed chat models on common industry benchmarks.',
    model: 'meta-llama/llama-3.3-70b-instruct:free',
    icon: '🦙',
  },
  {
    id: 'llama-3.1-nemotron-70b-instruct-openrouter',
    name: 'NVIDIA: Llama 3.1 Nemotron 70B Instruct (OpenRouter)',
    description:
      "NVIDIA's Llama 3.1 Nemotron 70B is a language model designed for generating precise and useful responses. Leveraging Llama 3.1 70B architecture and Reinforcement Learning from Human Feedback (RLHF), it excels in automatic alignment benchmarks. This model is tailored for applications requiring high accuracy in helpfulness and response generation, suitable for diverse user queries across multiple domains.",
    model: 'nvidia/llama-3.1-nemotron-70b-instruct:free',
    icon: '🤖',
  },
  {
    id: 'qwen/qwq-32b-openrouter',
    name: 'Qwen: QwQ 32B (OpenRouter)',
    description:
      'QwQ is the reasoning model of the Qwen series. Compared with conventional instruction-tuned models, QwQ, which is capable of thinking and reasoning, can achieve significantly enhanced performance in downstream tasks, especially hard problems. QwQ-32B is the medium-sized reasoning model, which is capable of achieving competitive performance against state-of-the-art reasoning models, e.g., DeepSeek-R1, o1-mini',
    model: 'qwen/qwq-32b:free',
    icon: '🤖',
  },
  {
    id: 'mistralai/mistral-nemo-openrouter',
    name: 'Mistral: Mistral Nemo (OpenRouter)',
    description:
      'A 12B parameter model with a 128k token context length built by Mistral in collaboration with NVIDIA.The model is multilingual, supporting English, French, German, Spanish, Italian, Portuguese, Chinese, Japanese, Korean, Arabic, and Hindi. It supports function calling and is released under the Apache 2.0 license.',
    model: 'mistralai/mistral-nemo:free',
    icon: '🤖',
  },
  {
    id: 'gemma-2-9b-it:free-openrouter',
    name: 'Google: Gemma 2 9B (OpenRouter)',
    description:
      'Gemma 2 9B by Google is an advanced, open-source language model that sets a new standard for efficiency and performance in its size class. Designed for a wide variety of tasks, it empowers developers and researchers to build innovative applications, while maintaining accessibility, safety, and cost-effectiveness.',
    model: 'google/gemma-2-9b-it:free',
    icon: '🤖',
  },
  {
    id: 'sophosympatheia/rogue-rose-103b-v0.2-openrouter',
    name: 'Rogue Rose 103B v0.2 (OpenRouter)',
    description:
      'Rogue Rose demonstrates strong capabilities in roleplaying and storytelling applications, potentially surpassing other models in the 103-120B parameter range. While it occasionally exhibits inconsistencies with scene logic, the overall interaction quality represents an advancement in natural language processing for creative applications.',
    model: 'sophosympatheia/rogue-rose-103b-v0.2:free',
    icon: '🤖',
  },
  {
    id: 'cognitivecomputations/dolphin3.0-mistral-24b-openrouter',
    name: 'Dolphin3.0 Mistral 24B (OpenRouter)',
    description:
      'Dolphin 3.0 is the next generation of the Dolphin series of instruct-tuned models.  Designed to be the ultimate general purpose local model, enabling coding, math, agentic, function calling, and general use cases.',
    model: 'cognitivecomputations/dolphin3.0-mistral-24b:free',
    icon: '🤖',
  },
  {
    id: 'nousresearch/deephermes-3-llama-3-8b-preview-openrouter',
    name: 'Nous: DeepHermes 3 Llama 3 8B Preview (OpenRouter)',
    description:
      'DeepHermes 3 Preview is the latest version of our flagship Hermes series of LLMs by Nous Research, and one of the first models in the world to unify Reasoning (long chains of thought that improve answer accuracy) and normal LLM response modes into one model. We have also improved LLM annotation, judgement, and function calling.',
    model: 'nousresearch/deephermes-3-llama-3-8b-preview:free',
    icon: '🤖',
  },
  {
    id: 'google/gemini-2.0-flash-exp-openrouter',
    name: 'Google: Gemini 2.0 Flash Experimental (OpenRouter)',
    description:
      'Gemini Flash 2.0 offers a significantly faster time to first token (TTFT) compared to Gemini Flash 1.5, while maintaining quality on par with larger models like Gemini Pro 1.5. It introduces notable enhancements in multimodal understanding, coding capabilities, complex instruction following, and function calling. These advancements come together to deliver more seamless and robust agentic experiences.',
    model: 'google/gemini-2.0-flash-exp:free',
    icon: '🤖',
  },
  {
    id: 'openrouter/optimus-alpha-openrouter',
    name: 'Optimus Alpha (OpenRouter)',
    description:
      'This is a cloaked model provided to the community to gather feedback. Its geared toward real world use cases, including programming. Note: All prompts and completions for this model are logged by the provider and may be used to improve the model.',
    model: 'openrouter/optimus-alpha',
    icon: '🤖',
  },
  {
    id: 'gemini-2.0-flash-googledev',
    name: 'Gemini 2.0 Flash (Google Dev)',
    description:
      '모든 작업에서 우수한 성능을 제공하는 가장 균형 잡힌 멀티모달 모델로, 100만 개 토큰 컨텍스트 윈도우를 갖추고 있으며 상담사 시대를 위해 설계되었습니다.',
    model: 'gemini-2.0-flash',
    icon: '🤖',
  },
  {
    id: 'gemini-2.5-PRO-googledev',
    name: 'Gemini 2.5 PRO (Google Dev)',
    description:
      'Gemini 2.5 Pro는 코드, 수학, STEM의 복잡한 문제를 추론하고 긴 컨텍스트를 사용하여 대규모 데이터 세트, 코드베이스, 문서를 분석할 수 있는 최신 사고 모델입니다.',
    model: 'gemini-2.5-pro-exp-03-25',
    icon: '🤖',
  },
  {
    id: 'GPT4ALL FaIcon-localdev',
    name: 'GPT4ALL FaIcon (Local Dev)',
    description: '',
    model: 'GPT4ALL FaIcon',
    icon: '🤖',
  },
];

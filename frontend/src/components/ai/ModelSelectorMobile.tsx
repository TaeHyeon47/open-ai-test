'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import QuestionTextFieldMobile from '../button/QuestionTextFieldMobile';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';

const StyledChip = styled(Chip)(({}) => ({
  fontWeight: 'bold',
  borderRadius: '8px',
  padding: '0 0px',
  margin: '4px',
}));

const chipData = [
  {
    id: 'chatgpt_4o',
    label: 'ChatGPT 4o Mini',
    model: 'openai/gpt-4o-mini',
    src: '/images/ai-model/ChatGPT-4o.jpeg',
  },
  {
    id: 'gemini_2.5',
    label: 'Gemini 2.5 Pro Exp',
    model: 'google/gemini-2.5-pro-exp-03-25:free',
    src: '/images/ai-model/Gemini-2.5-Pro.jpeg',
  },
  {
    id: 'deepseek_v3_0324',
    label: 'DeepSeek V3 0324',
    model: 'deepseek/deepseek-chat-v3-0324:free',
    src: '/images/ai-model/DeepSeek-V3.jpeg',
  },
  {
    id: 'claude-3.7-sonnet',
    label: 'Claude 3.7 Sonnet',
    model: 'anthropic/claude-3.7-sonnet',
    src: '/images/ai-model/Claude-3.7-Sonnet.jpeg',
  },
  {
    id: 'grok-3-beta',
    label: 'Grok 3 Beta',
    model: 'x-ai/grok-3-beta',
    src: '/images/ai-model/Grok-3.jpeg',
  },
  {
    id: 'llama-4-maverick:free',
    label: 'Llama 4 Maverick',
    model: 'meta-llama/llama-4-maverick:free',
    src: '/images/ai-model/Meta-Llama-4-Maverick.jpeg',
  },
  {
    id: 'qwen3-235b-a22b:free',
    label: 'Qwen3 235B A22B ',
    model: 'qwen/qwen3-235b-a22b:free',
    src: '/images/ai-model/Qwen3-235B-A22B-FW.jpeg',
  },
];

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ModelSelectorMobile() {
  return (
    <Box
      sx={{
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Box
        sx={{
          px: 1,
          py: 1,
          borderRadius: '16px 16px 0 0',
          backgroundColor: '#3F3C3C',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'scroll',
          listStyle: 'none',
        }}
      >
        <Box
          sx={{
            overflowX: 'scroll',
            width: '1200px',
            flexWrap: 'wrap',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          {chipData.map((chip, index) => (
            <ListItem key={index}>
              <StyledChip
                key={index}
                avatar={<Avatar alt="Natacha" src={chip.src} />}
                label={chip.label}
                variant="outlined"
              />
            </ListItem>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#3F3C3C',
          borderRadius: 0,
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'scroll',
          listStyle: 'none',
        }}
      >
        <QuestionTextFieldMobile />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mx: 1,
            mb: 1,
          }}
        >
          <AddIcon />
          <MicIcon />
        </Box>
      </Box>
    </Box>
  );
}

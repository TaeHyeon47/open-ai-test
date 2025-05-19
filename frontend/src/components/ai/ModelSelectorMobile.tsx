'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import QuestionTextFieldMobile from '../button/QuestionTextFieldMobile';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

const StyledChip = styled(Chip)(({ theme }) => ({
  fontWeight: 'bold',
  borderRadius: '8px',
  padding: '0 4px',
  margin: '4px',
}));

const chipData = [
  {
    id: 'gemini_2.5',
    label: 'Gemini 2.5 Pro Experimental',
    description:
      'Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.',
    model: 'google/gemini-2.5-pro-exp-03-25:free',
  },
  {
    id: 'deepseek_v3_0324',
    label: 'DeepSeek V3 0324 ',
    description:
      'DeepSeek V3, a 685B-parameter, mixture-of-experts model, is the latest iteration of the flagship chat model family from the DeepSeek team. It succeeds the DeepSeek V3 model and performs really well on a variety of tasks.',
    model: 'deepseek/deepseek-chat-v3-0324:free',
  },
  {
    id: 'deepseek_r1',
    label: 'DeepSeek R1',
    description:
      'DeepSeek R1 is here: Performance on par with OpenAI o1, but open-sourced and with fully open reasoning tokens. Its 671B parameters in size, with 37B active in an inference pass.',
    model: 'deepseek/deepseek-r1:free',
  },
  {
    id: 'gemini_2.5',
    label: 'Gemini 2.5 Pro Experimental',
    description:
      'Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.',
    model: 'google/gemini-2.5-pro-exp-03-25:free',
  },
  {
    id: 'deepseek_v3_0324',
    label: 'DeepSeek V3 0324 ',
    description:
      'DeepSeek V3, a 685B-parameter, mixture-of-experts model, is the latest iteration of the flagship chat model family from the DeepSeek team. It succeeds the DeepSeek V3 model and performs really well on a variety of tasks.',
    model: 'deepseek/deepseek-chat-v3-0324:free',
  },
  {
    id: 'deepseek_r1',
    label: 'DeepSeek R1',
    description:
      'DeepSeek R1 is here: Performance on par with OpenAI o1, but open-sourced and with fully open reasoning tokens. Its 671B parameters in size, with 37B active in an inference pass.',
    model: 'deepseek/deepseek-r1:free',
  },
];

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ModelSelectorMobile() {
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          px: 2,
          py: 1,
          borderRadius: '16px 16px 0 0',
          backgroundColor: '#3F3C3C',
          minHeight: 200,
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
          {/* <Stack direction="row" spacing={1}> */}

          {chipData.map((chip, index) => (
            <ListItem key={index}>
              <StyledChip
                // sx={{
                //   flex: '0 0 auto',
                //   display: 'flex',
                //   alignItems: 'center',
                //   justifyContent: 'center',
                // }}
                key={index}
                icon={<FaceIcon />}
                label={chip.label}
                variant="outlined"
                // sx={{ display: 'inline-block' }}
              />
            </ListItem>
          ))}
          {/* </Stack> */}
        </Box>
        {/* <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      > */}
        {/* <QuestionTextFieldMobile /> */}

        {/* </Box> */}
      </Paper>
    </Box>
  );
}

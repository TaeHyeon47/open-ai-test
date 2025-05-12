'use client';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { openRouterService } from '@/services/apiService';
import { useAppSelector } from '@/redux/hooks';
import { AIModel } from '../ai/types';
import { useDispatch } from 'react-redux';
import { AiResponseListAction } from '@/redux/features/AiResponseListSlice';

export default function QuestionTextFieldMobile() {
  const [question, setQuestion] = useState('');
  const dispatch = useDispatch();

  const modelList = useAppSelector(
    (state) => state.selectedAiList.selectedAiList
  );

  const handleSubmitQuestion = async (
    question: string,
    modelList: AIModel[]
  ) => {
    if (modelList.length === 0) {
      console.error('No models selected');
      return;
    }

    const modelPromises = modelList.map(async (model) => {
      try {
        const response = await openRouterService.sendQuestion(
          question,
          model.name
        );
        return {
          model: model.name,
          response,
        };
      } catch (error) {
        console.error(`Error with model ${model.name}:`, error);
        return {
          model: model.name,
          error: 'Failed to get response',
        };
      }
    });

    const responses = await Promise.all(modelPromises);
    console.log('All responses:', responses);
    dispatch(AiResponseListAction.AI_RESPONSE_LIST_SUCCESS(responses));
  };

  return (
    <TextField
      id="outlined-basic"
      label="무엇이든 물어보세요!"
      multiline
      maxRows={18}
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          console.log('Enter key pressed');
          console.log('question', question);
          handleSubmitQuestion(question, modelList);
        }
      }}
      size="small"
      variant="standard"
      sx={{
        mb: { xs: 3.5, sm: 0 },
        mt: { xs: 2, sm: 0 },
        width: { xs: '95%', sm: '30%' },
        '& .MuiInputBase-root:before': {
          borderBottom: 'none',
        },
        '& .MuiInputBase-root:after': {
          borderBottom: 'none',
        },
        '& .MuiInputBase-root:hover:not(.Mui-disabled):before': {
          borderBottom: 'none',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      }}
    />
  );
}

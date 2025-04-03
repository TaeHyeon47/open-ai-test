'use client';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { chatService } from '@/services/apiService';

export default function QuestionTextField() {
  const [question, setQuestion] = useState('');

  const handleQuestionSubmit = async () => {
    try {
      const response = await chatService.sendQuestion(question);
      console.log('Response:', response);
      setQuestion(''); // 입력 필드 초기화
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <TextField
      id="outlined-basic"
      label="무엇이든 물어보세요!"
      variant="outlined"
      multiline
      maxRows={4}
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleQuestionSubmit();
        }
      }}
      sx={{ width: '30%' }}
    />
  );
}

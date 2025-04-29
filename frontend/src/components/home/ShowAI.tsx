'use client';

import React, { useEffect, useState } from 'react';
import ModelSelector from '../ai/ModelSelector';
import { useAppSelector } from '@/redux/hooks';
import { Box, Grid, Typography, Paper, Divider, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux';
import { AiResponseListAction } from '@/redux/features/AiResponseListSlice';

interface DisplayedResponse {
  model: string;
  response: string;
}

const BrandRankingArray = () => {
  const [displayedText, setDisplayedText] = useState<DisplayedResponse[]>([]);
  const dispatch = useDispatch();

  const aiResponseList = useAppSelector(
    (state) => state.AiResponseList.AiResponseList
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Item = styled(Paper)(({ theme }: any) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  useEffect(() => {
    let i = 0;
    aiResponseList.map((response, index) => {
      const interval = setInterval(() => {
        i++;
        if (i >= response.response.response.length) clearInterval(interval);

        setDisplayedText((prev) => {
          return [
            ...prev.slice(0, index),
            {
              model: response.model,
              response: response.response.response.slice(0, i + 1),
            },
            ...prev.slice(index + 1),
          ];
        });
      }, 50);
    });
  }, [aiResponseList]);

  if (aiResponseList.length > 0) {
    return (
      <Box sx={{ flexGrow: 1, m: '2rem' }}>
        <Box sx={{ mb: 2 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() =>
              dispatch(AiResponseListAction.AI_RESPONSE_LIST_RESET())
            } // Next.js 방식의 뒤로가기
            variant="outlined"
            sx={{ textTransform: 'none' }}
          >
            뒤로가기
          </Button>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          alignItems="stretch"
        >
          {displayedText.map((response, index) => (
            <Grid size={{ xs: 2, sm: 4, md: 4 }} key={index}>
              <Item sx={{ height: '100%' }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: 'black', p: 1, m: 0 }}
                >
                  {response.model}
                </Typography>
                <Divider />
                <Typography
                  variant="body1"
                  sx={{ whiteSpace: 'pre-line', p: 2 }}
                >
                  {response.response.replace(/\*\*/g, '')}
                </Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return <>{aiResponseList.length <= 0 && <ModelSelector />}</>;
};

export default BrandRankingArray;

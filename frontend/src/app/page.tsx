import Box from '@mui/material/Box';
import QuestionTextField from '@/components/button/QuestionTextField';
import ShowAI from '@/components/home/ShowAI';

export default function Home() {
  return (
    <>
      <Box
        component="main"
        sx={{
          p: '1.35rem 1.1rem',
          height: 'auto',
          flexGrow: 1,
        }}
      >
        <ShowAI />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '86vh',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <QuestionTextField />
          </Box>
        </Box>
      </Box>
    </>
  );
}

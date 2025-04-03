import ResponsiveGrid from '@/components/layout/ResponsiveGrid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import QuestionTextField from '@/components/button/QuestionTextField';

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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // space-evenly를 space-between으로 변경
            minHeight: '86vh', // viewport 전체 높이를 최소 높이로 설정
          }}
        >
          <ResponsiveGrid />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <QuestionTextField />
          </Box>
        </Box>
      </Box>
    </>
  );
}

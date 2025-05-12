import { createTheme } from '@mui/material/styles';
// import basePalette from "./basePalette/basePalette";
// import baseComponent from "./basePalette/baseComponent";

const theme = createTheme({
  palette: {
    mode: 'dark',
    // ...basePalette,
  },
  components: {
    // ...baseComponent,
  },
  // breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1440 } },
  //? Typography 폰트 설정
  //   typography: {
  //     fontFamily: ["Pretendard"].join(","),
  //     fontSize: 12,
  //   },
  //   breakpoints: {
  //     values: {
  //       xs: 0,
  //       sm: 600,
  //       md: 900,
  //       lg: 1280,
  //       xl: 1537,
  //     },
  //   },
  //? Button 글씨 크기 설정
  // typography: {
  //   button: {
  //     fontSize: "1rem",
  //   },
  // },
});

export default theme;

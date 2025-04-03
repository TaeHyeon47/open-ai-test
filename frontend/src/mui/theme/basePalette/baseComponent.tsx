import { Components } from "@mui/material";
import { Theme } from "@mui/material/styles";

const baseComponent: Components<Omit<Theme, "components">> = {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         fontFamily: ["Pretendard"].join(","),
  //       },
  //     },
  //     defaultProps: {
  //       disableRipple: true,
  //     },
  //   },
  // MuiCheckbox: {
  //   defaultProps: {
  //     icon: <em className={"icon-checkbox-normal"} />,
  //     checkedIcon: <em className={"icon-checkbox-checked"} />,
  //     indeterminateIcon: <em className={"icon-checkbox-indeterminate"} />,
  //     disableRipple: true,
  //   },
  // },
  // MuiRadio: {
  //   defaultProps: {
  //     icon: <em className={"icon-radio-normal"} />,
  //     checkedIcon: <em className={"icon-radio-checked"} />,
  //     disableRipple: true,
  //   },
  // },
};
export default baseComponent;

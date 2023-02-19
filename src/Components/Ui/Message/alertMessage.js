import React from "react";

//MUI
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  Alert_Message,
  selectMsg,
} from "../../Redux/Features/Alert/alertSlice";

const AlertMessage = () => {
  //redux
  const dispatch = useDispatch();
  const selectMessages = useSelector(selectMsg);
  let duration = 2000;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(Alert_Message({ open: false }));
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={selectMessages.open}
      autoHideDuration={duration}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={selectMessages?.msgType?selectMessages?.msgType:'success'}
      >
        {selectMessages.msg}
      </Alert>
    </Snackbar>
  );
};
export default AlertMessage;

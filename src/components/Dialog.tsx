import { FC, forwardRef, ReactElement, Ref } from "react";
import { TransitionProps } from "@mui/material/transitions";
import Button from "@mui/material/Button";
import MUIDialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
      timeout={{
        enter: 500,
        exit: 0,
      }}
    />
  );
});

type Props = {
  title: string;
  description: string;
  open: boolean;
  handleClose: () => void;
};

export const Dialog: FC<Props> = ({
  title,
  description,
  open,
  handleClose,
}) => {
  return (
    <MUIDialog
      onClose={handleClose}
      open={open}
      TransitionComponent={Transition}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>{description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </MUIDialog>
  );
};

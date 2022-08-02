import { toast } from "react-toastify";

export const showErrModel = (errMessage:string) =>
toast.error(errMessage, {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});
import { Bounce, toast } from "react-toastify";

const toastSetting: any = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

export const toastSuccessMessage = (message: string) => {
  toast.success(message, toastSetting);
};

export const toastErrorMessage = (message: string) => {
  toast.error(message, toastSetting);
};

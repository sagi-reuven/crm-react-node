import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (err) => {
  const { response } = err;

  if (!response) {
    toast.error("Bad connection to server");
  }

  if (response && response.status >= 403) {
    toast.error("An unexpected error occurred");
  }

  return Promise.reject(err);
});
const httpService = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;

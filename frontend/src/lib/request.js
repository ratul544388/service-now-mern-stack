import { VITE_API_URL } from "@/constants";
import axios from "axios";

export const request = async ({
  method = "get",
  url,
  data = {},
  params = {},
  headers = {},
  onSuccess,
  onError,
}) => {
  try {
    const response = await axios({
      method,
      url: `${import.meta.env.VITE_API_URL}/api/${url}`,
      data,
      params,
      headers,
      withCredentials: true,
    });

    if (onSuccess) {
      onSuccess(response.data);
    }

    return response.data;
  } catch (error) {
    if (onError) {
      onError(error.response?.data);
    }
    throw error.response?.data || error;
  }
};

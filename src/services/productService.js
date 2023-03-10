import { axiosClient } from "./axiosClient";

export const getProducts = async () => {
  try {
    const response = await axiosClient.get("/products");
    return response.data;
  } catch (error) {
    // good request error from server response
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      console.log(error.response.header);
    }
    // request made but no response recieved
    else if (error.request) {
      console.log(error.response);
    }
    // bad request
    else {
      console.log("error", error);
    }
    return [];
  }
};

"use server";
import {auth} from "@clerk/nextjs/server"
type FormState = {
  success: boolean;
  errors?: Record<string, string[]>;
  message: string;
};

export const addProductAction = async (
  prevState: FormState,
  formData: FormData
) => {
  console.log(formData);
  //Authenticating is the user is authenticated to submit the product or not ?
  try{

  }catch(error){
    console.error(error)
  }
  return {
    success: false,
    errors: error,
    message: "Failed to add product.",
  };
};

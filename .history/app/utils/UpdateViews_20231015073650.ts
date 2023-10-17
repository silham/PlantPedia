import prisma from "@/prisma/client";
import { cache } from "react";

const UpdateViews = (id: string) => {
   try{
    const view = prisma.views.create()
   }catch(err){
    console.error(err)
   } 
  return 
}

export default UpdateViews
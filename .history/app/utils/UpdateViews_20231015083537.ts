import prisma from "@/prisma/client";
import { cache } from "react";

const UpdateViews = (id: string) => {
   try{
    const view = prisma.views.create({
        data:{
            id: id,
        }
    })
   }catch(err){
    console.error(err)
   } 
  return 0;
}

export default UpdateViews;
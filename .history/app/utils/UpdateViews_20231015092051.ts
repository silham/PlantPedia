import prisma from "@/prisma/client";

const UpdateViews = (id: string) => {
   try{
    const view = prisma.views.create({
        data:{
            id: id,
        }
    })
    console.log("view added")
   }catch(err){
    console.error(err)
   } 
  return 0;
}

export default UpdateViews;
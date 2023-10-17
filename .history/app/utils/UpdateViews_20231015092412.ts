import prisma from "@/prisma/client";

const UpdateViews = (id: string) => {
    const view = prisma.views.create({
        data:{
            id: id,
        }
    })
    console.log("view added")
  return 0;
}

export default UpdateViews;
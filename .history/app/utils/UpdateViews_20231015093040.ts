import prisma from "@/prisma/client";

const UpdateViews = (id: string) => {
    const view = prisma.views.create({
        data:{
            id: id,
        }
    })
    return view;
}

export default UpdateViews;
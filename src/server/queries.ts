import 'server-only';
import { db } from "~/server/db";

export async function getMyPosts() {
    const user = {}; //auth() from clerk

    if (!user.userId) throw new Error("Unauthorized");

    const posts = await db.query.posts.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, { desc }) => desc(model.createdAt),
    });

    // if doing some metadata that client cannot have (user.authToken) use react taint
}

export async function getPosts() {
    const posts = await db.query.posts.findMany();
    return posts;
}

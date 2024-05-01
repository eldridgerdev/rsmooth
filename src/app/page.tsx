import Link from "next/link";
import { db } from "~/server/db";
import { getPosts } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
    const posts = await getPosts();

    return (
        //<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <main className="">
            <section className="bg-gradient pb-16">
                {posts.map((post) => (

                    <div key={post.id}>
                        <h2>{post.name}</h2>
                    </div>
                ))}
                o Hello (App in progress)
            </section>

            <section className="bg-primary">

            </section>
            <section className="ss-style-doublediagonal">

                <div className="text-primary-foreground">test</div>
            </section>
            <div className="">


            </div>
        </main>
    );
}

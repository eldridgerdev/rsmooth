import Link from "next/link";
import { db } from "~/server/db";
import { getPosts } from "~/server/queries";
import Image from "next/image";
import Hero from "~/app/_components/hero";

export const dynamic = "force-dynamic";
const HERO_TITLE = "Ryan's Smoothies";
const HERO_DESC = "The greatest smoothies ever made";
const LOCATION_TEXT =
  "Our location changes daily, here's where we are right now!";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    //<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
    <main className="">
      <section className="bg-primary pb-16">
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.name}</h2>
          </div>
        ))}
        o Hello (App in progress)
      </section>

      <section className="bg-gradient text-secondary-foreground">
        <Hero title={HERO_TITLE} content={HERO_DESC} image />
      </section>

      <section className="flex h-64 flex-col justify-center bg-secondary">
        <div className="justify-center text-secondary-foreground">
          {LOCATION_TEXT}
        </div>
      </section>

      <section className="flex h-64 flex-auto bg-primary p-4">
        <div className="w-1/2 flex-col border-2">
          <div className="relative h-[400px] w-1/2"></div>
          <Image
            alt="Weird smoothie bowl"
            width="100"
            height="100"
            className="absolute inset-0 h-full w-1/2 object-cover"
            src="/smoothie_bowl2.jpg"
          />
        </div>
        <div className="w-1/2 flex-col border-2">2 2</div>
      </section>
      <div className=""></div>
    </main>
  );
}

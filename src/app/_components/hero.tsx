import Image from "next/image";

type HeroProps = {
  title?: string;
  content?: string;
  image?: boolean;
};

export default function Hero({ title, content, image = false }: HeroProps) {
  return (
    <div className="bg-gradient relative h-[400px] w-full">
      {image && (
        <Image
          alt="Hero"
          width="3048"
          height="2024"
          style={{ filter: "blur(2px)" }}
          className="absolute inset-0 h-full w-full object-cover"
          src="/8.jpg"
        />
      )}
      <div className="absolute inset-0 flex flex-col justify-center gap-4 p-4 md:gap-10">
        <div className="grid gap-4">
          <h1 className="text-bg-primary-foreground text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            {title ?? "Hero Title Text"}
          </h1>
          <p className="text-bg-primary-foreground max-w-[700px]">
            {content ?? "Hero Text"}
          </p>
        </div>
      </div>
    </div>
  );
}

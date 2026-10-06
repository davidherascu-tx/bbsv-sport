import Image from "next/image";

export default function PageHero({ title, subtitle, image }: { title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {image && (
        <>
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-navy/65" aria-hidden />
        </>
      )}
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="mb-4 h-1 w-16 bg-brand" />
        <h1 className="text-3xl font-bold sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}

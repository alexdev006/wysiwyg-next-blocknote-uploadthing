import Image from "next/image";

interface CoverProps {
  url?: string;
}

export default function Cover({ url }: CoverProps) {
  return (
    <div
      className={`relative w-full h-[35vh] bg-neutral-300 
      ${!url ? "hidden" : ""}`}
    >
      {!!url && (
        <Image
          src={url}
          alt="cover"
          fill
          className="object-cover"
          sizes="100vw"
        />
      )}
    </div>
  );
}

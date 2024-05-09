import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";

interface CoverProps {
  url?: string;
  setUrl: (_: string) => void;
}

export default function Cover({ url, setUrl }: CoverProps) {
  return (
    <div
      className={`relative w-full h-[35vh] bg-neutral-300 
      ${!url ? "hidden" : ""}`}
    >
      {!!url && (
        <div className="group">
          <Image
            src={url}
            alt="cover"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute w-[20%] h-[20%] right-0 bottom-0  flex justify-center items-center">
            <UploadButton
              endpoint="imageUploader"
              className="w-fit opacity-0 group-hover:opacity-100 ut-allowed-content:hidden ut-button:bg-neutral-200 ut-button:hover:bg-neutral-300 ut-button:text-neutral-800 ut-button:transition-colors"
              onClientUploadComplete={(res) => {
                setUrl(res[0].url);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

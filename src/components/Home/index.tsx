import Image from "next/image";
import Poster from "@/assets/Poster.png";
import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <div>
        {" "}
        <Link href="/">
          <Image src={Poster} alt={""} className="w-full max-h-[900px]" />
        </Link>
      </div>
      <div></div>
    </div>
  );
}

import Image from "next/image";
import Poster from "@/assets/Poster.png";
import Link from "next/link";
import ProductDetails from "../ProductDetails";

export default function HomePage(params: any) {
  return (
    <div className="flex flex-col gap-5 pb-3">
      <div>
        <Link href="/">
          <Image src={Poster} alt={""} className="w-full max-h-[900px]" />
        </Link>
      </div>
      <div className="text-[25px] p-4 flex flex-col gap-2">
        <h1>Sale</h1>
        <hr />
        <ProductDetails params={params} />
      </div>
    </div>
  );
}

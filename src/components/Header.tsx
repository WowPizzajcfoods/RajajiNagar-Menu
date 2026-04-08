import Link from "next/link";
import ImageWithLoading from "./ImageWithLoading";

export default function Header() {
  return (
    <div className="">
      <Link
        href="/"
        className="w-full h-30 relative flex  bg-[#db5b5b] overflow-hidden"
        aria-label="Home"
      >
        <ImageWithLoading src={`/pizza4.png`} alt="Bakery header" />
      </Link>
    </div>
  );
}

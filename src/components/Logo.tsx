import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="mb-10 flex items-center gap-2">
      <Image
        src="/favicon.svg"
        width={25}
        height={25}
        alt="routeine-logo-img"
      />
      <p className="text-xl font-semibold text-white">Routeine</p>
    </Link>
  );
}

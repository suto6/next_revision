import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <nav className="flex justify-between items-center px-4 py-2 background-colors-blue">
        <Link href="/">Logo</Link>
        <div className="flex justify-between px-4 gap-6 colors-blue">
        <Link href="/">Home</Link>
        <Link href="/blog">blog</Link>

        </div>

      </nav>
      </div>
  );
}

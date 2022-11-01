import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <style jsx>{`
        nav {
          margin: auto;
        }
      `}</style>
    </nav>
  );
}

import Link from "next/link";
type NavBarItemProps = {
  title: string;
  moveTo: string;
};
export default function NavBarItem({ title, moveTo }: NavBarItemProps) {
  return (
    <Link
      href={moveTo}
      className="heading-3  text-gray-600 transition-colors duration-500 hover:text-primary-500"
    >
      {title}
    </Link>
  );
}

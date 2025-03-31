import classNames from "classnames";
import Link from "next/link";

export default function Menu() {
  return (
    <ul className={classNames(["flex", "gap-5"])}>
      <li><Link href={"/community"}>Community</Link></li>
      <li><Link href={"/meals"}>Meals</Link></li>
      <li><Link href={"/meals/share"}>Share Meals</Link></li>
    </ul>
  );
}
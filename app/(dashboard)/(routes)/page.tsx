import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <p>this is protected</p>
    </div>
  );
}

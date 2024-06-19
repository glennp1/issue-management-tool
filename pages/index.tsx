import CreateIssue from "@/components/CreateIssue";
import IssuesDisplay from "@/components/IssuesDisplay";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col gap-8 items-center p-4 bg-white ${inter.className}`}
    >
      <h1 className='text-2xl'>Issues Manager</h1>

      <IssuesDisplay />
      <CreateIssue />
    </main>
  );
}

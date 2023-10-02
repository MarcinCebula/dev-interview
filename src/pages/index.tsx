import Head from "next/head";
import Link from "next/link";
import { PetsFeature } from "~/features/PetsFeature";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Pets Page</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center space-y-8 py-6">
          <h1 className="text-5xl font-extrabold tracking-tight">Pets Page</h1>
          <PetsFeature />
        </div>
      </main>
    </>
  );
}

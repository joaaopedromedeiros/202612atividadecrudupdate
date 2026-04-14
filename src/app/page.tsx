import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Bem-vindo</h1>
        <p className="text-gray-600">
          Ir para a lista de produtos:
        </p>

        <Link href="/produtos">
          <Button>Ver produtos</Button>
        </Link>
      </div>
    </main>
  );
}
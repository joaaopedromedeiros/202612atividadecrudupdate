import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Bem-vindo</h1>
      <p>Ir para a lista de produtos:</p>

      <Link href="/produtos">
        <button>Ver produtos</button>
      </Link>
    </main>
  );
}
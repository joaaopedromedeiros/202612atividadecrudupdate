import { getProdutos } from "@/services/produtos";

export default async function ProdutosPage() {
  const data = await getProdutos();

  return (
    <main style={{ padding: "20px" }}>
      <h1>Lista de Produtos</h1>

      <ul>
        {data.products.map((produto) => (
          <li key={produto.id} style={{ marginBottom: "20px" }}>
            <img
              src={produto.thumbnail}
              alt={produto.title}
              width={100}
            />
            <h3>{produto.title}</h3>
            <p>{produto.description}</p>
            <strong>R$ {produto.price}</strong>
          </li>
        ))}
      </ul>
    </main>
  );
}
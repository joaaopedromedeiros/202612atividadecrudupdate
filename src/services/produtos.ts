export interface Produto {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export interface ProdutosResponse {
  products: Produto[];
}

export async function getProdutos(): Promise<ProdutosResponse> {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store", // evita cache (opcional)
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return res.json();
}
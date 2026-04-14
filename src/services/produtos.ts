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


export async function getProdutoById(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Erro ao buscar produto");

  return res.json();
}

export async function updateProduto(id: string, data: any) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    method: "PUT", // ou PATCH
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.title,
      description: data.description,
      price: data.price,
    }),
  });

  const response = await res.json();

  if (!res.ok) {
    console.error(response);
    throw new Error("Erro ao atualizar produto");
  }

  return response;
}
import { getProdutos } from "@/services/produtos";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function ProdutosPage() {
  const data = await getProdutos();

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Lista de Produtos
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {data.products.map((produto) => (
          <Card key={produto.id}>
            <CardContent className="p-4 space-y-3">
              <img
                src={produto.thumbnail}
                alt={produto.title}
                className="w-full h-40 object-cover rounded-md"
              />

              <h3 className="text-lg font-semibold">
                {produto.title}
              </h3>

              <p className="text-sm text-gray-600 line-clamp-2">
                {produto.description}
              </p>

              <strong className="block text-green-600">
                R$ {produto.price}
              </strong>

              <Link href={`/produtos/${produto.id}`}>
                <Button variant="outline" className="w-full">
                  Editar
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
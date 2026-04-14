"use client";

import { useEffect, useState } from "react";
import { getProdutoById, updateProduto } from "@/services/produtos";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function EditarProduto() {
  const { id } = useParams();
  const router = useRouter();

  const [produto, setProduto] = useState({
    title: "",
    description: "",
    price: 0,
    thumbnail: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduto() {
      const data = await getProdutoById(id as string);

      setProduto({
        title: data.title,
        description: data.description,
        price: data.price,
        thumbnail: data.thumbnail,
      });

      setLoading(false);
    }

    fetchProduto();
  }, [id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await updateProduto(id as string, {
      title: produto.title,
      description: produto.description,
      price: produto.price,
    });

    alert("Produto atualizado!");
    router.push("/produtos");
  }

  if (loading) {
    return (
      <p className="text-center mt-10">Carregando...</p>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">
        Editar Produto
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label>Título</Label>
          <Input
            value={produto.title}
            onChange={(e) =>
              setProduto({ ...produto, title: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <Label>Descrição</Label>
          <Textarea
            value={produto.description}
            onChange={(e) =>
              setProduto({
                ...produto,
                description: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <Label>Preço</Label>
          <Input
            type="number"
            value={produto.price}
            onChange={(e) =>
              setProduto({
                ...produto,
                price: Number(e.target.value),
              })
            }
          />
        </div>

        <div className="space-y-2">
          <Label>Thumbnail</Label>
          <Input
            value={produto.thumbnail}
            onChange={(e) =>
              setProduto({
                ...produto,
                thumbnail: e.target.value,
              })
            }
          />
        </div>

        <Button type="submit" className="w-full">
          Salvar alterações
        </Button>
      </form>
    </div>
  );
}
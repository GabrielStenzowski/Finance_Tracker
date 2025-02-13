'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trash } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Categoria {
  nome: string;
  tipo: "Receita" | "Despesa";
}

export default function Categorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([
    { nome: "Moradia", tipo: "Despesa" },
    { nome: "Transporte", tipo: "Despesa" },
    { nome: "Salário", tipo: "Receita" },
    { nome: "Freelance", tipo: "Receita" },
  ]);
  const [novaCategoria, setNovaCategoria] = useState("");
  const [tipoCategoria, setTipoCategoria] = useState<"Receita" | "Despesa">("Despesa");

  const adicionarCategoria = () => {
    if (novaCategoria.trim() && !categorias.some((cat) => cat.nome === novaCategoria)) {
      setCategorias([...categorias, { nome: novaCategoria, tipo: tipoCategoria }]);
      setNovaCategoria("");
    }
  };

  const removerCategoria = (categoriaNome: string) => {
    setCategorias(categorias.filter((cat) => cat.nome !== categoriaNome));
  };

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Categorias</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="Nome da categoria"
              value={novaCategoria}
              onChange={(e) => setNovaCategoria(e.target.value)}
            />
            <Select onValueChange={(value) => setTipoCategoria(value as "Receita" | "Despesa")}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Receita">Receita 💰</SelectItem>
                <SelectItem value="Despesa">Despesa 🔴</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={adicionarCategoria}>Adicionar</Button>
          </div>
          <Separator className="my-4" />
          <ul className="space-y-2">
            {categorias.map((categoria, index) => (
              <li key={index} className={`flex justify-between items-center p-2 rounded ${categoria.tipo === "Receita" ? "bg-green-100" : "bg-red-100"}`}>
                <span className="font-medium">{categoria.nome} ({categoria.tipo === "Receita" ? "💰" : "🔴"})</span>
                <Button variant="destructive" size="icon" onClick={() => removerCategoria(categoria.nome)}>
                  <Trash size={16} />
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

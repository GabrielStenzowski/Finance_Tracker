'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

interface Transacao {
  nome: string;
  valor: number;
  tipo: "Receita" | "Despesa";
  categoria: string;
  data: Date;
}

export default function Transacoes() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState<"Receita" | "Despesa">("Despesa");
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState(new Date());
  const categoriasDisponiveis = ["Moradia", "Transporte", "Alimentação", "Lazer", "Saúde", "Salário", "Freelance", "Investimentos"];

  const adicionarTransacao = () => {
    if (nome.trim() && valor && categoria) {
      setTransacoes([...transacoes, { nome, valor: parseFloat(valor), tipo, categoria, data }]);
      setNome("");
      setValor("");
      setCategoria("");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Adicionar Transação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input placeholder="Nome da transação" value={nome} onChange={(e) => setNome(e.target.value)} />
            <Input type="number" placeholder="Valor" value={valor} onChange={(e) => setValor(e.target.value)} />
            <Select onValueChange={(value) => setTipo(value as "Receita" | "Despesa")}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Receita">Receita 💰</SelectItem>
                <SelectItem value="Despesa">Despesa 🔴</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => setCategoria(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categoriasDisponiveis.map((cat, index) => (
                  <SelectItem key={index} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Calendar date={data} onChange={setData} />
            <Button onClick={adicionarTransacao}>Adicionar</Button>
          </div>
        </CardContent>
      </Card>
      <Separator />
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Transações</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {transacoes.map((transacao, index) => (
              <li key={index} className={`flex justify-between items-center p-2 rounded ${transacao.tipo === "Receita" ? "bg-green-100" : "bg-red-100"}`}>
                <span>{transacao.nome} - {transacao.tipo === "Receita" ? "💰" : "🔴"} - {transacao.categoria} - R${transacao.valor.toFixed(2)} - {format(transacao.data, "dd/MM/yyyy")}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

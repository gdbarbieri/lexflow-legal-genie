import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Scale, ArrowLeft, FileText, Sparkles } from "lucide-react";

export default function CreateDocument() {
  const [documentType, setDocumentType] = useState("");

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center gap-2 font-bold text-xl">
              <Scale className="h-6 w-6 text-primary" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                LexFlow
              </span>
            </Link>
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 animate-fade-up">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <FileText className="h-10 w-10 text-primary" />
              Gerar Novo Documento
            </h1>
            <p className="text-xl text-muted-foreground">
              Preencha os dados e deixe a IA criar seu contrato personalizado
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Informações do Documento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="type">Tipo de Documento</Label>
                  <Select value={documentType} onValueChange={setDocumentType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="service">Contrato de Prestação de Serviços</SelectItem>
                      <SelectItem value="nda">NDA - Acordo de Confidencialidade</SelectItem>
                      <SelectItem value="employment">Contrato de Trabalho</SelectItem>
                      <SelectItem value="rental">Contrato de Locação</SelectItem>
                      <SelectItem value="partnership">Contrato de Sociedade</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="party1">Primeira Parte (Contratante)</Label>
                  <Input
                    id="party1"
                    placeholder="Nome completo ou razão social"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="party2">Segunda Parte (Contratado)</Label>
                  <Input
                    id="party2"
                    placeholder="Nome completo ou razão social"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="value">Valor do Contrato</Label>
                  <Input
                    id="value"
                    placeholder="R$ 0,00"
                    type="text"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Prazo/Duração</Label>
                  <Input
                    id="duration"
                    placeholder="Ex: 12 meses, indeterminado"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Detalhes Adicionais</Label>
                  <Textarea
                    id="details"
                    placeholder="Descreva requisitos específicos ou cláusulas especiais..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="hero" size="lg" className="flex-1">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Gerar com IA
                  </Button>
                  <Button variant="outline" size="lg">
                    Salvar Rascunho
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Preview Section */}
            <Card className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <CardTitle>Preview do Documento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-8 min-h-[600px] border border-border">
                  <div className="prose prose-sm max-w-none">
                    {documentType ? (
                      <>
                        <h2 className="text-center font-bold mb-8">
                          {documentType === "service" && "CONTRATO DE PRESTAÇÃO DE SERVIÇOS"}
                          {documentType === "nda" && "ACORDO DE CONFIDENCIALIDADE"}
                          {documentType === "employment" && "CONTRATO DE TRABALHO"}
                          {documentType === "rental" && "CONTRATO DE LOCAÇÃO"}
                          {documentType === "partnership" && "CONTRATO DE SOCIEDADE"}
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          Preencha os campos ao lado para gerar automaticamente o conteúdo do contrato...
                        </p>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                        <FileText className="h-16 w-16 mb-4 opacity-20" />
                        <p>Selecione um tipo de documento para começar</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

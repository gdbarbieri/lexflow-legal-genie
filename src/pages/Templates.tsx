import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Scale, ArrowLeft, Brain, Search, Star, TrendingUp } from "lucide-react";

export default function Templates() {
  const templates = [
    {
      id: 1,
      name: "Contrato de Prestação de Serviços",
      description: "Modelo completo para formalização de serviços profissionais",
      category: "Empresarial",
      uses: 1234,
      popular: true
    },
    {
      id: 2,
      name: "NDA - Acordo de Confidencialidade",
      description: "Proteja informações sensíveis em negociações",
      category: "Empresarial",
      uses: 987,
      popular: true
    },
    {
      id: 3,
      name: "Contrato de Trabalho CLT",
      description: "Contrato completo para regime CLT",
      category: "Trabalhista",
      uses: 856,
      popular: false
    },
    {
      id: 4,
      name: "Contrato de Locação Residencial",
      description: "Modelo para locação de imóveis residenciais",
      category: "Imobiliário",
      uses: 745,
      popular: false
    },
    {
      id: 5,
      name: "Contrato Social",
      description: "Fundação de empresas com múltiplos sócios",
      category: "Empresarial",
      uses: 623,
      popular: true
    },
    {
      id: 6,
      name: "Procuração Pública",
      description: "Delegação de poderes para representação legal",
      category: "Civil",
      uses: 512,
      popular: false
    },
  ];

  const categories = ["Todos", "Empresarial", "Trabalhista", "Imobiliário", "Civil"];

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
              <Brain className="h-10 w-10 text-primary" />
              Modelos Inteligentes
            </h1>
            <p className="text-xl text-muted-foreground">
              Biblioteca completa de modelos jurídicos prontos para usar
            </p>
          </div>

          {/* Search */}
          <Card className="mb-6 animate-fade-in">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar modelos..."
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {templates.map((template, index) => (
              <Card
                key={template.id}
                className="hover:shadow-xl transition-all hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {template.category}
                    </div>
                    {template.popular && (
                      <div className="flex items-center gap-1 text-yellow-600">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-xs font-medium">Popular</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      <span>{template.uses.toLocaleString()} usos</span>
                    </div>
                    <Link to="/dashboard/create">
                      <Button size="sm">
                        Usar modelo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

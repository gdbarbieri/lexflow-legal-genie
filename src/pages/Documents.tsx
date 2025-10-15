import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Scale, ArrowLeft, FileText, Search, Filter, Download, Eye, Trash2 } from "lucide-react";

export default function Documents() {
  const documents = [
    { id: 1, name: "Contrato de Prestação de Serviços - Cliente ABC", date: "24/01/2025", status: "Concluído", size: "245 KB" },
    { id: 2, name: "NDA - Acordo de Confidencialidade - Projeto XYZ", date: "23/01/2025", status: "Pendente", size: "128 KB" },
    { id: 3, name: "Contrato de Trabalho - João Silva", date: "22/01/2025", status: "Concluído", size: "312 KB" },
    { id: 4, name: "Contrato de Locação Comercial", date: "20/01/2025", status: "Concluído", size: "198 KB" },
    { id: 5, name: "Procuração Pública", date: "18/01/2025", status: "Concluído", size: "89 KB" },
    { id: 6, name: "Termo de Rescisão Contratual", date: "15/01/2025", status: "Arquivado", size: "156 KB" },
  ];

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
              Meus Documentos
            </h1>
            <p className="text-xl text-muted-foreground">
              Gerencie todos os seus contratos e documentos em um só lugar
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-6 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Buscar documentos..."
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-5 w-5 mr-2" />
                  Filtros
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Documents List */}
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <Card
                key={doc.id}
                className="hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{doc.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{doc.date}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span className={`px-2 py-0.5 rounded-full ${
                            doc.status === "Concluído" 
                              ? "bg-green-500/10 text-green-600" 
                              : doc.status === "Pendente"
                              ? "bg-yellow-500/10 text-yellow-600"
                              : "bg-gray-500/10 text-gray-600"
                          }`}>
                            {doc.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
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

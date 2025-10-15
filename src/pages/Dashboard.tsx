import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, FileText, Brain, PenTool, Settings, LogOut, Plus, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const recentDocuments = [
    { id: 1, name: "Contrato de Prestação de Serviços", date: "Hoje, 14:30", status: "Concluído" },
    { id: 2, name: "NDA - Acordo de Confidencialidade", date: "Ontem, 09:15", status: "Pendente assinatura" },
    { id: 3, name: "Contrato de Trabalho", date: "23/01/2025", status: "Concluído" },
  ];

  const quickActions = [
    {
      title: "Gerar Documento",
      description: "Criar novo contrato ou documento",
      icon: <Plus className="h-6 w-6" />,
      href: "/dashboard/create",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Meus Modelos",
      description: "Acessar biblioteca de modelos",
      icon: <Brain className="h-6 w-6" />,
      href: "/dashboard/templates",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Assinaturas",
      description: "Gerenciar documentos para assinar",
      icon: <PenTool className="h-6 w-6" />,
      href: "/dashboard/signatures",
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <Scale className="h-6 w-6 text-primary" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                LexFlow
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-up">
          <h1 className="text-4xl font-bold mb-2">
            Bom dia, Dr. Usuário 👋
          </h1>
          <p className="text-xl text-muted-foreground">
            Pronto para criar o próximo contrato?
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <Link key={index} to={action.href}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 cursor-pointer group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 space-y-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${action.color} bg-opacity-10 text-primary group-hover:scale-110 transition-transform`}>
                    {action.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent Documents */}
        <Card className="animate-fade-up" style={{ animationDelay: "300ms" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Documentos Recentes
            </CardTitle>
            <CardDescription>Seus últimos documentos criados e editados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{doc.name}</h4>
                      <p className="text-sm text-muted-foreground">{doc.date}</p>
                    </div>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    doc.status === "Concluído" 
                      ? "bg-green-500/10 text-green-600" 
                      : "bg-yellow-500/10 text-yellow-600"
                  }`}>
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
            
            <Link to="/dashboard/documents">
              <Button variant="outline" className="w-full mt-6">
                Ver todos os documentos
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="animate-fade-up" style={{ animationDelay: "400ms" }}>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">24</div>
              <p className="text-sm text-muted-foreground">Documentos este mês</p>
            </CardContent>
          </Card>
          <Card className="animate-fade-up" style={{ animationDelay: "500ms" }}>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">8.5 GB</div>
              <p className="text-sm text-muted-foreground">Armazenamento usado</p>
            </CardContent>
          </Card>
          <Card className="animate-fade-up" style={{ animationDelay: "600ms" }}>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <p className="text-sm text-muted-foreground">Aguardando assinatura</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

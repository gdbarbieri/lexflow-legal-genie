import { Card, CardContent } from "@/components/ui/card";
import { FileText, Brain, Lock, PenTool } from "lucide-react";
import iconAi from "@/assets/icon-ai.png";
import iconStorage from "@/assets/icon-storage.png";
import iconSignature from "@/assets/icon-signature.png";

export const FeaturesSection = () => {
  const features = [
    {
      icon: iconAi,
      title: "Geração Automática",
      description: "IA inteligente que cria contratos e documentos jurídicos baseados em suas necessidades específicas.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: "Modelos Personalizáveis",
      description: "Biblioteca completa de modelos jurídicos que você pode customizar e reutilizar.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: iconStorage,
      title: "Armazenamento Seguro",
      description: "Todos os documentos protegidos com criptografia de ponta e backup automático.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: iconSignature,
      title: "Assinatura Digital",
      description: "Integração com sistemas de assinatura digital para validação legal dos contratos.",
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tudo que você precisa para{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              automatizar documentos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tecnologia de ponta para advogados modernos e empresas inovadoras
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10`}>
                  {typeof feature.icon === 'string' ? (
                    <img src={feature.icon} alt={feature.title} className="h-12 w-12" />
                  ) : (
                    <div className="text-primary">{feature.icon}</div>
                  )}
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

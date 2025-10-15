import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export const PricingSection = () => {
  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "/mês",
      description: "Para experimentar a plataforma",
      features: [
        "5 documentos por mês",
        "Modelos básicos",
        "Armazenamento de 1GB",
        "Suporte por email"
      ],
      cta: "Começar grátis",
      popular: false
    },
    {
      name: "Pro",
      price: "R$ 97",
      period: "/mês",
      description: "Para advogados e profissionais",
      features: [
        "Documentos ilimitados",
        "Todos os modelos",
        "Armazenamento de 50GB",
        "IA avançada",
        "Assinatura digital",
        "Suporte prioritário"
      ],
      cta: "Assinar Pro",
      popular: true
    },
    {
      name: "Business",
      price: "R$ 297",
      period: "/mês",
      description: "Para escritórios e empresas",
      features: [
        "Tudo do Pro",
        "Usuários ilimitados",
        "Armazenamento de 500GB",
        "API de integração",
        "Painel multiusuário",
        "Gerente de conta dedicado",
        "Treinamento personalizado"
      ],
      cta: "Falar com vendas",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Planos para{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              todos os tamanhos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha o plano ideal para suas necessidades e comece hoje mesmo
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:shadow-2xl animate-fade-up ${
                plan.popular
                  ? "border-2 border-primary shadow-xl scale-105"
                  : "border-border/50 hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/auth" className="block">
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

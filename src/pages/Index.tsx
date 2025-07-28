import { useState } from "react";
import { ArrowRight, Star, TrendingUp, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

function Index() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const features = [
    {
      icon: Star,
      title: "Premium Creators",
      description: "Discover exclusive content from verified premium creators in our luxury ecosystem."
    },
    {
      icon: TrendingUp,
      title: "Elite Community",
      description: "Join an exclusive community where creativity meets luxury and sophistication."
    },
    {
      icon: Crown,
      title: "VIP Experience",
      description: "Access premium features and exclusive content with our VIP membership tiers."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/80 to-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }} />
        
        <div className="relative container mx-auto px-4 py-32">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="h-12 w-12 text-primary mr-4 animate-pulse" />
              <h1 className="text-6xl font-luxury font-bold text-gradient">Cabana</h1>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Where Creators and Fans Connect
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join the premium platform where content creators share exclusive content and build meaningful connections with their community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {user ? (
                  <Button asChild size="lg" className="btn-luxury h-14 px-8 text-lg">
                    <Link to="/home">
                      Enter Cabana
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Button asChild size="lg" className="btn-luxury h-14 px-8 text-lg">
                      <Link to="/home">
                        Enter Cabana
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="btn-glass h-14 px-8 text-lg">
                      <Link to="/search">
                        Explore Creators
                      </Link>
                    </Button>
                  </>
                )}
              </div>

              {/* Enhanced Search Bar */}
              <div className="max-w-lg mx-auto">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <Input
                    type="text"
                    placeholder="Search creators..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="relative pl-6 pr-6 py-8 text-lg glass-morphism text-white placeholder:text-white/60 focus:ring-2 focus:ring-holo-pink/50 border-white/20 focus:border-white/40 rounded-3xl bg-white/5 backdrop-blur-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Premium Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover what makes Cabana the ultimate destination for premium content creators and their communities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="card-glass border-border/60 hover:border-primary/20 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-xl w-fit">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gradient">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          {[
            { value: "100K+", label: "Active Creators" },
            { value: "5M+", label: "Premium Subscribers" },
            { value: "50M+", label: "Content Pieces" },
            { value: "$10M+", label: "Creator Earnings" }
          ].map((stat) => (
            <div 
              key={stat.label}
              className="card-crystal p-6"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 text-holographic">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-bold text-gradient">Ready to Experience Luxury?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of creators and fans who are already part of the exclusive Cabana community.
          </p>
          <Button asChild size="lg" className="btn-holographic h-12 px-8">
            <Link to="/home">
              Join Cabana Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Index;
// Fansworld Design System Export for Framer
// Use this as reference when recreating in Framer

export const designSystem = {
  // Color Palette
  colors: {
    // Base colors
    background: "hsl(240, 12%, 4%)",
    foreground: "hsl(0, 0%, 98%)",
    
    // Chrome & Metallic
    chrome: {
      platinum: "hsl(0, 0%, 92%)",
      silver: "hsl(0, 0%, 80%)",
      dark: "hsl(0, 0%, 25%)",
      black: "hsl(0, 0%, 8%)",
    },
    
    // Neon accents
    neon: {
      blue: "#00D4FF",
      pink: "#FF0080", 
      purple: "#8B5CF6",
      orange: "#FF6B35",
      green: "#00FF88"
    },
    
    // Metallic gradients
    gradients: {
      luxury: "linear-gradient(135deg, #E5E7EB 0%, #9CA3AF 50%, #374151 100%)",
      chrome: "linear-gradient(135deg, #F8FAFC 0%, #CBD5E1 50%, #475569 100%)",
      neon: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)"
    }
  },

  // Typography
  typography: {
    fonts: {
      display: "Poppins, Inter, system-ui, sans-serif",
      body: "Inter, system-ui, sans-serif", 
      luxury: "Montserrat, Poppins, system-ui, sans-serif",
      serif: "Playfair Display, Georgia, serif"
    },
    
    sizes: {
      xs: "12px",
      sm: "14px", 
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px"
    }
  },

  // Spacing & Layout
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px", 
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px"
  },

  // Border radius
  radius: {
    sm: "8px",
    md: "16px", 
    lg: "20px",
    xl: "24px"
  },

  // Shadows & Effects
  shadows: {
    luxury: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    glow: "0 0 20px rgba(139, 92, 246, 0.4)",
    chrome: "0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
    glass: "0 8px 32px rgba(0, 0, 0, 0.1)"
  },

  // Key component specs
  components: {
    navbar: {
      height: "80px",
      background: "backdrop-blur glass effect",
      border: "chrome metallic"
    },
    
    creatorCard: {
      width: "320px",
      height: "400px", 
      background: "gradient-chrome",
      radius: "20px",
      shadow: "luxury"
    },
    
    button: {
      primary: {
        background: "neon gradient",
        padding: "12px 24px",
        radius: "16px"
      }
    }
  }
};

// Page layouts to recreate
export const layouts = {
  home: {
    hero: "Full screen with chrome gradient background",
    features: "3-column grid with glass cards", 
    cta: "Centered with neon accent button"
  },
  
  dashboard: {
    sidebar: "280px width, glass effect",
    main: "Flex-1 with content cards",
    stats: "4-column metric cards"
  },
  
  creatorProfile: {
    header: "Banner with avatar overlay",
    content: "2-column: content feed + sidebar",
    media: "Masonry grid layout"
  }
};
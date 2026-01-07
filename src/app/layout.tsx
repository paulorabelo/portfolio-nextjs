import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Paulo Rabelo - Portfolio",
  description: "Desenvolvedor Java e Engenheiro de Computação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* FontAwesome que o site antigo usa */}
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className="antialiased">
        {/* Tudo aqui fica fixo para todo o site */}
        
        
        {/* O children é onde entra o conteúdo de cada página (page.tsx) */}
        {children}
      </body>
    </html>
  );
}
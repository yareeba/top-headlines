import { Metadata } from "next";
import { Noticia_Text } from "next/font/google";
import Header from "../components/Header";

const noticia = Noticia_Text({
  subsets: ["latin"],
  variable: "--font-noticia",
  display: "swap",
  weight: "400",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Top 5 News Headlines",
  description: "See the top 5 news stories by country.",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={noticia.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

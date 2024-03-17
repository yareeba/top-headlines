import { Metadata } from "next";
import { Abhaya_Libre } from "next/font/google";
import Header from "../components/Header";

const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  variable: "--font-abhaya-libre",
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
    <html lang="en" className={abhayaLibre.className}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

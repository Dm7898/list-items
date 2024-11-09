import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-mono">
        <Header />
        <main className="container mx-auto px-4 md:px-8 lg:px-14">
          {children}
        </main>
      </body>
    </html>
  );
}

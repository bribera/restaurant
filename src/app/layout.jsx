
import "./globals.css";
import Layout from "@/components/Loading";


export const metadata = {
  title: "La Tratilla Bella",
  description: "restaurant software desktop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-full ">
        
          {children}
        
      </body>
    </html>
  );
}

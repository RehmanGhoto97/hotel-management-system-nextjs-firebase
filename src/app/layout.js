import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ReduxProvider from "@/providers/ReduxProvider";

export const metadata = {
  title: "Create Next App",
  description: "Manage rooms, reservations, and guests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
            <ReduxProvider>
                      <Navbar />
          {children}
        </ReduxProvider>
      
      </body>
    </html>
  );
}

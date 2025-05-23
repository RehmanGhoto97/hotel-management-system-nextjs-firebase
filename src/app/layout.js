import Footer from "@/components/footer/Footer";
import "./globals.css";
import Navbar from '@/components/navbar/Navbar';

export const metadata = {
  title: "Create Next App",
   description: 'Manage rooms, reservations, and guests',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
     {/* <Footer/> */}
      </body>
    </html>
  );
}

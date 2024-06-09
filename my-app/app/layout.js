import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata = {
  title: "MongoDB_crud",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <div className=" max-w-3xl mx-auto p-4">
          <Navbar/>
        {children}
        </div>
        
        </body>
    </html>
  );
}

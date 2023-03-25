import '../styles/reset.css'
import '../styles/global.css'
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navlinks from '@/components/navlinks';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navlinks />
        {
          children
        }
        <Footer />
      </body>
    </html>
  )
}

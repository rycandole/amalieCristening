import "./globals.css";
import { Dancing_Script } from 'next/font/google'
import localFont from 'next/font/local'

export const metadata = {
  title: "Amalie Cristening",
  description: "Amalie Cristening",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         {children}
//       </body>
//     </html>
//   );
// }

const SourGummy = localFont({
  src: [
    {
      path: "../Utilities/Fonts/Sour_Gummy/static/SourGummy_Expanded-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sour-gummy"
})

const MsMadi = localFont({
  src: [
    {
      path: "../Utilities/Fonts/Ms_Madi/MsMadi-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ms-madi"
})

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${MsMadi.variable}`}>{children}</body>
    </html>
  )
}

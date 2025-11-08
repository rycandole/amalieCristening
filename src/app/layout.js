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

const Spectral = localFont({
  src: [
    {
      path: "../Utilities/Fonts/Spectral/Spectral-Italic.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-spectral"
})

const YellowTail = localFont({
  src: [
    {
      path: "../Utilities/Fonts/YellowTail/Yellowtail-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yellowTail"
})

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${YellowTail.variable} ${Spectral.variable}`}>{children}</body>
    </html>
  )
}

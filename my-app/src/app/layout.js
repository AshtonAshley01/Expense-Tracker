import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
// import NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY from ""

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Finance",
  description: "AI powered Financial advisor",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

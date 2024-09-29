import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import NewsletterCard from "@/components/newsletter-card";
import Footer from "@/components/footer";
import { getBlogName } from "@/lib/requests";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const data = await getBlogName();

  return {
    title: data.displayTitle || data.title,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getBlogName();

  return (
    <html lang='en'>
      <head>
        <title>devgancode</title>
        <link rel='icon' href={data.favicon || "/favicon.ico"} />
        <title>devgancode</title>
        <meta name='description' content='' />

        <meta
          property='og:url'
          content='https://devgancode-blogs.vercel.app/'
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='devgancode' />
        <meta
          property='og:description'
          content='Explore insightful articles on web development, DevOps, backend technologies, and modern frontend styling. devgancode shares tutorials, tips, and best practices for aspiring developers and tech enthusiasts.'
        />
        <meta
          property='og:image'
          content='https://opengraph.b-cdn.net/production/images/bbc3e315-cdd2-473b-bc0e-0af8a1218e2c.png?token=hC99BhYl1WlU6Pmk1hryXictgpuVAAeWUd8aNpku9fQ&height=901&width=1200&expires=33263625503'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='devgancode-blogs.vercel.app' />
        <meta
          property='twitter:url'
          content='https://devgancode-blogs.vercel.app/'
        />
        <meta name='twitter:title' content='devgancode' />
        <meta
          name='twitter:description'
          content='Discover in-depth guides and articles on web development, backend, DevOps, and frontend styling. Join devgancode for practical tips and knowledge to boost your tech skills.'
        />
        <meta
          name='twitter:image'
          content='https://opengraph.b-cdn.net/production/images/bbc3e315-cdd2-473b-bc0e-0af8a1218e2c.png?token=hC99BhYl1WlU6Pmk1hryXictgpuVAAeWUd8aNpku9fQ&height=901&width=1200&expires=33263625503'
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Analytics />
          {children}
          <NewsletterCard />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

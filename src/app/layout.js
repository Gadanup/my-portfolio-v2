import ThemeWrapper from "../components/ThemeWrapper";
import "../styles/globals.css";

export const metadata = {
  title: "Cláudio Jesus - Portfolio",
  description:
    "Cláudio Jesus' personal portfolio showcasing skills, projects, and contact information.",
  icons: {
    icon: [
      { url: "icon/favicon.ico" },
      {
        url: "icon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "icon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "icon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <head>
        {/* Favicon meta tags */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4a90e2" />
      </head>
      <body
        className="antialiased"
        style={{
          overflowX: "hidden",
          width: "100%",
          maxWidth: "100%",
          position: "relative",
        }}
      >
        <div
          id="app-root"
          style={{
            overflowX: "hidden",
            width: "100%",
            maxWidth: "100%",
            minHeight: "100vh",
          }}
        >
          <ThemeWrapper>{children}</ThemeWrapper>
        </div>
      </body>
    </html>
  );
}

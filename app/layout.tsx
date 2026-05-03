import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contractor vs Employee Classifier | Avoid IRS Misclassification Penalties",
  description: "Classify workers to avoid IRS misclassification penalties. Analyze worker relationships and flag IRS misclassification risks instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="19324e1a-824b-4412-8e4a-a8821d128ce5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

import "./styles/globals.css"; // ✅ Ensure global styles are included

export const metadata = {
  title: "Dolphin Bank",
  description: "A modern banking web app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900">
        {children} {/* ✅ This ensures pages are injected inside <body> */}
      </body>
    </html>
  );
}


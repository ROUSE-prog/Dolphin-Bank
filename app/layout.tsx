import "./styles/globals.css"; // ✅ Ensure global styles are included

export const metadata = {
  title: "Dolphin Bank",
  description: "A modern banking web app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-900 dark:to-gray-800">
        {children}
      </body>
    </html>
  );
}

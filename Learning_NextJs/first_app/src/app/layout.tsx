export const metadata = {
  title: "My First App",
  description: "This is my first app using Next.js 13.4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header
        style={{
          backgroundColor: "red",
          padding: "1rem",
        }}
      >
        <p>This is header</p>
      </header>
      <body>{children}</body>
      <footer
        style={{
          backgroundColor: "lightblue",
          padding: "1rem",
        }}
      >
        <p>Footer</p>
      </footer>
    </html>
  );
}

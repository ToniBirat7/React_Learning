export const metadata = {
    title: 'My First App',
    description: 'This is my first app using Next.js 13.4',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    // This is the root layout for the app. It wraps all pages in the app.
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
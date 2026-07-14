export const metadata = {
  title: "Om Homeopathic Clinic — Dr. Saurabh Kumar Shukla",
  description: "Om Homeopathic Clinic, Varanasi. Specialist in chronic and incurable diseases. Dr. Saurabh Kumar Shukla (B.H.M.S., P.G.D.Y.) functions as a de-addiction center and consultant physician.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" dir="ltr">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/img/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/img/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/img/favicons/favicon-16x16.png"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicons/favicon.ico" />
        <link rel="manifest" href="/assets/img/favicons/manifest.json" />
        <meta name="msapplication-TileImage" content="/assets/img/favicons/mstile-150x150.png" />
        <meta name="theme-color" content="#ffffff" />
        <link href="/assets/css/theme.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

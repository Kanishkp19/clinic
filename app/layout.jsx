import "../public/assets/css/theme.css";

export const metadata = {
  title: "Om Homeopathic Clinic — Dr. Saurabh Kumar Shukla",
  description: "Om Homeopathic Clinic, Varanasi. Specialist in chronic and incurable diseases. Dr. Saurabh Kumar Shukla (B.H.M.S., P.G.D.Y.) functions as a de-addiction center and consultant physician.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" dir="ltr">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" type="image/png" href="/assets/img/logo.png" />
        <meta name="theme-color" content="#0D3B43" />
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

import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="home"
        description="home description"
        canonical="https://example.com"
        openGraph={{
          url: "https://example.com",
        }}
      />
    </>
  );
}

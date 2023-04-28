import { DefaultSeoProps } from "next-seo";

const DefaultSeoInfo: DefaultSeoProps = {
  titleTemplate: "%s | Example",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
  additionalMetaTags: [
    {
      name: "theme-color",
      content: "#FFFFFF",
    },
  ],
  openGraph: {
    type: "website",
    site_name: "Example",
    images: [{ url: "https://example.com/example_square_image.png" }],
  },
};

export default DefaultSeoInfo;

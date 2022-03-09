import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "4a4w92k0",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skyjmWaX60dUrCfyBBNKaAlfKX6YRrURTW6oWgx2X4NgMGDFIwuo9tgXUOL931fi1WDKSBz7SjdDWhuTXbCwe7UMTXY9rbxsxf1lTW4VAxtyrTLbDqKcHOLGhHBiZOZ5ctasb6HEvP9D0X2Q6jelnO6pQhSecJe2ynIcjjbjD4IX8L9RxYFV",
  useCdn: false,
});

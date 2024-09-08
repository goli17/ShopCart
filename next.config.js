module.exports = {
  images: {
    domains: [
      "example.com",
      "ik.imagekit.io",
      "m.media-amazon.com",
      "imagekit.io",
      "cdn.dummyjson.com",
      "lh3.googleusercontent.com",
    ], // Add other domains as needed
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

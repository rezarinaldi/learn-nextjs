module.exports = {
  env: {
    appName: "Learn Next.js + TypeScript Example",
  },

  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/register",
        destination: "/auth/register",
      },
    ];
  },
};

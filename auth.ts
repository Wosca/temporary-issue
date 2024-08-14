import NextAuth from "next-auth";
import EntraId from "next-auth/providers/microsoft-entra-id";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    EntraId({
      clientId: process.env.AUTH_AZURE_AD_ID,
      clientSecret: process.env.AUTH_AZURE_AD_SECRET,
      tenantId: process.env.AUTH_AZURE_AD_TENANT_ID,
      authorization: {
        url: `https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize`,
        params: {
          scope: "openid email",
        },
      },
    }),
  ],
});

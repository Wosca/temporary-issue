import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("entra-id");
      }}
    >
      <button type="submit">Signin with Azure Active Directory</button>
    </form>
  );
}

import { useUser } from "@clerk/clerk-react";

export default function User() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <div>Hello {user.fullName}!</div>;
  }

  return <div>Not signed in</div>;
}
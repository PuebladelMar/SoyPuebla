import { useUser, UserButton } from "@clerk/clerk-react";

export default function User() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return (
      <UserButton />
    );
  }
}
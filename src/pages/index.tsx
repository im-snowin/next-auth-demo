import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
	const { data: session } = useSession();

	if (session)
		return (
			<>
				<p>Logged in as: {session?.user?.name}</p>
				<button onClick={() => signOut()}>Logout</button>
			</>
		);

	return (
		<>
			<h1>Next Auth 🔐</h1>
			<button onClick={() => signIn("google")}>Sign In With google</button>
		</>
	);
}

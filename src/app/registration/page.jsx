"use client";

import { authClient } from "@/lib/auth-client";
import { Input, Button, Card } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";

export default function RegisterPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });
    console.log(data, error);
    if (!error) {
      router.push("/");
    }

    if (error) {
      toast.error(error.message || "Login failed");
      return;
    }

    toast.success("Login successful");
    e.target.reset();
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-md p-8 shadow-2xl rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">Registration</h2>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <Input
              required
              name="name"
              type="text"
              placeholder="Enter your name"
              variant="bordered"
              radius="lg"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <Input
              required
              name="email"
              type="email"
              placeholder="you@example.com"
              variant="bordered"
              radius="lg"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <Input
              required
              name="image"
              type="text"
              placeholder="https://your-image-link.com"
              variant="bordered"
              radius="lg"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <Input
              required
              name="password"
              type="password"
              placeholder="Enter password"
              variant="bordered"
              radius="lg"
              className="w-full"
            />
          </div>

          <Button
            type="submit"
            color="primary"
            radius="lg"
            className="w-full mt-2 bg-green-500 hover:bg-green-600"
          >
            Register
          </Button>
          <p className="flex justify-center items-center gap-2">
            Already have an Account?{" "}
            <Link href="/login" className="text-blue-600 cursor-pointer ">
              {" "}
              LogIn!
            </Link>
          </p>

          <div className="flex items-center gap-3 my-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <Button
            onClick={handleGoogleSignIn}
            variant="bordered"
            radius="lg"
            className="w-full border "
          >
            <FcGoogle />
            Continue with <span className="text-green-400">Google</span>
          </Button>
        </form>
      </Card>
    </div>
  );
}

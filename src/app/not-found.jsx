"use client";

import Link from "next/link";
import { Button, Card } from "@heroui/react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 via-white to-gray-200 px-4">
      <Card className="w-full max-w-md p-10 shadow-2xl rounded-3xl text-center border border-gray-200">
        {/* Animated 404 */}
        <h1 className="text-7xl font-extrabold text-green-500 animate-bounce">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-2 text-sm leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back to a safe place 🐄
        </p>

        {/* Decorative dots */}
        <div className="flex justify-center gap-2 my-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-150"></span>
          <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse delay-300"></span>
        </div>

        {/* Button */}
        <Link href="/">
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl py-3">
            Back to Home
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default NotFound;

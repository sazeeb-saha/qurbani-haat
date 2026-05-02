"use client";
import { Button, Card, Input } from "@heroui/react";

const BookingFrom = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <Card className="w-full max-w-5xl px-5 py-5 md:px-15 md:py-10 lg:px-50 lg:py-15 shadow-2xl mt-20 rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-6">Booking Form</h2>

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
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <Input
            required
            name="number"
            type="number"
            placeholder="Enter Your Number"
            variant="bordered"
            radius="lg"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <Input
            required
            name="address"
            type="text"
            placeholder="Your Address"
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
      </form>
    </Card>
  );
};

export default BookingFrom;

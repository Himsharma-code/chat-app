import React from "react";

import { Input, Button } from "@nextui-org/react";

const Signup = () => {
  return (
    <form className="flex flex-col gap-4 ">
      <Input
        isRequired
        label="Username"
        placeholder="Enter your username"
        type="text"
      />
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
      />
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
      <Input
        isRequired
        label="Confirm Password"
        placeholder="Confirm your password"
        type="password"
      />
      <Input
        id="example2"
        type="file"
        className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-primary-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
      />

      <p className="text-center text-small">
        Already have an account?{" "}
        {/* <Link size="sm" onPress={() => setSelected("login")}>
          Login
        </Link> */}
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary">
          Sign up
        </Button>
        <Button fullWidth color="primary">
          Get Guest User Credentials
        </Button>
      </div>
    </form>
  );
};

export default Signup;

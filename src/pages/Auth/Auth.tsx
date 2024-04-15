import { useRouter } from "next/navigation";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function Auth() {
  const router = useRouter();
  const [selected, setSelected] = useState("login");

  return (
    <div className="flex justify-center w-full text-center">
      <Card className="w-full max-w-[500px]">
        <CardBody className=" text-center">
          <h1 className=" font-bold  uppercase">Chats Sphere</h1>
        </CardBody>
        <CardBody>
          <Tabs
            fullWidth
            aria-label="Tabs form"
            size="md"
            selectedKey={selected}
            onSelectionChange={(val) => setSelected(val as string)}
          >
            <Tab key="login" title="Login">
              <Login />
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <Signup />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

export default Auth;

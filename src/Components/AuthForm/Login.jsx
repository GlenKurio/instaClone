import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { loading, login } = useLogin();
  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        fontSize={14}
        type="password"
        size={"sm"}
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <Button
        onClick={() => login(inputs)}
        w={"full"}
        isLoading={loading}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
      >
        Log in
      </Button>
    </>
  );
}

export default Login;

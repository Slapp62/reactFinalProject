"use client";

import { Button, Checkbox, FloatingLabel, HelperText, Label, Modal, ModalBody, ModalHeader, } from "flowbite-react";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

type Props = {
    show: boolean;
    onClose: () => void;
    };

export function Login({ show, onClose }: Props) {

  

  const getLoginToken = async (email:string, password:string) => {
    try {
      const response = await axios.post("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
        {
          email, 
          password
        });
      localStorage.setItem("token", response.data);
      console.log("Login Success");
    } catch (error) {
      console.error("Wrong credentials", error)
     
    };
  };

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  
  const [isActive, setActive] = useState({
    email: false,
    password: false
  })

  const [loginError, setLoginError] = useState({
    email: "",
    password: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const runValidation = (e:ChangeEvent<HTMLInputElement>) => {
      const newLoginData = { ...loginData, [e.target.id]:e.target.value};
      setLoginData(newLoginData);
      errorValidation(newLoginData);
  }

  const errorValidation = (loginData: {email:string; password:string}) => {
    const errorMessage = {
      email: "",
      password: ""
    }

    if (!loginData.email.includes("@")){
      errorMessage.email = "Email must include '@'. "
    }

    if (loginData.password.length < 6){
      errorMessage.password = 'Password must be a minimum of 6 characters.'
    }
    
    setLoginError(errorMessage);

    const isErrors = errorMessage.email !== '' || errorMessage.password !== '';
    setIsDisabled(isErrors);
  }

  return (
    <>
      <Modal show={show} size="md" onClose={onClose} popup>
        <ModalHeader />
        <ModalBody>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            
            {/* Email Input */}
            <div>
              <FloatingLabel 
                id="email"
                label={"Email"} 
                variant={"outlined"}
                onInput={runValidation}
                onFocus={() => setActive({...isActive, email:true})}
                />
              
              <HelperText>
                {isActive.email && loginError.email}
              </HelperText>
            </div>

            {/* Password Input */}
            <div>
              <FloatingLabel 
                id="password"
                label={"Password"} 
                variant={"outlined"}
                onInput={runValidation}
                onFocus={() => setActive({...isActive, password:true})}
                required
                />

              <HelperText>
                {isActive.password && loginError.password}
              </HelperText>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Forgot Password?
              </a>
            </div>
            <div className="w-full">
                <Button disabled={isDisabled} onClick={() => {getLoginToken(loginData.email, loginData.password);}}>
                Log in to your account
                </Button>
                <HelperText>
                    
                </HelperText>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <Link to="/register" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </Link>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

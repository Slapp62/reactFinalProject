import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { BsFillEmojiTearFill } from "react-icons/bs";


const Error404 = () => {
    const nav = useNavigate();
    
    const goHome = () => {
        nav("/");
    };

    return (
        <div className="flex flex-col justify-center gap-4 items-center m-auto p-2">
            <BsFillEmojiTearFill size={100}/>
            <h1 className="text-3xl font-bold">404: Page Not Found</h1>
            <Button onClick={goHome}>Return to Homepage</Button>
        </div>
    );
};

export default Error404;
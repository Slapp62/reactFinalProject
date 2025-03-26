import { Button } from "flowbite-react";
import { useState } from 'react';

const Square = (props: {size: number, color: string}) => {
    const [square, setSquare] = useState({
        height: props.size,
        width: props.size, 
        color: props.color
    });


    return (
        <>
            <div className="flex w-1/4 flex-col gap-2 p-2">
                <div  
                    className="m-auto text-center"
                    style={{width: square.width, height: square.height, backgroundColor: square.color}}
                >Size: {square.height}px</div>

                <Button 
                    onClick={() => setSquare((prev) => { 
                        return {
                            ...prev,
                            height: prev.height + 5,
                            width: prev.width + 5,
                        }
                    })
                }> +5 </Button>

                <Button
                    onClick={() => setSquare((prev) => { 
                        return {
                            ...prev,
                            height: prev.height - 5,
                            width: prev.width - 5,
                        }
                    })
                }> -5 </Button>  

                <Button
                    onClick={() => setSquare((prev) => { 
                        if (prev.height % 2 === 0) {
                            return {
                                ...prev,
                                color: 'red'
                            }
                        } else {
                            return {
                                ...prev,
                                color: 'blue'
                            }
                        }
                    })
                }> Check Size </Button>     
            </div>
            
        </>
        
    )
}

export default Square
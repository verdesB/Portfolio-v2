"use client"

import {Label} from "@/app/components/ui/Label";
import {Input} from "@/app/components/ui/Input";
import {Textarea} from "@/app/components/ui/TextArea";
import React, {useState} from "react";
import {Button} from "@/app/components/ui/Button";
import {OctagonX} from "lucide-react";
import {useToast} from "@/app/components/ui/useToast";

interface IData {
    name: string;
    surname: string;
    email: string;
    message: string;
}
interface IErrors {
    name?: string;
    surname?: string;
    email?: string;
    message?: string;
}

export default function ContactForm() {
    const { toast } = useToast()
    const [data, setData] = useState<IData>({
        name: '',
        surname: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<IErrors>({});
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        setData({
            ...data,
            [field]: event.target.value
        });
    };
    const validate = () => {
        let tempErrors: any = {};
        tempErrors.name = data.name ? "" : "This field is required.";
        tempErrors.surname = data.surname ? "" : "This field is required.";
        tempErrors.email = data.email && (/^$|.+@.+..+/).test(data.email) ? "" : "Email is not valid.";
        tempErrors.message = data.message ? "" : "This field is required.";
        setErrors({
            ...tempErrors
        });

        return Object.values(tempErrors).every(x => x === "");
    }
    async function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (validate()) {
            const response = await fetch('https://www.bennydev.fr/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(data),
            });
            if(response) {
                toast({title: 'Message successfully sent!', description: ''});
            }
            const dataRes = await response.json();


            if (dataRes.error) {
                console.error(dataRes.error);
            } else {
                console.log(dataRes);
            }
        }
    }
    return(

        <form className='contact__form' onSubmit={handleSubmit}>
            <div className='contact__boxInput'>
                <Label className="contact__label">Name:</Label>
                <Input className="contact__input" onChange={(event) => handleInputChange(event, 'name')}></Input>
                <div className='contact__boxErrors'>
                    {errors.name &&
                        <>
                            <OctagonX style={{color: "red", height: '0.8rem', width: '0.8rem'}}/>
                            <p style={{fontSize: '0.7rem'}}>{errors.name}</p>
                        </>
                    }
                </div>
            </div>
            <div className='contact__boxInput'>
                <Label className="contact__label">Surname:</Label>
                <Input className="contact__input" onChange={(event) => handleInputChange(event, 'surname')}></Input>
                <div className='contact__boxErrors'>
                    {errors.surname &&
                        <>
                            <OctagonX style={{color: "red", height: '0.8rem', width: '0.8rem'}}/>
                            <p style={{fontSize: '0.7rem'}}>{errors.surname}</p>
                        </>
                    }
                </div>
            </div>
            <div className='contact__boxInput'>
                <Label className="contact__label">Email:</Label>
                <Input className="contact__input" onChange={(event) => handleInputChange(event, 'email')}></Input>

                <div className='contact__boxErrors'>
                    {errors.email &&
                            <>
                        <OctagonX style={{color: "red", height: '0.8rem', width: '0.8rem'}}/>
                        <p style={{fontSize: '0.7rem'}}>{errors.email}</p>
                            </>
                        }
                    </div>

            </div>
            <div className='contact__boxTextArea'>
                <Label className="contact__label">Message:</Label>
                <Textarea style={{height: '300px'}}
                          onChange={(event) => handleInputChange(event, 'message')}></Textarea>
                <div className='contact__boxErrors' >
                    {errors.message &&
                        <>
                            <OctagonX style={{color: "red", height: '0.8rem', width: '0.8rem'}}/>
                            <p style={{fontSize: '0.7rem'}}>{errors.message}</p>
                        </>
                    }
                </div>

            </div>
            <div className="contact__boxSubmit">


            <Button className="contact__submit" variant={"outline"} type='submit'>Envoyer</Button>
            </div>
        </form>
    )
}
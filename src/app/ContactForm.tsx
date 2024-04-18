"use client"

import {Label} from "@/app/components/ui/Label";
import {Input} from "@/app/components/ui/Input";
import {Textarea} from "@/app/components/ui/TextArea";
import {useState} from "react";
import {Button} from "@/app/components/ui/Button";

export default function ContactForm() {
    const [data, setData] = useState({
        name: '',
        surname: '',
        email: '',
        message: ''
    });
    const handleInputChange = (event, field) => {
        setData({
            ...data,
            [field]: event.target.value
        });
    };
    async function handleSubmit(event) {
        event.preventDefault();

        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const dataRes = await response.json();

        if (dataRes.error) {
            console.error(dataRes.error);
        } else {
            console.log(dataRes);
        }
    }
    return(
        <form onSubmit={handleSubmit}>
        <Label className="contact__label">Name:</Label>
        <Input onChange={(event) => handleInputChange(event, 'name')}></Input>
        <Label className="contact__label">Surname:</Label>
        <Input onChange={(event) => handleInputChange(event, 'surname')}></Input>
        <Label className="contact__label">Email:</Label>
        <Input onChange={(event) => handleInputChange(event, 'email')}></Input>
        <Label className="contact__label">Message:</Label>
        <Textarea onChange={(event) => handleInputChange(event, 'message')}></Textarea>
            <Button type='submit'></Button>
        </form>
    )
}
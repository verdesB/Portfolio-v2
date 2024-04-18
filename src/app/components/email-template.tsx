import * as React from 'react';
import {Separator} from "@/app/components/ui/Separator";

interface EmailTemplateProps {
    name: string;
    surname: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
                                                                          name,
                                                                          surname,
                                                                          email,
                                                                          message,
                                                                      }) => (
    <div style={{padding: '0.2rem'}}>
        <h1>Hi, Benjamin! 👋🚀</h1>
        <p>You have a new Message 📧 from {name} {surname} via Porfolio</p>
        {/*<Separator/>*/}
        <div style={{backgroundColor: '#6A6A6A', borderRadius: '0.5rem', padding: '1rem'}}>
            <h4 style={{color: '#F5F5F5'}}>👤Le contact: </h4>
            <div style={{backgroundColor: '#bdbdbd', borderRadius: '0.5rem', padding: '0.4rem'}}>
                <p style={{color: '#F5F5F5'}}>{email}</p>
                <p style={{color: '#F5F5F5'}}>{name}</p>
                <p style={{color: '#F5F5F5'}}>{surname}</p>
            </div>
            <div style={{height: '1px', width: '80%', margin: ' 1rem auto', border: '1px solid gray', backgroundColor: 'gray'}}></div>
            <h4 style={{color: '#F5F5F5'}}>👀 Contenu de son message: </h4>
            <div style={{backgroundColor: '#bdbdbd', borderRadius: '0.5rem', padding: '0.4rem'}}>
                <p style={{color: '#F5F5F5'}}>{message}</p>
            </div>
        </div>

        </div>
        );

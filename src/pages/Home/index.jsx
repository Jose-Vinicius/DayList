import React from 'react';
import { GoogleAuthProvider } from 'firebase/auth';

import './style.scss'

import Button from '../../components/Button';

const provider = new GoogleAuthProvider();

export default function Home(){
    return(
        <section>
            <h1 className="logo">DayList</h1>
            <div className="button__group">
                <Button link="cadastro" title="cadastrar-se"/>
                <Button link="entrar" title="Entrar"/>
                <hr />
                <Button link="" title="Entrar com o google" class="button--google" />
            </div>
        </section>
        
    )
};
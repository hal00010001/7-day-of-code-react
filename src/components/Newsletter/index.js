import React from 'react';

import './styles.css'

export function Newsletter(){
    return (
        <form action="">
            <input type="email" name="email" id="email" placeholder="             Insira seu e-mail" value="" />
            <input type="submit" value="Assinar newsletter" />
        </form>
    )
}
import React from 'react';
import { HeaderContainer } from "../styles/HeaderContainer";
import { MainMenu } from "./MainMenu";

export const Header = () => (
    <HeaderContainer>
        <h1>My movies</h1>

        <MainMenu />
    </HeaderContainer>
);
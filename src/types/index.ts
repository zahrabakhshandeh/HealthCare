import {ButtonHTMLAttributes, FunctionComponent, InputHTMLAttributes} from "react";

export interface QuickLinkBoxTypes {
    subject:String, 
    bodyText:String, 
    badgeLogo?:FunctionComponent|any,
    badgeColor?: String,
}

export interface MessageType{
    type: String,
    text: String
}

export interface ProfileType{
    avatar?: string|any,
    userName: string
}

export interface sideBarElementType{
    text: string, 
    logo?:FunctionComponent|any,
    link?: string 
}
  
export type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
value: string;
className?: string;
iconSrc?: FunctionComponent;
};

export type TInput = InputHTMLAttributes<HTMLDivElement> & {
register?: any;
className?: string;
firsticonsrc?: FunctionComponent;
};

export interface ButtonPropsTypes {
variant?: "google" | "apple";
title:string
}

export type SignUpDataType = {
userID: string;
username: string;
password: string;
passwordCheck: string;
email: string;
};

export type LoginDataType = {
username: string;
password: string;
};
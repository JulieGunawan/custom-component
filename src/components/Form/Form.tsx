import React, { FC, ReactNode } from "react";

interface Props {
    children: ReactNode | ReactNode[]
}

const Form:FC<Props> = ({children}) => {
    return (
        <form>{children}</form>
    )
}

export default Form;
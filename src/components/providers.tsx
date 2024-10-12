import React from "react";

import { ThemeProvider } from "next-themes";

type Props = {
    children: React.ReactNode;
};

export const Providers = (props: Props) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
        >
            {props.children}
        </ThemeProvider>
    );
};

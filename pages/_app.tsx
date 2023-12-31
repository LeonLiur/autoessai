import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app';
import { extendTheme } from '@chakra-ui/react'
import React from 'react';

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}
export const theme = extendTheme({ colors })


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp;
import { Box } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'


export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head />
            <Box as={'body'}  css={{
            '&::-webkit-scrollbar':{
            width: '6px',
            },
            '&::-webkit-scrollbar-track': {
            width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
            background:'gray',
            borderRadius: '24px',
            }
            }}>
            <Main />
            <NextScript />
        </Box>
      </Html>
    )
  }
}
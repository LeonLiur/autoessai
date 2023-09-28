import { Box, Button, Center, Input, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import React from 'react'

export default function HomePage() {
    const [prompt, setPrompt] = useState('#$%&')
    const [wordCount, setWordCount] = useState(0)
    const [instruction, setInstruction] = useState('')

    const submit = async () => {
        const response = await fetch('/api/writeEssay', {
          method: 'POST', // or 'GET', 'PUT', etc.
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            /* your data goes here */
          }),
        })
        
        const data = await response.json()
        console.log(data)
      }


    return (
        <>
            <Center>
                <Stack spacing={3}>
                    <Input
                        placeholder='prompt'
                        onChange={(e) => setPrompt(e.currentTarget.value)} />
                    <Input
                        placeholder='word count'
                        onChange={(e) => setWordCount(parseInt(e.currentTarget.value))} />
                    <Input
                        placeholder='instruction' 
                        onChange={(e) => setInstruction(e.currentTarget.value)} />
                    <Button onClick={submit}>go</Button>
                </Stack>
            </Center>
        </>
    )
}

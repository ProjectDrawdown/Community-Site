import React from "react";
import { Button } from "@chakra-ui/react"


export default function BackButton () {
    return (
      <Link href="/">
        <Button background="#ffffff">
          <Text fontSize="14px">{'<<'} Back to Home </Text>
        </Button>
      </Link>
    )
}

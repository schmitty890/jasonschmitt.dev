import React, { Component } from "react"
import { ChakraProvider, Box } from "@chakra-ui/react"
import { UserProvider, UserConsumer } from "../contexts/UserContext"
import { SecondProvider, SecondConsumer } from "../contexts/SecondContext"
import TestHolder from "../components/testHolder/testHolder"
import Header from "../components/header/header"

export default function Home() {
  return (
    <ChakraProvider>
      <UserProvider>
        <SecondProvider>
          <Header />
          <Box bg="" w="100%" p={4} color="green">
            <div>Hello world!</div>
            <TestHolder />
          </Box>
        </SecondProvider>
      </UserProvider>
    </ChakraProvider>
  )
}

// class Home extends Component {

//   render() {
//     return (
//       <ChakraProvider>
//         <UserProvider>
//             <Box bg="" w="100%" p={4} color="green">
//               <div>Hello world!</div>
//               <TestHolder />
//             </Box>
//         </UserProvider>
//       </ChakraProvider>
//     )
//   }
// }
// export default Home

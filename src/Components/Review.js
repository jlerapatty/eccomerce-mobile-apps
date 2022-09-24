import React, { useState } from 'react'
import { Box, Button, CheckIcon, FormControl, Heading, Select, Text, TextArea, VStack } from 'native-base'
import Colors from '../color'
import Rating from './Rating'
import Message from './Notifications/Message'
import Buttone from './Buttone'


export default function Review() {
  const [ratings, setRatings] = useState("")
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* IF THERE IS NO REVIEW */}
      <Message
       color={Colors.main}
       bg={Colors.deepGray}
       bold
       children={"NO REVIEW"}
       />
      {/* REVIEW */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
            User
        </Heading>
        <Rating value={4} />
        <Text mb={3}>Jan 10 2022</Text>
        <Message 
        color={Colors.black} 
        bg={Colors.white} 
        size={12} 
        children={"aku suka ini produknya bagus bener kaya keren gitu kualitas bahan juga bagus pokoknya mantap nanti langganan hehehe"} />
      </Box>
      {/* WRITE REVIEW */}
      <Box mt={6}>
        {/* <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading> */}
        <VStack space={6}>
          {/* <FormControl>
            <FormControl.Label
             _text={{
              fontSize: "12px",
              fontWeight: "bold",
             }}
             >
              Rating
             </FormControl.Label>
             <Select 
              bg={Colors.subGreen} 
              borderWidth={0} 
              rounded={5} 
              py={3} 
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
              >
                <Select.Item label="1 - Poar" value="1" />
                <Select.Item label="2 - Fair" value="2" />
                <Select.Item label="3 - Good" value="3" />
              </Select>
          </FormControl> */}
          <FormControl>
            {/* <FormControl.Label
             _text={{
              fontSize: "12px",
              fontWeight: "bold",
             }}
             >
              Comment
             </FormControl.Label> */}
             {/* <TextArea
             h={24}
             w="full"
             placeholder="This is product is so nice ....."
             borderWidth={0}
             bg={Colors.subGreen}
             py={4}
             _focus={{
              bg: Colors.subGreen,
             }}
             /> */}
          </FormControl>
          {/* <Buttone bg={Colors.main} color={Colors.white}>
            SUBMIT
          </Buttone> */}
          {/* IF NOT LOGIN */}
          {/* <Message 
        color={Colors.white} 
        bg={Colors.black} 
        size={12} 
        children={
          "Please 'Login' to write a review"} 
          /> */}
        </VStack>
      </Box>
    </Box>
  )
}
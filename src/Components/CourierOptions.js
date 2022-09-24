import { useNavigation } from '@react-navigation/native'
import { Button, Center, HStack, Modal, Text, VStack, Box, Radio } from 'native-base'
import React, { useState } from 'react'
import Colors from '../color'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



const CourierOptions = () => {
  const [showModal, setShowModal] = useState(false);
  return ( 
      <Box>
        <Text bold fontSize={14} mb={2}>Pengiriman</Text>
          <Entypo name="location-pin" size={15} color="black"><Text fontSize={13} ml={2} >Dikirim dari jakarta</Text></Entypo>
          <FontAwesome name="truck" size={15} color="black"><Text fontSize={13} ml={2}>Ongkir Reguler 24k - 30k</Text></FontAwesome>
          <Text fontSize={13} ml={6} color="grey">Estimasi tiba 11 - 14 November</Text>
          <HStack justifyContent="space-between">
          <Text fontSize={13} ml={6}>Kurir Lainnya : Instan</Text>
          <Text onPress={() => setShowModal(true)}
          fontSize={12} fontWeight="medium" color="darkBlue.600" justifyContent="flex-end"
          >Lihat Pilihan Kurir</Text>
          </HStack>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} _backdrop={{
      _dark: {
        bg: "coolGray.800"
      },
      bg: "warmGray.50"
    }}>
        <Modal.Content maxWidth="350" maxH="212">
          <Modal.CloseButton />
          <Modal.Header>Pilih Kurir</Modal.Header>
          <Modal.Body>
           <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number">
             <Radio value="1" my={1}>
             JNE
             </Radio>
             <Radio value="2" my={1}>
             JNT
             </Radio>
             <Radio value="3" my={1}>
             Ninja Express
            </Radio>
           </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setShowModal(false);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  )
}

export default CourierOptions
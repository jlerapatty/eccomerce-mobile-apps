import { Center, Heading, Image, Text } from 'native-base';
import React from 'react'
import Colors from '../color';
import Tabs from '../Profile/Tabs';

function ProfileScreen() {
  return (
    <>
     <Center bg={Colors.main} pt={10} pb={6}>
      <Image
      source={{ uri: "https://w7.pngwing.com/pngs/348/769/png-transparent-computer-icons-user-profile-material-design-profile-monochrome-black-account-thumbnail.png"}}
      alt="profile"
      w={24}
      h={24}
      resizeMode="cover"
      />
      <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
        Admin Doe
      </Heading>
      <Text italic fontSize={10} color={Colors.white}>
        Joined Dec 12 2023
      </Text>
     </Center>
     {/* TABS */}
     <Tabs />
    </>
  )
}

export default ProfileScreen;
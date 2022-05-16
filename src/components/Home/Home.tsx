import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Image,
  Link as ChakraLink,
  List,
  ListItem,
  ListIcon,
  Input,
  Avatar,
  Text,
  IconButton,
  Heading,
  Icon,
  Button,
} from "@chakra-ui/react";
import logo from "../../assets/images/icon.png";
import {
  IoCalendarOutline,
  IoDocumentOutline,
  IoHomeOutline,
  IoNotificationsOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSettingsOutline,
  IoTimerOutline,
} from "react-icons/io5";
import "./Home.css";

interface dashboard {
  title: string;
  icon: any;
  amount: string;
  bg: string;
  link: string;
}

const dashboardLinks: dashboard[] = [
  {
    title: "No of Prospects",
    amount: "200",
    bg: "first",
    link: "",
    icon: IoPersonOutline,
  },
  {
    title: "No of Converted Prospects",
    amount: "700",
    bg: "second",
    link: "",
    icon: IoPeopleOutline,
  },
  {
    title: "Days worked in the month",
    amount: "3000",
    bg: "third",
    link: "",
    icon: IoCalendarOutline,
  },
  {
    title: "Pending Prospects",
    amount: "1000",
    bg: "fourth",
    link: "",
    icon: IoTimerOutline,
  },
];

const Home: React.FC = () => {
  return (
    <div className="home">
      <Grid h="100vh" templateColumns="repeat(8, 1fr)">
        <GridItem colSpan={2}>
          <Box d="flex" justifyContent="center">
            <Image src={logo} alt="logo" width={150} />
          </Box>
          <Box
            d="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            mt={7}
            p={2}
          >
            <Box>
              <List
                d="flex"
                mb={6}
                flexDir="row"
                as={ChakraLink}
                alignItems="center"
                _hover={{ textDecoration: "none", background: "gray.50" }}
                padding={3}
              >
                <ListIcon w={6} mr={4} h={6} as={IoHomeOutline} />
                <ListItem fontWeight="600" fontSize="1.1rem">
                  Dashboard
                </ListItem>
              </List>
              <List
                d="flex"
                mb={6}
                flexDir="row"
                as={ChakraLink}
                _hover={{ textDecoration: "none", background: "gray.50" }}
                padding={3}
                alignItems="center"
              >
                <ListIcon w={6} mr={4} h={6} as={IoDocumentOutline} />
                <ListItem fontWeight="600" fontSize="1.1rem">
                  Draft
                </ListItem>
              </List>
              <List
                d="flex"
                mb={6}
                flexDir="row"
                as={ChakraLink}
                _hover={{ textDecoration: "none", background: "gray.50" }}
                padding={3}
                alignItems="center"
              >
                <ListIcon w={6} mr={4} h={6} as={IoPersonOutline} />
                <ListItem fontWeight="600" fontSize="1.1rem">
                  Profile
                </ListItem>
              </List>
              <List
                d="flex"
                mb={6}
                flexDir="row"
                as={ChakraLink}
                _hover={{ textDecoration: "none", background: "gray.50" }}
                padding={3}
                alignItems="center"
              >
                <ListIcon w={6} mr={4} h={6} as={IoSettingsOutline} />
                <ListItem fontWeight="600" fontSize="1.1rem">
                  Settings
                </ListItem>
              </List>
            </Box>
            <Box>
              <Button variant="solid" colorScheme="touch">
                Add Prospects
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={6} bg="#F9FCFC">
          <Box
            bg="#fff"
            p={3}
            d="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box d="flex" alignItems="center" justifyContent="space-between">
              <Input width="250px" border="0px" placeholder="Search" />
            </Box>
            <Box>
              <Box d="flex" flexDir="row" alignItems="center">
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <Text ml={3} fontWeight="bold">
                  Jessica Joe
                </Text>
              </Box>
            </Box>
            <Box>
              <IconButton
                variant="solid"
                aria-label="Notification"
                icon={<IoNotificationsOutline />}
                fontSize="2rem"
              />
            </Box>
          </Box>

          <Box>
            <Heading mt={6} fontSize="1.5rem" ml={6}>
              Dashboard
            </Heading>

            <Box mt={7} p={5}>
              <Grid templateColumns="repeat(4, 1fr)" gap={7}>
                {dashboardLinks.map((dashboard, idx) => (
                  <GridItem key={idx}>
                    <Box
                      p={3}
                      borderRadius="5px"
                      height="120px"
                      className={dashboard.bg}
                    >
                      <Box display="flex" alignItems="center">
                        <Box width="30%">
                          <Icon
                            as={dashboard.icon}
                            color="white"
                            fontSize="2rem"
                          />
                        </Box>
                        <Box height="100px">
                          <Box height="30%">
                            <Text
                              color="white"
                              fontWeight="bold"
                              fontSize=".9rem"
                            >
                              {dashboard.title}
                            </Text>
                          </Box>
                          <Heading color="white" mt="1.5rem" fontWeight="bold">
                            {" "}
                            {dashboard.amount}{" "}
                          </Heading>
                        </Box>
                      </Box>
                    </Box>
                  </GridItem>
                ))}
              </Grid>

              <Box></Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Home;

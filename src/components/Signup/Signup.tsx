import React from "react";
import {
  Box,
  Container,
  Grid,
  Image,
  Text,
  GridItem,
  Flex,
  Heading,
  Button,
  Link as ChakraLink,
  Input,
  FormControl,
} from "@chakra-ui/react";
import Logo from "../../assets/images/LogoWhite.png";
import { BsArrowRight } from "react-icons/bs";
import { Form, Formik } from "formik";

import "./Signup.css";

const Signup: React.FC = () => {
  return (
    <div className="signup">
      <Grid h="100vh" templateColumns="repeat(7, 1fr)">
        <GridItem colSpan={4} bg="#F9FCFC">
          <Flex alignItems="center" height="100vh" justifyContent="center">
            <Box width="400px">
              <Heading color="#303952">Signup.</Heading>
              <Text mt="3">Manage your performance the easiest way. </Text>

              <Box mt={1}>
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    mobile: "",
                    userName: "",
                    email: "",
                    password: "",
                  }}
                  onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    setTimeout(() => {
                      console.log(data);
                    }, 3000);
                    setSubmitting(false);
                  }}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    isSubmitting,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                        <GridItem colSpan={1}>
                          <FormControl id="firstName" mt={10}>
                            <Input
                              bg="#fff"
                              type="text"
                              placeholder="First Name"
                              name="firstName"
                              size="lg"
                              id="firstName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </FormControl>
                        </GridItem>
                        <GridItem>
                          <FormControl id="lastName" mt={10}>
                            <Input
                              bg="#fff"
                              type="text"
                              placeholder="Last Name"
                              name="lastName"
                              size="lg"
                              id="lastName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </FormControl>
                        </GridItem>
                      </Grid>

                      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                        <GridItem colSpan={1}>
                          <FormControl id="mobile" mt={10}>
                            <Input
                              bg="#fff"
                              type="text"
                              placeholder="Mobile"
                              name="mobile"
                              size="lg"
                              id="mobile"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </FormControl>
                        </GridItem>
                        <GridItem>
                          <FormControl id="userName" mt={10}>
                            <Input
                              bg="#fff"
                              type="text"
                              placeholder="Username"
                              name="userName"
                              size="lg"
                              id="userName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </FormControl>
                        </GridItem>
                      </Grid>

                      <FormControl id="email" mt={10}>
                        <Input
                          bg="#fff"
                          type="text"
                          placeholder="Email Address"
                          name="email"
                          size="lg"
                          id="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </FormControl>

                      <FormControl id="password" mt={10}>
                        <Input
                          bg="#fff"
                          type="password"
                          placeholder="Password"
                          name="password"
                          size="lg"
                          id="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </FormControl>

                      <Box
                        mt={7}
                        d="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Button
                          rightIcon={<BsArrowRight />}
                          size="md"
                          isDisabled={!isSubmitting}
                          type="submit"
                          colorScheme="primary"
                        >
                          Signup
                        </Button>

                        <Box>
                          <Box>
                            <Text fontSize="15px">
                              Already have an Account?
                              <ChakraLink
                                color="#546DE5"
                                _hover={{ textDecoration: "underline" }}
                                href="/login"
                              >
                                {" "}
                                Login
                              </ChakraLink>
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Box>
          </Flex>
        </GridItem>
        <GridItem colSpan={3} className="side-two">
          <Box mt="2rem" display="grid" placeItems="center">
            <Image src={Logo} width={150} alt="logo" />
          </Box>
          <Container>
            <Box mt="11rem" p={3} color="#fff" ml="2rem">
              <Text fontSize="3xl" textAlign="left" fontWeight="600">
                Manage your Performance.
              </Text>
              <Text
                fontSize="13px"
                mt="4"
                textAlign="left"
                fontWeight="400"
                lineHeight="1.8"
                color="gray.300"
              >
                improving performance by setting individual and team goals which
                are aligned to the strategic goals of the organisation, planning
                performance to achieve the goals.
              </Text>
            </Box>
          </Container>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Signup;

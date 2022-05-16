import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Image,
  Text,
  Container,
  Flex,
  Heading,
  FormControl,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";
import Logo from "../../assets/images/LogoWhite.png";
// import loginImage from "../../assets/images/login-svg.svg";

import "./Login.css";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Login: React.FC = () => {
  return (
    <div className="login">
      <Grid h="100vh" templateColumns="repeat(7, 1fr)">
        <GridItem colSpan={3} className="side-one">
          <Box mt="2rem" display="grid" placeItems="center">
            <Image src={Logo} width={150} alt="logo" />
          </Box>
          <Container>
            <Box mt="11rem" p={3} color="#fff" ml="2rem">
              <Text fontSize="3xl" textAlign="left" fontWeight="600">
                Welcome Back.
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
        <GridItem colSpan={4} bg="#F9FCFC">
          <Flex alignItems="center" height="100vh" justifyContent="center">
            <Box width="400px">
              <Heading color="#303952">Login.</Heading>

              <Box mt={3}>
                <Formik
                  initialValues={{ userName: "", password: "" }}
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

                      <FormControl id="password" mt={8}>
                        <Input
                          bg="#fff"
                          type="password"
                          placeholder="Password"
                          name="password"
                          size="lg"
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
                        <Box>
                          <Text
                            fontSize="15px"
                            color="#546DE5"
                            _hover={{ textDecoration: "underline" }}
                          >
                            <Link to="/forgot-password">Forgot password</Link>
                          </Text>
                        </Box>
                        <Box>
                          <Button
                            rightIcon={<BsArrowRight />}
                            size="md"
                            isDisabled={!isSubmitting}
                            type="submit"
                            colorScheme="primary"
                          >
                            Sign in
                          </Button>
                        </Box>
                      </Box>
                    </Form>
                  )}
                </Formik>
              </Box>

              <Divider mt={10} />

              <Box
                mt={7}
                d="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Text fontSize="15px" color="#546DE5">
                    Need an Account?
                  </Text>
                </Box>
                <Box>
                  <Button
                    size="md"
                    href="/signup"
                    as="a"
                    colorScheme="touch"
                    variant="outline"
                  >
                    Sign up
                  </Button>
                </Box>
              </Box>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Login;

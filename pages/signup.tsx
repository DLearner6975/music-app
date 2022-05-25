import { Box, Flex } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AuthForm from '../components/authForm';

const SignUp = () => {
  return <AuthForm mode="signup" />;
};

SignUp.authPage = true;

export default SignUp;

import { Box, Flex } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AuthForm from '../components/authForm';

const SignIn = () => {
  return <AuthForm mode="signin" />;
};

SignIn.authPage = true;

export default SignIn;

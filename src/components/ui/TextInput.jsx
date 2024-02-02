/* eslint-disable */

import {Input} from '@chakra-ui/react';

export const TextInput = ({changeFn, ...props})=>(
    <Input backgroundColor="gray.200" onChange={changeFn} {...props}/>
);
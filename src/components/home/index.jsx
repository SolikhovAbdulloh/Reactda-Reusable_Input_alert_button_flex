import React from 'react'
import Button from '../ui/button'
import Input from '../ui/input'
import Flex from '../ui/flex';
import Alert from '../ui/alert';
import { info } from 'autoprefixer';

function Home() {
  return (
    <div className="flex  flex-col gap-4 justify-center items-center mt-[30vh]">
      <Button type="danger">Send</Button>

      <Input type="password" />

      <Flex  justify='center'  align='center'  gap='10px' margintop='10px'><h1 className='w-[100px] bg-pink-300'>Abdulloh</h1>
      <h1 className='bg-yellow-300'>Solihov</h1></Flex>

        <div className='mt-4'>

      <Alert type="info" massage="salom" />
        </div>
    </div>
  );
}

export default Home
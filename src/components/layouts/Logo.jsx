import Image from 'next/image'; 
import Link from 'next/link'; 
import React from 'react';
 const Logo = () => { return ( 
 <Link href={"/"} className='flex items-center gap-1'>

     <Image alt='logo-beauty-mart' src={"/assets/logo1.png"} width={50} height={40} >
      </Image> 
      <h2 className='text-xl font-bold'>Beauty<span className='text-primary'>Mart</span>
      {""}
      </h2> 
      </Link> 

      ); 
      };

       export default Logo;
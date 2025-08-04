import React from 'react'
import image from '../assets/health.jpg'
import ButtonComponent from './ButtonComponent'
const AboutComponent = () => {
  return (
    <div className='flex  flex-col mt-16 '>
        <div className='flex flex-col md:flex-row justify-between md:gap-12 gap-4  items-center bg-[var p-4 container'>
<div className='md:w-1/2 w-full flex  justify-center items-center'>
    <img src={image} alt="" className='h-full w-full object-cover boject-center' />
</div>
<article className='md:w-1/2 w-full flex-col flex items-center justify-center text-sm tracking-wide text-gray-700'><p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus doloribus dolores quaerat quas rem modi veniam animi magnam, architecto, harum ipsam error quo nostrum numquam sit? Ipsam fugiat maiores modi voluptatum maxime exercitationem rem magnam nihil itaque at quo nisi dolore, praesentium eligendi omnis voluptate recusandae voluptas inventore. Labore ducimus expedita ullam in voluptate distinctio, rerum omnis nihil quos nisi vero quam debitis. Et, dolorem placeat rem culpa nihil recusandae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima? Quidem, sequi! Expedita dolorem, iusto vero enim reprehenderit illo accusantium dicta ipsa ullam velit odit! Porro eos vero earum accusantium illum accusamus quibusdam repudiandae, autem et laboriosam velit, amet, voluptates commodi veritatis rem sapiente libero eveniet delectus error soluta facilis!</p>
    <ButtonComponent href="/about" className="bg-[var(--primary-yellow)] text-white hover:bg-primary-dark px-6 py-3 rounded-lg w-[150px] mt-4 mr-auto ">
        Read More</ButtonComponent>
    </article>
        </div>
    </div>
  )
}

export default AboutComponent
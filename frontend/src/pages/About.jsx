import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletterbox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>

            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={'US'} />
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nulla magnam velit quas voluptatibus quaerat dolore iure neque aut natus voluptates consectetur mollitia necessitatibus nam, qui suscipit, voluptatum a minus aliquid in harum officiis ea iste rerum! Id, dolorum voluptatem! Maxime eaque necessitatibus corporis alias, eligendi consequatur culpa in id!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatum sequi eveniet numquam, dolorum voluptatem nihil necessitatibus voluptas dignissimos vitae ducimus magnam assumenda officiis sed delectus deserunt deleniti ipsa perspiciatis nemo. Assumenda inventore neque eveniet dolorum nihil quod vero tempora sunt, reiciendis, veritatis nam magnam unde dignissimos pariatur minima esse.</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sequi cum beatae neque, qui rem consectetur vel accusantium praesentium a!</p>
                </div>
            </div>

            <div className='text-xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>

            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptates tenetur quasi deserunt sunt voluptatum dolorum labore facilis et harum.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero atque deserunt accusantium modi assumenda labore doloribus provident dolorem nulla?</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dignissimos? Molestias voluptates eos delectus iusto vel tempora inventore officia esse ad neque.</p>
                </div>
            </div>

            <Newsletterbox />

        </div>
    )
}

export default About
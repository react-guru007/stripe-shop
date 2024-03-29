import React from 'react'
import Image from 'next/image'
import mensTP from '../public/mens-tp.png'
import womensTP from '../public/womens-tp.png'
import jeweleryTP from '../public/jewelery-tp.png'
import electronicsTP from '../public/electronics-tp.png'
import { useRouter } from 'next/router'

export default function Categories() {
  const router = useRouter()
  
  return (
    <section className="w-full mt-10">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center sm:text-start sm:ml-12 ">
        Shop Our Top Categories
      </h1>
      <nav className="flex flex-wrap lg:flex-nowrap justify-between mt-8 gap-y-3">
        <div className="flex w-full justify-around ">
          <a
            className="flex  flex-col p-2 sm:h-72 w-40 sm:w-64 border rounded-lg bg-gradient-to-br from-[#e9a317] via-[#855b0f] to-[#e9a317] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500  justify-around items-center cursor-pointer"
            onClick={() => router.push('/mens')}
          >
            <p className="pb-2  text-white text-xl font-semibold">MENS</p>
            <Image
              src={mensTP}
              width={120}
              height={120}
              alt="category image"
              className="bg-transparent w-auto h-auto"
            />
          </a>
          <a
            className="flex flex-col p-2 sm:h-72 w-40 sm:w-64 border rounded-lg bg-gradient-to-br from-[#dc3259] via-[#7d1b32] to-[#e3325b] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500  justify-around items-center cursor-pointer"
            onClick={() => router.push('/womens')}
          >
            <p className="mt-2 text-white text-xl font-semibold">WOMENS</p>
            <Image
              src={womensTP}
              height={120}
              width={120}
              alt="category image"
              className="bg-transparent w-auto h-auto"
            />
          </a>
        </div>

        <div className="flex w-full justify-around">
          <a
            className="flex flex-col p-2 sm:h-72  w-40 sm:w-64 border rounded-lg bg-gradient-to-br from-[#15baa6] via-[#0c6e62] to-[#15baa6] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 justify-around items-center cursor-pointer"
            onClick={() => router.push('/jewelery')}
          >
            <p className="mt-2 text-white text-xl font-semibold">JEWERLY</p>
            <Image
              src={jeweleryTP}
              height={120}
              width={120}
              alt="category image"
              className="bg-transparent w-auto h-auto"
            />
          </a>
          <a
            className="flex flex-col p-2 sm:h-72  w-40 sm:w-64 border rounded-lg bg-gradient-to-br from-[#4611b8] via-[#250864] to-[#4611b8] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 justify-around items-center cursor-pointer"
            onClick={() => router.push('/electronics')}
          >
            <p className="mt-2 text-white text-xl font-semibold">ELECTRONICS</p>
            <Image
              src={electronicsTP}
              height={120}
              width={120}
              alt="category image"
              className="bg-transparent w-auto h-auto"
            />
          </a>
        </div>
      </nav>
    </section>
  )
}

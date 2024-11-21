import Image from "next/image";
import Link from "next/link";
import React from "react";


const data = [
    {
        img:'/images/team/img1.png',
        position:'CEO',
        description:'Anika Tabassum, web developer,  engineer and completed BSc in CSe from AIUB',
        linkedin:'https://www.linkedin.com/in/anika-tabassum-1b62541b1/'
    },
    {
      
        img:'/images/team/img2.png',
        position:'CTO',
        description:'Mustafizur Rahman, CSE engineer, Trainer & entrepreneur.Completed his BSc from IUBAT',
        linkedin:'https://www.linkedin.com/in/mustafizur-rahman-5995812a4/'
    },
    {
        img:'/images/team/img3.png',
        position:'COO',
        description:'Nazmus Sakib Khan, experience in Development Sector, Entrepreneur Completed his BA from JU.',
        linkedin:'https://www.linkedin.com/in/phoenixsakib/'
    }
]

const Team = () => {
    return (

        <div className="min-h-screen bg-black py-10 px-2">
            <div className=" container mx-auto ">
                {/* Hello Team */}
              <div className="flex flex-col gap-4">
              <div className=" text-5xl font-semibold font-serif text-yellow-400 text-center">
              Our Team
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-serif ">
  {data.map((dt, index) => (
    <div key={index} className="">
      <div className="bg-blue-00 flex justify-center rounded-full cursor-pointer">
        <Image
          src={dt.img}
          alt=""
          width={400}
          height={400}
          className="w-72 h-72 rounded-full object-cover border-8 border-yellow-400"
        />
      </div>
      <div className="">
        <div className="bg-yellow-400 px-2 py-2 flex flex-col justify-center items-center gap-4 rounded-md cursor-pointer">
          <div className="text-2xl font-semibold">{dt.position}</div>
          <Link href={dt.linkedin} target="_blank">
            <div className="text-lg font-medium text-center italic hover:underline">
              {dt.description}
            </div>
          </Link>
        </div>
      </div>
    </div>
  ))}
              </div>
              </div>

            </div>
        </div>
    )
}
export default Team
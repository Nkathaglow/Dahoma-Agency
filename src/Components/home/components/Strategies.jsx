import React from 'react'
import help from '../../../assets/help.png'
function Strategies() {
  return (

    <div className='container mx-auto rounded-[20px] p-10 bg-[#edf7ff]'>
      <div className='grid grid-cols-3 w-1/2 gap-4'>
        <div className=' font-semibold text-center capitalize text-[#f58a07] rounded-[31px] bg-white'>Branding strategy </div>
        <div className='font-semibold text-center capitalize text-[#063255]/30 rounded-[31px] border border-[#a8bccc]'> product Strategy{" "}</div>
        <div className='font-semibold text-center capitalize text-[#063255]/30 rounded-[31px] border border-[#a8bccc]'>   marketing Strategy</div>
      </div>

      <div className='grid grid-cols-2 mx-auto mt-10 gap-24'>
        <div className=' '>
          <p className='text-5xl font-semibold mb-4 text-left text-[#0d1317]'>  Helping startups with research and strategy for their business</p>
          <p className='text-lg font-medium text-left mt-10 text-[#5b5b5b]'><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit,
            hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.{" "}
          </span>
            <br /><br />
            <span> Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.{" "}</span>
          </p>
          <div className=" h-[17px] mt-4 item-start text-left ">
            <p className=" font-medium text-[#f58a07]">
              Learn More
            </p>
            <svg
              width={22}
              height={10}
              viewBox="0 0 22 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.6338 0.198869L21.8079 4.51989C22.064 4.78505 22.064 5.21495 21.8079 5.48011L17.6338 9.80113C17.3776 10.0663 16.9623 10.0663 16.7062 9.80113C16.45 9.53597 16.45 9.10606 16.7062 8.8409L19.7606 5.67898L0 5.67898L0 4.32102L19.7606 4.32102L16.7062 1.1591C16.45 0.893936 16.45 0.464029 16.7062 0.198869C16.9623 -0.0662898 17.3776 -0.0662898 17.6338 0.198869Z"
                fill="#F58A07"
              />
            </svg>
          </div>
        </div>
        <div className='justify-content-end'>
          <img className='w-[472px] h-[466px] ' src={help} />
        </div>
      </div>


    </div>

  )
}

export default Strategies
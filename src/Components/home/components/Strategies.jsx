import React from 'react'
import help from '../../../assets/help.png'
function Strategies() {
  return (

    <div className='container rounded-[20px] py-10 mx-auto bg-[#edf7ff] text-left grid grid-cols-2'>
      <div className='my-auto'>
        <div className='text-left grid grid-cols-3 mx-auto'>
          <div className=' h-[40px] w-[194px]  rounded-[31px] bg-white'>
            <p className=' font-semibold text-center  capitalize text-[#f58a07] '>Branding strategy</p>
          </div>
          <div className=' h-[40px] w-[194px]  rounded-[31px] border border-[#a8bccc]'>
            <p className=' font-semibold text-left capitalize text-[#063255]/30 '>product Strategy{" "}</p>
          </div>
          <div className='  h-[40px] w-[194px]  rounded-[31px] border border-[#a8bccc]'>
            <p className=' font-semibold text-left capitalize text-[#063255]/30 '> marketing Strategy</p>
          </div>
        </div>
        <div>
          <p className='text-5xl font-semibold text-left text-[#0d1317]'>  Helping startups with research and strategy for their business</p>
          <p className='text-lg font-medium text-left text-[#5b5b5b]'>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit,
              hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.{" "}
            </span>
            <br />
            <br />
            <span className="w-[510px] text-lg font-medium text-left text-[#5b5b5b]">
              Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.{" "}
            </span>
          </p>
        </div>

      </div>

      <div>
        <img className="w-[472px] h-[466px]" src={help} />
      </div>
    </div>

  )
}

export default Strategies
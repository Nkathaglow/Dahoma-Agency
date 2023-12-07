import * as React from "react";

function Numbers(props) {
  return (
    <div className="flex w-full max-w-[1338px] flex-col px-5 max-md:max-w-full">
      <div className="self-stretch mt-28 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10">
              <div className="text-slate-800 text-6xl font-semibold leading-[72px] tracking-tighter self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                We prioritize operational intelligence above artificial
                intelligence
              </div>
              <div className="text-zinc-600 text-lg font-medium leading-8 self-stretch mt-5 max-md:max-w-full">
                While recognizing the significance of artificial intelligence,
                our primary focus remains on harnessing the innate potential and
                capabilities of human intellect
              </div>
              <div className="text-white text-base font-semibold leading-4 capitalize whitespace-nowrap bg-amber-500 justify-center items-stretch mt-3.5 pl-9 pr-7 py-5 rounded-3xl max-md:px-5">
                Work With Us
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f94eb07e0133c2e19962dd3d4cbf31f823b961766ae0fa77bd02bbd775646ee3?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f94eb07e0133c2e19962dd3d4cbf31f823b961766ae0fa77bd02bbd775646ee3?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f94eb07e0133c2e19962dd3d4cbf31f823b961766ae0fa77bd02bbd775646ee3?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f94eb07e0133c2e19962dd3d4cbf31f823b961766ae0fa77bd02bbd775646ee3?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f94eb07e0133c2e19962dd3d4cbf31f823b961766ae0fa77bd02bbd775646ee3?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f94eb07e0133c2e19962dd3d4cbf31f823b961766ae0fa77bd02bbd775646ee3?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f94eb07e0133c2e19962dd3d4cbf31f823b961766ae0fa77bd02bbd775646ee3?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f94eb07e0133c2e19962dd3d4cbf31f823b961766ae0fa77bd02bbd775646ee3?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
              className="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <div className="text-neutral-900 text-4xl font-semibold leading-10 tracking-tighter max-md:max-w-full max-md:mt-10">
              The energy of a start-up combined with 30 years of experience
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <div className="text-slate-800 text-lg font-medium leading-8 my-auto max-md:max-w-full max-md:mt-10">
              Our journey merges the dynamism and fresh perspectives of a
              start-up culture with the depth of knowledge and refined
              strategies cultivated over 30 years, delivering unparalleled
              solutions and staying ahead in an ever-evolving landscape.
            </div>
          </div>
        </div>
      </div>
      <div className="self-center flex w-[1190px] max-w-full items-stretch justify-between gap-5 mt-20 max-md:flex-wrap max-md:justify-center max-md:mt-10">
        <div className="flex justify-between gap-5 self-start items-start max-md:max-w-full max-md:flex-wrap">
          <div className="flex grow basis-[0%] flex-col items-stretch">
            <div className="text-amber-500 text-4xl font-bold leading-[50px] whitespace-nowrap">
              15+
            </div>
            <div className="text-neutral-900 text-2xl font-semibold leading-7 tracking-tighter whitespace-nowrap mt-8">
              Awards received
            </div>
          </div>
          <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
            <div className="text-amber-500 text-4xl font-bold leading-[50px] whitespace-nowrap">
              500+
            </div>
            <div className="text-neutral-900 text-2xl font-semibold leading-7 tracking-tighter whitespace-nowrap mt-7">
              Clients served
            </div>
          </div>
        </div>
        <div className="flex basis-[0%] flex-col items-stretch">
          <div className="text-amber-500 text-4xl font-bold leading-[50px] whitespace-nowrap">
            10
          </div>
          <div className="text-neutral-900 text-2xl font-semibold leading-7 tracking-tighter whitespace-nowrap mt-8">
            Employees
          </div>
        </div>
        <div className="flex basis-[0%] flex-col items-stretch self-start">
          <div className="text-amber-500 text-4xl font-bold leading-[50px] whitespace-nowrap">
            130+
          </div>
          <div className="text-neutral-900 text-2xl font-semibold leading-7 tracking-tighter whitespace-nowrap mt-7">
            Custom solutions
          </div>
        </div>
      </div>
      <div className="self-stretch mt-56 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-neutral-900 text-5xl font-semibold leading-[56px] tracking-tighter max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                We aspires to create a local identity that resonates in every
                corner of the world
              </div>
              <div className="text-zinc-600 text-lg font-medium leading-8 mt-12 max-md:max-w-full max-md:mt-10">
                Our mission is to craft designs and software solutions that
                transcend borders, embodying the essence of diverse cultures
                while leaving a lasting impact that's universally recognized.
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3ab23553d83d95d2711e71d3b55edc89e70acb77b71196a57f968f474e83e5c9?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ab23553d83d95d2711e71d3b55edc89e70acb77b71196a57f968f474e83e5c9?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ab23553d83d95d2711e71d3b55edc89e70acb77b71196a57f968f474e83e5c9?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ab23553d83d95d2711e71d3b55edc89e70acb77b71196a57f968f474e83e5c9?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ab23553d83d95d2711e71d3b55edc89e70acb77b71196a57f968f474e83e5c9?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ab23553d83d95d2711e71d3b55edc89e70acb77b71196a57f968f474e83e5c9?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ab23553d83d95d2711e71d3b55edc89e70acb77b71196a57f968f474e83e5c9?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ab23553d83d95d2711e71d3b55edc89e70acb77b71196a57f968f474e83e5c9?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
              className="aspect-[0.95] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>{" "}
      <div className="text-neutral-900 text-5xl font-semibold leading-[56px] tracking-tighter w-[577px] max-w-full mt-24 self-start max-md:text-4xl max-md:leading-[52px] max-md:mt-10">
        Collaboration defines our work ethos
      </div>{" "}
      <div className="text-zinc-600 text-lg font-medium leading-8 w-[721px] max-w-full mt-11 self-start max-md:mt-10">
        At our core, collaboration isn't just a strategy; it's our way of
        achieving excellence. Every project we undertake is a testament to the
        power of collective effort, where diverse perspectives converge to
        produce exceptional results that propel both our team and our clients
        towards success.
      </div>{" "}
      <div className="self-stretch mt-10 max-md:max-w-full max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/59ed0bb4b041135fb9d3888fb107837a37bfe58a0415143072ee0c15dff01dd1?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/59ed0bb4b041135fb9d3888fb107837a37bfe58a0415143072ee0c15dff01dd1?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59ed0bb4b041135fb9d3888fb107837a37bfe58a0415143072ee0c15dff01dd1?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/59ed0bb4b041135fb9d3888fb107837a37bfe58a0415143072ee0c15dff01dd1?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/59ed0bb4b041135fb9d3888fb107837a37bfe58a0415143072ee0c15dff01dd1?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59ed0bb4b041135fb9d3888fb107837a37bfe58a0415143072ee0c15dff01dd1?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/59ed0bb4b041135fb9d3888fb107837a37bfe58a0415143072ee0c15dff01dd1?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/59ed0bb4b041135fb9d3888fb107837a37bfe58a0415143072ee0c15dff01dd1?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
              className="aspect-[0.56] object-contain object-center w-full overflow-hidden shrink-0 grow flex-1 max-md:mt-10"
            />
          </div>{" "}
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b57d4a5f38d8ed8b2c4d439da4f3acec915564ff6686c4e81c4765edf3344853?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b57d4a5f38d8ed8b2c4d439da4f3acec915564ff6686c4e81c4765edf3344853?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b57d4a5f38d8ed8b2c4d439da4f3acec915564ff6686c4e81c4765edf3344853?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b57d4a5f38d8ed8b2c4d439da4f3acec915564ff6686c4e81c4765edf3344853?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b57d4a5f38d8ed8b2c4d439da4f3acec915564ff6686c4e81c4765edf3344853?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b57d4a5f38d8ed8b2c4d439da4f3acec915564ff6686c4e81c4765edf3344853?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b57d4a5f38d8ed8b2c4d439da4f3acec915564ff6686c4e81c4765edf3344853?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b57d4a5f38d8ed8b2c4d439da4f3acec915564ff6686c4e81c4765edf3344853?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
              className="aspect-[0.56] object-contain object-center w-full overflow-hidden shrink-0 grow flex-1 max-md:mt-10"
            />
          </div>{" "}
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0534b1129a414cf3c47fb64e14787f6ac6b677bfa9b29270ea85f9bbf9f72f4b?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0534b1129a414cf3c47fb64e14787f6ac6b677bfa9b29270ea85f9bbf9f72f4b?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0534b1129a414cf3c47fb64e14787f6ac6b677bfa9b29270ea85f9bbf9f72f4b?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0534b1129a414cf3c47fb64e14787f6ac6b677bfa9b29270ea85f9bbf9f72f4b?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0534b1129a414cf3c47fb64e14787f6ac6b677bfa9b29270ea85f9bbf9f72f4b?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0534b1129a414cf3c47fb64e14787f6ac6b677bfa9b29270ea85f9bbf9f72f4b?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0534b1129a414cf3c47fb64e14787f6ac6b677bfa9b29270ea85f9bbf9f72f4b?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0534b1129a414cf3c47fb64e14787f6ac6b677bfa9b29270ea85f9bbf9f72f4b?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
              className="aspect-[0.55] object-contain object-center w-full overflow-hidden shrink-0 grow flex-1 max-md:mt-10"
            />
          </div>{" "}
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-[0.5566218809980806] grow items-stretch pt-12 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/efe4b5becd2b62caa6296bd7b2b13fc978785a690e9e2dfb60bb3ee0ec6550fe?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/efe4b5becd2b62caa6296bd7b2b13fc978785a690e9e2dfb60bb3ee0ec6550fe?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/efe4b5becd2b62caa6296bd7b2b13fc978785a690e9e2dfb60bb3ee0ec6550fe?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/efe4b5becd2b62caa6296bd7b2b13fc978785a690e9e2dfb60bb3ee0ec6550fe?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/efe4b5becd2b62caa6296bd7b2b13fc978785a690e9e2dfb60bb3ee0ec6550fe?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/efe4b5becd2b62caa6296bd7b2b13fc978785a690e9e2dfb60bb3ee0ec6550fe?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/efe4b5becd2b62caa6296bd7b2b13fc978785a690e9e2dfb60bb3ee0ec6550fe?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/efe4b5becd2b62caa6296bd7b2b13fc978785a690e9e2dfb60bb3ee0ec6550fe?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="flex-col relative fill-neutral-800 mix-blend-multiply overflow-hidden flex aspect-[1.2446351931330473] w-full items-stretch mt-60 pl-9 pr-14 py-11 max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6639ec32d9421097415798a3d32a79b9bc5b3e02493e56dc7066739583d0e04?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />{" "}
                <div className="relative text-white text-sm font-semibold leading-4 whitespace-nowrap">
                  Support Assist
                </div>{" "}
                <div className="relative text-white text-2xl font-semibold leading-8 mt-4">
                  Selby Stuart
                </div>{" "}
                <div className="relative text-white text-sm leading-7 mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur sit amet eros.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="self-stretch mt-32 max-md:max-w-full max-md:mt-10 max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10">
              <div className="text-neutral-900 text-5xl font-semibold leading-[56px] tracking-tighter capitalize self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                Dahome propelled my startup Up.
              </div>{" "}
              <div className="text-zinc-600 text-lg font-medium leading-8 self-stretch mt-7 max-md:max-w-full">
                Partnering with Dahome was a game-changer, and we're thrilled
                with the results. Highly recommend their services for any
                startup aiming to ascend in their industry.
              </div>
              <div className="flex items-stretch justify-between gap-5 mt-11 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bacbe15f9751d9c2671b118cc49aeac0095d1d75c6d695b6794e21f03e146ba4?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bacbe15f9751d9c2671b118cc49aeac0095d1d75c6d695b6794e21f03e146ba4?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bacbe15f9751d9c2671b118cc49aeac0095d1d75c6d695b6794e21f03e146ba4?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bacbe15f9751d9c2671b118cc49aeac0095d1d75c6d695b6794e21f03e146ba4?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bacbe15f9751d9c2671b118cc49aeac0095d1d75c6d695b6794e21f03e146ba4?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bacbe15f9751d9c2671b118cc49aeac0095d1d75c6d695b6794e21f03e146ba4?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bacbe15f9751d9c2671b118cc49aeac0095d1d75c6d695b6794e21f03e146ba4?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bacbe15f9751d9c2671b118cc49aeac0095d1d75c6d695b6794e21f03e146ba4?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                  className="aspect-square object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                />
                <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                  <div className="text-sky-950 text-2xl font-medium leading-10 whitespace-nowrap">
                    Chikelu Neo
                  </div>
                  <div className="text-amber-500 text-lg font-medium leading-8 whitespace-nowrap mt-4">
                    CEO at MazeAI
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col flex relative shrink-0 box-border w-full min-h-[400px] min-w-[20px] overflow-hidden -ml-1 mt-52">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F5e9216a8905e4b3dbda114fe063d2097%2Fe16d6e3aeca8455d89f40adaad5ed80e?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F5e9216a8905e4b3dbda114fe063d2097%2Fe16d6e3aeca8455d89f40adaad5ed80e?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F5e9216a8905e4b3dbda114fe063d2097%2Fe16d6e3aeca8455d89f40adaad5ed80e?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F5e9216a8905e4b3dbda114fe063d2097%2Fe16d6e3aeca8455d89f40adaad5ed80e?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F5e9216a8905e4b3dbda114fe063d2097%2Fe16d6e3aeca8455d89f40adaad5ed80e?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F5e9216a8905e4b3dbda114fe063d2097%2Fe16d6e3aeca8455d89f40adaad5ed80e?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F5e9216a8905e4b3dbda114fe063d2097%2Fe16d6e3aeca8455d89f40adaad5ed80e?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F5e9216a8905e4b3dbda114fe063d2097%2Fe16d6e3aeca8455d89f40adaad5ed80e"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative flex flex-row">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fb48b0e5-05cc-413a-856f-b83d707d939c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb48b0e5-05cc-413a-856f-b83d707d939c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb48b0e5-05cc-413a-856f-b83d707d939c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb48b0e5-05cc-413a-856f-b83d707d939c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb48b0e5-05cc-413a-856f-b83d707d939c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb48b0e5-05cc-413a-856f-b83d707d939c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb48b0e5-05cc-413a-856f-b83d707d939c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb48b0e5-05cc-413a-856f-b83d707d939c?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                  className="aspect-square object-contain object-center w-[51px] overflow-hidden shrink-0 max-w-full mt-96 rounded-[50%] max-md:mt-10"
                />
                <div className="text-white text-lg font-semibold leading-5 capitalize whitespace-nowrap grow mt-0 w-auto self-center mr-0 flex-wrap -mb-1 pr-52 pt-[577px] pb-52 max-md:max-w-full max-md:mt-10 max-md:pt-10 max-md:px-5">
                  play Video
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numbers



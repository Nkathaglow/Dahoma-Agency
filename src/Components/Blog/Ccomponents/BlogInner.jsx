import * as React from "react";

function BlogInner(props) {
  return (
    <div className="bg-white flex flex-col pr-5 pt-4">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/09602f7589008ca3552f92f7b811f124386a90477fe48707f9cb5def7a1232fb?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/09602f7589008ca3552f92f7b811f124386a90477fe48707f9cb5def7a1232fb?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09602f7589008ca3552f92f7b811f124386a90477fe48707f9cb5def7a1232fb?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/09602f7589008ca3552f92f7b811f124386a90477fe48707f9cb5def7a1232fb?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/09602f7589008ca3552f92f7b811f124386a90477fe48707f9cb5def7a1232fb?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09602f7589008ca3552f92f7b811f124386a90477fe48707f9cb5def7a1232fb?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/09602f7589008ca3552f92f7b811f124386a90477fe48707f9cb5def7a1232fb?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/09602f7589008ca3552f92f7b811f124386a90477fe48707f9cb5def7a1232fb?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
        className="aspect-[2.03] object-contain object-center w-[978px] overflow-hidden self-center max-w-full mt-28 max-md:mt-10"
      />
      <div className="self-center flex items-stretch justify-between gap-2 mt-20 px-5 max-md:justify-center max-md:mt-10">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5ff69a27d951919db8de7dd31b5458e46a857fd639ec05d25ea68dca3ccb220d?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ff69a27d951919db8de7dd31b5458e46a857fd639ec05d25ea68dca3ccb220d?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ff69a27d951919db8de7dd31b5458e46a857fd639ec05d25ea68dca3ccb220d?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ff69a27d951919db8de7dd31b5458e46a857fd639ec05d25ea68dca3ccb220d?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ff69a27d951919db8de7dd31b5458e46a857fd639ec05d25ea68dca3ccb220d?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ff69a27d951919db8de7dd31b5458e46a857fd639ec05d25ea68dca3ccb220d?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ff69a27d951919db8de7dd31b5458e46a857fd639ec05d25ea68dca3ccb220d?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ff69a27d951919db8de7dd31b5458e46a857fd639ec05d25ea68dca3ccb220d?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
          className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full rounded-[50%]"
        />
        <div className="text-zinc-700 text-base leading-8 my-auto">
          Andrew Jonson
        </div>
        <div className="text-zinc-700 text-base leading-8 self-center whitespace-nowrap my-auto">
          Posted on 27th January 2021
        </div>
      </div>
      <div className="text-slate-800 text-6xl font-semibold leading-[72px] tracking-tighter self-center w-[752px] max-w-full mt-8 max-md:text-4xl max-md:leading-[50px]">
        Breaking the code How did we build our Figma plugin{" "}
      </div>
      <div className="text-zinc-600 text-base font-medium leading-7 text-left -ml-0.5 mt-9 px-52 max-md:max-w-full">
        Writing UX copies can be a little frustrating and confusing, and
        sometimes we are unsure about how to get the right word. To crack the
        code for the UX copies, we at Zeta Design wanted to build a Figma plugin
        for the larger design community. The plugin is called the Ghost UXWriter
        and has a set of UX copies cataloged and categorized with a voice and
        tone variation ranging from plain, casual to playful. The intention to
        build this Figma plugin originated from our Medium blog post, ‘Designing
        voice and tone for error messages.
      </div>
      <div className="text-zinc-600 text-base font-medium leading-7 mt-9 pl-52 pr-48 max-md:max-w-full">
        Writing UX copies can be a little frustrating and confusing, and
        sometimes we are unsure about how to get the right word. To crack the
        code for the UX copies, we at Zeta Design wanted to build a Figma plugin
        for the larger design community. The plugin is called the Ghost UXWriter
        and has a set of UX copies cataloged.
      </div>
      <div className="text-zinc-600 text-base font-medium leading-7 mt-9 pl-48 pr-44 max-md:max-w-full">
        Writing UX copies can be a little frustrating and confusing, and
        sometimes we are unsure about how to get the right word. To crack the
        code for the UX copies, we at Zeta Design wanted to build a Figma plugin
        for the larger design community. The plugin is called the Ghost UXWriter
        and has a set of UX copies cataloged and categorized with a voice and
        tone variation ranging from plain, casual to playful. The intention to
        build this Figma plugin originated from our Medium blog post, ‘Designing
        voice.
      </div>
      <div className="text-neutral-900 text-5xl font-semibold leading-[56px] tracking-tighter self-center w-[752px] max-w-full mt-14 max-md:text-4xl max-md:leading-[52px] max-md:mt-10">
        Transform Your Idea Into Reality with Ether a Leading Digital Agency
      </div>
      <div className="text-zinc-600 text-base font-medium leading-7 -ml-0.5 mt-8 mb-5 pt-1.5 px-52 max-md:max-w-full">
        Writing UX copies can be a little frustrating and confusing, and
        sometimes we are unsure about how to get the right word. To crack the
        code for the UX copies, we at Zeta Design wanted to build a Figma plugin
        for the larger design community. The plugin is called the Ghost UXWriter
        and has a set of UX copies cataloged.
      </div>
      <div className="text-zinc-600 text-base font-medium leading-7 mt-9 px-52 max-md:max-w-full">
        Writing UX copies can be a little frustrating and confusing, and
        sometimes we are unsure about how to get the right word. To crack the
        code for the UX copies, we at Zeta Design wanted to build a Figma plugin
        for the larger design community. The plugin is called the Ghost UXWriter
        and has a set of UX copies cataloged and categorized with a voice and
        tone variation ranging from plain, casual to playful. The intention to
        build this Figma plugin originated from our Medium blog post, ‘Designing
        voice.
      </div>
      <div className="bg-sky-950 self-stretch flex w-full justify-between gap-5 mt-32 pt-10 items-end max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/08f27e520ae56737407d861d947951bad43659161bb938d910d7254f10d74400?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
          className="aspect-[0.37] object-contain object-center w-[53px] fill-amber-500 overflow-hidden shrink-0 max-w-full mt-72 max-md:mt-10"
        />
        <div className="flex grow basis-[0%] flex-col items-stretch self-start max-md:max-w-full">
          <div className="flex w-full items-stretch justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="self-center flex basis-[0%] flex-col items-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cfb7bfc64850bcafebffd24d1f304e1c7f6dbefdb152a60cf6228b08e970710?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                className="aspect-[11.33] object-contain object-center w-[306px] fill-white overflow-hidden self-center"
              />
              <div className="text-white text-4xl font-semibold leading-10 tracking-tighter mt-10">
                Bespoke software solutions
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9931966b2f1e311d5650693e7b7d54e027ed185e30a76e2a664a738d4398528e?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                className="aspect-[15.3] object-contain object-center w-[306px] overflow-hidden self-center mt-10 max-md:mt-10"
              />
            </div>
            <div className="self-center my-auto max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[18%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch max-md:mt-10">
                    <div className="text-white text-lg font-semibold whitespace-nowrap">
                      Company
                    </div>
                    <div className="text-white text-base font-medium whitespace-nowrap mt-8">
                      About Us
                    </div>
                    <div className="text-white text-base font-medium whitespace-nowrap mt-7">
                      Careers
                    </div>
                    <div className="text-white text-base font-medium whitespace-nowrap mt-7">
                      Services
                    </div>
                    <div className="text-white text-base font-medium whitespace-nowrap mt-7">
                      Blog
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch max-md:mt-10">
                    <div className="text-white text-lg font-semibold whitespace-nowrap">
                      Connect
                    </div>
                    <div className="text-white text-base font-medium whitespace-nowrap mt-10">
                      hi@finsweet.com
                    </div>
                    <div className="text-white text-base font-medium whitespace-nowrap mt-5">
                      +(123) 456-7890
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch max-md:mt-10">
                    <div className="text-white text-lg font-semibold whitespace-nowrap">
                      Join Newsletter
                    </div>
                    <div className="text-neutral-400 text-base font-medium whitespace-nowrap bg-white justify-center mt-8 pl-8 pr-16 py-5 rounded-[31px] items-start max-md:px-5">
                      Type email here
                    </div>
                    <div className="text-white text-lg font-semibold leading-5 capitalize whitespace-nowrap bg-amber-500 justify-center mt-4 pl-8 pr-16 py-5 rounded-[31px] items-start max-md:px-5">
                      Subscribe
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-amber-500 flex w-[53px] shrink-0 h-[287px] flex-col rounded-3xl" />
          </div>
          <div className="flex w-full items-stretch justify-between gap-5 mt-10 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <div className="text-white text-base font-medium grow whitespace-nowrap">
              © All rights reserved – Finsweet
            </div>
            <div className="flex items-stretch justify-between gap-5">
              <div className="text-white text-base font-medium whitespace-nowrap">
                Privacy Policy
              </div>
              <div className="text-white text-base font-medium whitespace-nowrap self-start">
                Terms & Conditions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogInner



import * as React from "react";

function BlogContent(props) {
  return (
    <div className="bg-white flex flex-col items-center pt-4">
      <div className="bg-slate-200 self-stretch flex w-full flex-col justify-center items-center mt-4 px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="w-[1282px] max-w-full mt-20 mb-14 max-md:my-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="self-stretch flex items-stretch justify-between gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
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
                <div className="text-slate-800 text-6xl font-semibold leading-[72px] tracking-tighter self-stretch mt-8 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                  Our internal process and longerm vision
                </div>
                <div className="text-zinc-600 text-lg font-medium leading-8 self-stretch mt-7 max-md:max-w-full">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The Maker is a decentralized. We aim to attain the
                </div>
                <div className="flex items-stretch gap-2.5 mt-9 self-start">
                  <div className="text-amber-500 text-base font-medium leading-4 grow whitespace-nowrap">
                    Read More
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db7f217299740327aafd75b4d74b7e2af4b831f9329d467dcc71150535a70b6?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                    className="aspect-[2.2] object-contain object-center w-[22px] fill-amber-500 overflow-hidden shrink-0 max-w-full self-start"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca8eaf1ca130c485cd621ac85e33338b8092bf33351895d5258ef15b3e5d33fc?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca8eaf1ca130c485cd621ac85e33338b8092bf33351895d5258ef15b3e5d33fc?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca8eaf1ca130c485cd621ac85e33338b8092bf33351895d5258ef15b3e5d33fc?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca8eaf1ca130c485cd621ac85e33338b8092bf33351895d5258ef15b3e5d33fc?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca8eaf1ca130c485cd621ac85e33338b8092bf33351895d5258ef15b3e5d33fc?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca8eaf1ca130c485cd621ac85e33338b8092bf33351895d5258ef15b3e5d33fc?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca8eaf1ca130c485cd621ac85e33338b8092bf33351895d5258ef15b3e5d33fc?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca8eaf1ca130c485cd621ac85e33338b8092bf33351895d5258ef15b3e5d33fc?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                className="aspect-[1.26] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[1280px] max-w-full flex-col items-stretch mt-36 px-5 max-md:mt-10">
        <div className="text-neutral-900 text-5xl font-semibold leading-[56px] tracking-tighter capitalize max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
          All posts
        </div>
        <div className="mt-20 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                className="aspect-[1.74] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                className="aspect-[1.74] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                className="aspect-[1.74] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="bg-blue-50 flex w-full grow flex-col mx-auto px-8 py-9 rounded-none items-start max-md:mt-10 max-md:px-5">
                <div className="text-neutral-900 text-2xl font-medium leading-9 tracking-tighter self-stretch">
                  Why you have to digitalize in 2021
                </div>
                <div className="text-zinc-600 text-base font-medium leading-7 self-stretch mt-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur sit amet eros blandit, hendrerit elit et.
                </div>
                <div className="flex items-stretch gap-3 mt-8">
                  <div className="text-amber-500 text-base font-medium leading-4 grow whitespace-nowrap">
                    Learn More
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db7f217299740327aafd75b4d74b7e2af4b831f9329d467dcc71150535a70b6?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                    className="aspect-[2.2] object-contain object-center w-[22px] fill-amber-500 overflow-hidden shrink-0 max-w-full self-start"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-blue-50 flex w-full grow flex-col mx-auto px-8 py-9 rounded-none items-start max-md:mt-10 max-md:px-5">
                <div className="text-neutral-900 text-2xl font-medium leading-9 tracking-tighter self-stretch">
                  Our internal process and longerm vision
                </div>
                <div className="text-zinc-600 text-base font-medium leading-7 self-stretch mt-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur sit amet eros blandit, hendrerit elit et.
                </div>
                <div className="flex items-stretch gap-3 mt-8">
                  <div className="text-amber-500 text-base font-medium leading-4 grow whitespace-nowrap">
                    Learn More
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db7f217299740327aafd75b4d74b7e2af4b831f9329d467dcc71150535a70b6?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                    className="aspect-[2.2] object-contain object-center w-[22px] fill-amber-500 overflow-hidden shrink-0 max-w-full self-start"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-blue-50 flex w-full grow flex-col mx-auto px-8 py-9 rounded-none items-start max-md:mt-10 max-md:px-5">
                <div className="text-neutral-900 text-2xl font-medium leading-9 tracking-tighter self-stretch">
                  Helping the next generation of leaders
                </div>
                <div className="text-zinc-600 text-base font-medium leading-7 self-stretch mt-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur sit amet eros blandit, hendrerit elit et.
                </div>
                <div className="flex items-stretch gap-3 mt-8">
                  <div className="text-amber-500 text-base font-medium leading-4 grow whitespace-nowrap">
                    Learn More
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db7f217299740327aafd75b4d74b7e2af4b831f9329d467dcc71150535a70b6?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                    className="aspect-[2.2] object-contain object-center w-[22px] fill-amber-500 overflow-hidden shrink-0 max-w-full self-start"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d713d9685670ed9ecda42e5f5fdc44739e42ae91ac1e5656566e1728c527d059?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                className="aspect-[1.74] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5670f67a9166fa4b19e1f443f70fe7326d02787b5162ddf376013838740d92c?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                className="aspect-[1.74] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/220a556a8be9be14965c8e36eb0bb6a881ec79a64baa1db75774bf99306ee364?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                className="aspect-[1.74] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="bg-blue-50 flex w-full grow flex-col mx-auto px-8 py-9 rounded-none items-start max-md:mt-10 max-md:px-5">
                <div className="text-neutral-900 text-2xl font-medium leading-9 tracking-tighter self-stretch">
                  Why you have to digitalize in 2021
                </div>
                <div className="text-zinc-600 text-base font-medium leading-7 self-stretch mt-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur sit amet eros blandit, hendrerit elit et.
                </div>
                <div className="flex items-stretch gap-3 mt-8">
                  <div className="text-amber-500 text-base font-medium leading-4 grow whitespace-nowrap">
                    Learn More
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db7f217299740327aafd75b4d74b7e2af4b831f9329d467dcc71150535a70b6?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                    className="aspect-[2.2] object-contain object-center w-[22px] fill-amber-500 overflow-hidden shrink-0 max-w-full self-start"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-blue-50 flex w-full grow flex-col mx-auto px-8 py-9 rounded-none items-start max-md:mt-10 max-md:px-5">
                <div className="text-neutral-900 text-2xl font-medium leading-9 tracking-tighter self-stretch">
                  Our internal process and longerm vision
                </div>
                <div className="text-zinc-600 text-base font-medium leading-7 self-stretch mt-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur sit amet eros blandit, hendrerit elit et.
                </div>
                <div className="flex items-stretch gap-3 mt-8">
                  <div className="text-amber-500 text-base font-medium leading-4 grow whitespace-nowrap">
                    Learn More
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db7f217299740327aafd75b4d74b7e2af4b831f9329d467dcc71150535a70b6?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                    className="aspect-[2.2] object-contain object-center w-[22px] fill-amber-500 overflow-hidden shrink-0 max-w-full self-start"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-blue-50 flex w-full grow flex-col mx-auto px-8 py-9 rounded-none items-start max-md:mt-10 max-md:px-5">
                <div className="text-neutral-900 text-2xl font-medium leading-9 tracking-tighter self-stretch">
                  Helping the next generation of leaders
                </div>
                <div className="text-zinc-600 text-base font-medium leading-7 self-stretch mt-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur sit amet eros blandit, hendrerit elit et.
                </div>
                <div className="flex items-stretch gap-3 mt-8">
                  <div className="text-amber-500 text-base font-medium leading-4 grow whitespace-nowrap">
                    Learn More
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db7f217299740327aafd75b4d74b7e2af4b831f9329d467dcc71150535a70b6?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
                    className="aspect-[2.2] object-contain object-center w-[22px] fill-amber-500 overflow-hidden shrink-0 max-w-full self-start"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce50cfb8388916908589581e1c40bc2e62d82cabc8a1c211bbc9dfba51a2b6de?apiKey=5e9216a8905e4b3dbda114fe063d2097&"
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


export default BlogContent


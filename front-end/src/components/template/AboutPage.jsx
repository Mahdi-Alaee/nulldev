import React from 'react'

const AboutPage = () => {
  return (
    <section class="py-12 relative">
    <div class="w-full px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div
                class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                    <img class=" rounded-xl object-cover" src="https://png.pngtree.com/thumb_back/fw800/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg" alt="about Us image" />
                </div>
                <img class="sm:ml-0 ml-auto rounded-xl object-cover" src="https://png.pngtree.com/thumb_back/fw800/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg"
                    alt="about Us image" />
            </div>
            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div class="w-full flex-col justify-center items-start gap-8 flex">
                    <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                        <h2
                            class="text-gray-900 text-4xl font-semibold font-manrope leading-normal lg:text-start text-center">
                            درباره ما</h2>
                        <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
</p>
                    </div>
                    <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                        <div class="flex-col justify-start items-start inline-flex">
                            <h3 class="text-gray-900 text-4xl font-semibold font-manrope leading-normal">33+</h3>
                            <h6 class="text-gray-500 text-base font-normal leading-relaxed">پروژه موفق</h6>
                        </div>
                        <div class="flex-col justify-start items-start inline-flex">
                            <h4 class="text-gray-900 text-4xl font-semibold font-manrope leading-normal">125+</h4>
                            <h6 class="text-gray-500 text-base font-normal leading-relaxed"> تجربه کاری</h6>
                        </div>
                        <div class="flex-col justify-start items-start inline-flex">
                            <h4 class="text-gray-900 text-4xl font-semibold font-manrope leading-normal">52+</h4>
                            <h6 class="text-gray-500 text-base font-normal leading-relaxed">مشتری راضی </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>  )
}

export default AboutPage
import React, { useContext, useState } from 'react'
const Home = () => {

  /**
   * p - padding
   * m - margin
   * pt - padding top
   * pb - padding bottom
   * pl - padding left
   * pr - padding right
   * mt - margin top
   * mb - margin bottom
   * ml - margin left
   * mr - margin right
   * - [px]
   * - [rem]
   * - [em]
   * - [vh]
   * - [vw]
   * - [%]
   * 
   * Todo:Display Flex
   * display: flex - flex
   * flex-direction: row - flex-row
   * flex-wrap: wrap - flex-wrap
   * align-items: center - item-center
   * justify-content: center - justify-center
   * 
   * TODO:Fonts
   * color text -  text-yellow-200  / text-[#fafasdf]
   * text-align: center - text-center
   * font-size: 40px - text-[40px]
   * text-decoration: underline - underline
   * 
   * TODO:Background
   * background-image: url(https://images.unsplash.com/photo-150 - bg-[url('/img/hero-pattern.svg')]
    background-size: cover - bg-cover
    background-position: center - bg-center
  */

  return (
    <div>
      <div className='bg-cover bg-center w-[100%] h-[450px] md:w-[450px] md:h-[450px]  lg:w-[300px] lg:h-[300px] bg-[url(https://i.natgeofe.com/n/6490d605-b11a-4919-963e-f1e6f3c0d4b6/sumatran-tiger-thumbnail-nationalgeographic_1456276_4x3.jpg)]'></div>

    </div>

  )
}

export default Home
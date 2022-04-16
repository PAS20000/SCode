import { useEffect, useState } from 'react'
import { CssInject } from '../functions/CssInject'
import { IMainFactory, IMainHtmlProps } from '../useEasyPagination.types'

const Arrows = {
    right:{100:'🡢',200:'🡪', 300:'🡲', 400:'🡺',500:'🢂'},
    left: {100:'🡠',200:'🡨', 300:'🡰', 400:'🡸', 500:'🢀'}
}

export const MainHtml = (
{
    currentPage, 
    classStyle, 
    arrowWeight, 
    CountPages, 
    Pages
}:IMainHtmlProps, {
    NextPage, 
    ReturnPage, 
    ExactPage, 
    DeviceLastPage,
    DeviceName,
    DeviceSlice,
}:IMainFactory) => {


    const { Buttons } = CssInject(classStyle, currentPage)

    return(
       <div>
           <button style={{background:'red'}}></button>
           <button id={'Breturn'} name={'b'} onClick={() => ReturnPage()} className={Buttons}>
               <span>
                   {Arrows.left[arrowWeight ?? 100]}
               </span>
           </button>
           {!CountPages ?
               <span>
                   <span className={CssInject(classStyle, currentPage).PagesCard}>
                       {currentPage}
                   </span>
                   <span>
                       -{DeviceLastPage}
                   </span>
               </span>
               :
               Pages.map((pg, index) =>

                    <button id={'pages'} key={index} className={CssInject(classStyle, currentPage, pg).PagesCard} onClick={() => ExactPage(pg)}>
                        {pg}
                    </button>
               )
           }
           <button id={'Bnext'} name={'buttons'} onClick={() => NextPage()} className={Buttons}>
               <span>
                   {Arrows.right[arrowWeight ?? 100]}
               </span>
           </button>
           <span>
                {currentPage}...{DeviceLastPage}
                {currentPage === DeviceLastPage && '🚀'}
            </span>
       </div>
   )
}
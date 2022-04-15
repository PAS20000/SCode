import { IMainFactory, IMainHtmlProps } from '../useEasyPagination.types'
import css from './MainHtml.module.css'

const Arrows = {
    right:{100:'🡢',200:'🡪', 300:'🡲', 400:'🡺',500:'🢂'},
    left: {100:'🡠',200:'🡨', 300:'🡰', 400:'🡸', 500:'🢀'}
}

export const MainHtml = ({
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

    return(
       <div>
           <button id={'Breturn'} name={'b'} onClick={() => ReturnPage()} className={currentPage === 1 ? css['disabled']: css[classStyle ?? 'default']}>
               <span>
                   {Arrows.left[arrowWeight ?? 100]}
               </span>
           </button>
           {!CountPages ?
               <span>
                   <span className={css['select']}>
                       {currentPage}
                   </span>
                   <span>
                       -{DeviceLastPage}
                   </span>
               </span>
               :
               Pages.map((pg, index) => 
               <button key={index} className={currentPage === pg  ? css['select']:css['default']} onClick={() => ExactPage(pg)}>
                   {pg}
               </button>)
           }
           <button id={'Bnext'} name={'buttons'} onClick={() => NextPage()} className={currentPage === DeviceLastPage ? css['disabled']:css[classStyle ?? 'default']}>
               <span>
                   {Arrows.right[arrowWeight ?? 100]}
               </span>
           </button>
       </div>
   )
}
import { IMainFactory, IMainHtmlProps } from '../useEasyPagination.types'
import css from './MainHtml.module.css'

const Arrows = {
    right:{100:'🡢',200:'🡪', 300:'🡲', 400:'🡺',500:'🢂'},
    left: {100:'🡠',200:'🡨', 300:'🡰', 400:'🡸', 500:'🢀'}
}

export const MainHtml = (
    customStyle,
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

    const cssInject = (pg?:number) => {
        if(customStyle){
           return customStyle
        }
        if(classStyle === 'redCircle'){
            const PagesCard = currentPage === pg  ? css['redCircle'] : css['redCirclePages']
            const Buttons = css['redCircle']

            return {
                Buttons,
                PagesCard
            }
        }

        const PagesCard = currentPage === pg  ? css['select'] : css['default']
        const Buttons = css['default']

        return {
            Buttons,
            PagesCard
        }
    }

    const {  Buttons, PagesCard } = cssInject()

    return(
       <div>
           <button id={'Breturn'} name={'b'} onClick={() => ReturnPage()} className={Buttons} style={customStyle ? Buttons:{}}>
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
               <button key={index} className={cssInject(pg).PagesCard} onClick={() => ExactPage(pg)} style={customStyle ? PagesCard:{}}>
                   {pg}
               </button>)
           }
           <button id={'Bnext'} name={'buttons'} onClick={() => NextPage()} className={Buttons} style={customStyle ? Buttons:{}}>
               <span>
                   {Arrows.right[arrowWeight ?? 100]}
               </span>
           </button>
       </div>
   )
}
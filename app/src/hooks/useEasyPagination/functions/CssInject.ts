import css from '../Components/MainHtml.module.css'
import { Styles } from '../useEasyPagination.types'

export const CssInject = (classStyle:Styles[number] , currentPage:number, pg?:number) => {

const disabled = currentPage === pg ? css['']:css['disabled']

    if(classStyle === 'redCircle'){
        
        const PagesCard = currentPage === pg  ? css['redCircle'] : css['redCirclePages']
        const Buttons = css['redCircle']

        return {
            Buttons,
            PagesCard,
            disabled
        }
    }

    if(classStyle === 'greenCircle'){
        
        const PagesCard = currentPage === pg  ? css['greenCircle'] : css['greenCirclePages']
        const Buttons = css['greenCircle']

        return {
            Buttons,
            PagesCard,
            disabled

        }
    }

    if(classStyle === 'blueCircle'){
        
        const PagesCard = currentPage === pg  ? css['blueCircle'] : css['blueCirclePages']
        const Buttons = css['blueCircle']

        return {
            Buttons,
            PagesCard,
            disabled
        }
    }

    if(classStyle === 'purpleCircle'){
        
        const PagesCard = currentPage === pg  ? css['purpleCircle'] : css['purpleCirclePages']
        const Buttons = css['purpleCircle']

        return {
            Buttons,
            PagesCard,
            disabled
        }
    }

    if(classStyle === 'orangeCircle'){
        
        const PagesCard = currentPage === pg  ? css['orangeCircle'] : css['orangeCirclePages']
        const Buttons = css['orangeCircle']

        return {
            Buttons,
            PagesCard,
            disabled
        }
    }

    const PagesCard = currentPage === pg  ? css['select'] : css['default']
    const Buttons = css['default']

    return {
        Buttons,
        PagesCard,
        disabled
    }
}
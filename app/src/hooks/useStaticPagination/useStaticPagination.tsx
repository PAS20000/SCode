import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import css from './useStaticPagination.module.css'


interface IMainFactory {
    DeviceName:string,
    ReturnPage: Function
    NextPage: Function
    DeviceSlice: string,
    DeviceData: Array<any>
    DeviceLastPage:number
}

type Range = [100,200,300,400,500]

type Styles = ['default','redCircle', 'orangeCircle']

type MainHtmlProps = {
    CountPages?:boolean
}

interface IProps {
    data:Array<any>
    sliceCell:number
    sliceDesktop:number
    sliceTv:number
    arrowWeight?:Range[number]
    classStyle?:Styles[number]
    cellWidth?:number
    desktopWidth?:number
    tvWidth?:number
}

interface IDevice {
    device:string
    lastPage:number
    slice:string
    Data:Array<any>
}

const Arrows = {
    right:{100:'🡢',200:'🡪', 300:'🡲', 400:'🡺',500:'🢂'},
    left: {100:'🡠',200:'🡨', 300:'🡰', 400:'🡸', 500:'🢀'}
}

export default function useStaticPagination({data, sliceCell, sliceDesktop, sliceTv, arrowWeight, classStyle, cellWidth, desktopWidth, tvWidth}:IProps) {
    const [ Start, setStart ] = useState(0)
    const [ Page, setPage ] = useState(1)
    const [ width, setWidth ] = useState(0)
    const [ MaxItems ] = useState(data.length)
    const [ Pages, setPages ] = useState([])
    const [ SliceCell, setSliceCell ] = useState(sliceCell)
    const [ SliceDesktop, setSliceDesktop ] = useState(sliceDesktop)
    const [ SliceTv, setSliceTv ] = useState(sliceTv)

    useEffect(() => {
        const w = window.innerWidth
        setWidth(w)
    },[])

    const Device = ():IDevice => {
        const cell = cellWidth ? cellWidth:500
        const desktop = tvWidth ? tvWidth:1300 && width > cell
        const tv = tvWidth ? tvWidth:1300
    
        if(width < cell){
            const lastPage = Math.ceil(MaxItems / sliceCell)
            const slice = `slice(${Start}-${SliceCell})`
            const Data = data.slice(Start, SliceCell)

            return {
                device:'cell',
                lastPage,
                slice,
                Data
            }
        }
        if(width < desktop){
            const lastPage = Math.ceil(MaxItems / sliceDesktop)
            const slice = `slice(${Start}-${SliceDesktop})`
            const Data = data.slice(Start, SliceDesktop)

            return {
                device:'desktop',
                lastPage,
                slice,
                Data
            }
        }
        if(width > tv) {
            const lastPage = Math.ceil(MaxItems / sliceTv)
            const slice = `slice(${Start}-${SliceTv})`
            const Data = data.slice(Start, SliceTv)

            return {
                device:'tv',
                lastPage,
                slice,
                Data
            }
        }
    }
    useEffect(() => {
       
        (function({ device, lastPage }){

            if(device === 'cell' && width !== 0){
                
                for ( let count = 1; count - 1 < lastPage; count++) {
                    setPages(prev => [...prev,count])
                }
            }
            if(device === 'desktop'&& width !== 0){
    
                for ( let count = 1; count - 1 < lastPage; count++) {
                    setPages(prev => [...prev,count])
                }
            } 
            if(device === 'tv'&& width !== 0) {
                
                for ( let count = 1; count - 1 < lastPage; count++) {
                    setPages(prev => [...prev,count])
                }
            }
        })(Device());
        
    }, [width])
    

    const MainFactory = ():IMainFactory => {
        const { device, lastPage, slice, Data } = Device()

        if(device === 'cell'){
           
            return {
                DeviceName: device,
                ReturnPage: () => { 
                    setStart(Start - sliceCell)
                    setSliceCell(SliceCell - sliceCell)
                    setPage(Page - 1)
                },
                NextPage:() => {
                    setStart(Start + sliceCell)
                    setSliceCell(sliceCell + SliceCell)
                    setPage(Page + 1)
                },
                DeviceSlice: slice,
                DeviceData: Data,
                DeviceLastPage: lastPage,
            }
        }
        if(device === 'desktop'){
           
            return {
                DeviceName:device,
                ReturnPage: () => {
                    setStart(Start - sliceDesktop)
                    setSliceDesktop(SliceDesktop - sliceDesktop)
                    setPage(Page - 1)
                },
                NextPage:() => {
                    setStart(Start + sliceDesktop)
                    setSliceDesktop(sliceDesktop + SliceDesktop)
                    setPage(Page + 1)
                },
                DeviceSlice: slice,
                DeviceData:Data,
                DeviceLastPage:lastPage,
            }
        }
        if(device === 'tv'){

            return {
                DeviceName:device,
                ReturnPage:() => {
                    setStart(Start - sliceTv)
                    setSliceTv(SliceTv - sliceTv)
                    setPage(Page - 1)
                },
                NextPage:() => {
                    setStart(Start + sliceTv)
                    setSliceTv(sliceTv + SliceTv)
                    setPage(Page + 1)
                },
                DeviceSlice: slice,
                DeviceData:Data,
                DeviceLastPage:lastPage,
            }
        }
    }

    const { DeviceData, DeviceLastPage, DeviceName, DeviceSlice, NextPage, ReturnPage } = MainFactory()

 const MainHtml = ({CountPages}:MainHtmlProps) => {
     return(
        <div>
            <button id={'Breturn'} name={'b'} onClick={() => ReturnPage()} className={Page === 1 ? css['disabled']: css[classStyle ?? 'default']}>
                <span>
                    {Arrows.left[arrowWeight ?? 100]}
                </span>
            </button>
            {!CountPages ?
                <span>
                    <span className={css['select']}>
                        {Page}
                    </span>
                    <span>
                        -{DeviceLastPage}
                    </span>
                </span>
                :
                Pages.map((pg, index) => 
                <button key={index}>
                    {pg}
                </button>)
            }
            <button id={'Bnext'} name={'buttons'} onClick={() => NextPage()} className={Page === DeviceLastPage ? css['disabled']:css[classStyle ?? 'default']}>
                <span>
                    {Arrows.right[arrowWeight ?? 100]}
                </span>
            </button>
        </div>
    )
}


    return {
        Result:MainFactory(),
        DeviceName,
        DeviceSlice,
        Start, 
        Page,
        NextPage,
        ReturnPage,
        DeviceData,
        DeviceLastPage,
        MainHtml,
    }
}
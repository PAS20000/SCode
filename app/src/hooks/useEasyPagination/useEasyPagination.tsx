import { useEffect, useMemo, useState } from 'react'
import css from './useEasyPagination.module.css'


interface IMainFactory {
    DeviceName:string,
    ReturnPage: Function
    NextPage: Function
    ExactPage:Function
    DeviceSlice: string
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
    classStyle?:Styles[number],
    CountPageLimit?:{
        cell:number
        desktop:number
        tv:number
    }
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

export default function useEasyPagination({data, sliceCell, sliceDesktop, sliceTv, arrowWeight, classStyle, CountPageLimit}:IProps) {
    const [ Start, setStart ] = useState(0)
    const [ currentPage, setCurrentPage ] = useState(1)
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
        const cell = 500
        const desktop = 1200
        const tv = 1300
    
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
        if(width < desktop && width < tv){
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
    const existCountSalt = (deviceType:string, lastPage:number):number | any => {
    if(CountPageLimit){
            if(deviceType === 'cell' && CountPageLimit.cell > lastPage){
                return alert(
                    `Count page limit cannot be greater than last page, LastPage: ${lastPage}, CountPageLimit: ${CountPageLimit.cell}, DataLength: ${MaxItems}`
                )
            }
            if(deviceType === 'desktop' && CountPageLimit.desktop > lastPage){
                return alert(
                    `Count page limit cannot be greater than last page, LastPage: ${lastPage}, CountPageLimit: ${CountPageLimit.desktop}, DataLength: ${MaxItems}`
                )
            }
            if(deviceType === 'tv' && CountPageLimit.tv > lastPage){
                return alert(
                    `Count page limit cannot be greater than last page, LastPage: ${lastPage}, CountPageLimit: ${CountPageLimit.tv}, DataLength: ${MaxItems}`
                )
            }
            if(deviceType === 'cell'){
                return CountPageLimit.cell
            }
            if(deviceType === 'desktop'){
                return CountPageLimit.desktop
            }
            if(deviceType === 'tv'){
                return CountPageLimit.tv
            }

            return alert('Unexpected error')
        } else {
            return lastPage
        }
    }

if(CountPageLimit) {
    useMemo(() => {
        
            (function({ device,lastPage }){
               
                if(currentPage > existCountSalt(device, lastPage)){
                    setPages(prev => prev.includes(currentPage) ? [...Pages]:[...Pages, currentPage])
                }


               
            })(Device());
    }, [currentPage])
}
    console.log(Pages)
    useMemo(() => {

        (function({ device, lastPage }){
            const existWidth = width !== 0
            
            if(device === 'cell' && existWidth ){

                for ( let count = 1; count - 1 < existCountSalt(device, lastPage ); count++) {
                    setPages(prev => [...prev,count])
                }
            }
            if(device === 'desktop' && existWidth){
               
                for ( let count = 1; count - 1 < existCountSalt(device, lastPage); count++) {
                    setPages(prev => [...prev,count])
                }
                
            } 
            if(device === 'tv'&& existWidth) {

                for ( let count = 1; count - 1 < existCountSalt(device, lastPage); count++) {
                    setPages(prev => [...prev,count])
                }
               
            }
        })(Device());
        
    }, [width])
    
    const MainFactory = ({ device, lastPage, slice, Data }):IMainFactory => {

        if(device === 'cell'){
           
            return {
                DeviceName: device,
                ReturnPage: () => { 
                    setStart(Start - sliceCell)
                    setSliceCell(SliceCell - sliceCell)
                    setCurrentPage(currentPage - 1)
                },
                NextPage:() => {
                    setStart(Start + sliceCell)
                    setSliceCell(sliceCell + SliceCell)
                    setCurrentPage(currentPage + 1)
                },
                ExactPage:(pg:number) => {
                    setCurrentPage(pg)
                    setSliceCell(pg)
                    setStart(pg - sliceCell)
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
                    setCurrentPage(currentPage - 1)
                },
                NextPage: () => {
                    setStart(Start + sliceDesktop)
                    setSliceDesktop(sliceDesktop + SliceDesktop)
                    setCurrentPage(currentPage + 1)
                },
                ExactPage: (pg:number) => {
                    setCurrentPage(pg)
                    setSliceDesktop(pg * sliceDesktop)
                    setStart(sliceDesktop * (pg - 1))
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
                    setCurrentPage(currentPage - 1)
                },
                NextPage:() => {
                    setStart(Start + sliceTv)
                    setSliceTv(sliceTv + SliceTv)
                    setCurrentPage(currentPage + 1)
                },
                ExactPage:(pg:number) => {
                    setCurrentPage(pg)
                    setSliceTv(pg * sliceTv)
                    setStart(sliceTv * (pg - 1))
                },
                DeviceSlice: slice,
                DeviceData:Data,
                DeviceLastPage:lastPage,
            }
        }
    }

    const { DeviceData, DeviceLastPage, DeviceName, DeviceSlice, NextPage, ReturnPage, ExactPage } = MainFactory(Device())

    

 const MainHtml = ({CountPages}:MainHtmlProps) => {
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

    return {
        Result:MainFactory(Device()),
        DeviceName,
        DeviceSlice,
        Start, 
        currentPage,
        Pages,
        DeviceData,
        DeviceLastPage,
        NextPage: () => NextPage(),
        ReturnPage:() => ReturnPage(),
        ExactPage:(pg:number) => ExactPage(pg),
        MainHtml,
    }
}
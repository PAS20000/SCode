import { useEffect, useMemo, useState } from 'react'
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

interface IProps<T> {
    data:Array<T>
    sliceCell:number
    sliceDesktop:number
    sliceTv:number
    arrowWeight:Range[number]
    classStyle?:Styles[number]
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



export default function useStaticPagination({data, sliceCell, sliceDesktop, sliceTv, arrowWeight, classStyle}:IProps<Object>) {
    const [ width, setWidth] = useState(0)
    const [ Start, setStart ] = useState(0)
    const [ Page, setPage ] = useState(1)
    const [ MaxItems ] = useState(data.length)
    const [ SliceCell, setSliceCell ] = useState(sliceCell)
    const [ SliceDesktop, setSliceDesktop ] = useState(sliceDesktop)
    const [ SliceTv, setSliceTv ] = useState(sliceTv)

    useEffect(() => {
        const w = window.innerWidth
        
        setWidth(w)
    }, [])

    const Device = ():IDevice => {
   
        if(width < 500){
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
        if(width < 1300 && width > 500){
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
        else {
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

 const Bnext = 

    <button id={'Bnext'} name={'buttons'} onClick={() => NextPage()} className={Page === DeviceLastPage ? css['disabled']:css[classStyle ?? 'default']}>
        <span>
            {Arrows.right[arrowWeight]}
        </span>
    </button>

 const Breturn =

    <button id={'Breturn'} name={'b'} onClick={() => ReturnPage()} className={Page === 1 ? css['disabled']: css[classStyle ?? 'default']}>
        <span>
            {Arrows.left[arrowWeight]}
        </span>
    </button>

const PageCard = 
<button>
    <span className={css['select']}>
        {Page}
    </span>
</button>

    return {
        Result:MainFactory(),
        DeviceName,
        DeviceSlice,
        Start, 
        Page,
        PageCard,
        NextPage,
        ReturnPage,
        DeviceData,
        DeviceLastPage,
        Bnext,
        Breturn
    }
}
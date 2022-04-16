import { useEffect, useMemo, useState } from 'react'
import { IProps } from './useEasyPagination.types'
import { existCountSalt } from './functions/existCountSalt'
import { Device } from './functions/Device'
import { MainHtml } from './Components/MainHtml'
import { MainFactory } from './functions/MainFactory'


const useEasyPagination = ({
    data, 
    ShowItemsOnMobile,
    ShowItemsOnDesktop,
    ShowItemsOnTv, 
    CountPageLimit, 
    arrowWeight, 
    classStyle,
    CountPages,
    sm, 
    md,
    lg
}:IProps) => {
    const [ Start, setStart ] = useState(0)
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ width, setWidth ] = useState(0)
    const [ MaxItems ] = useState(data.length)
    const [ Pages, setPages ] = useState([])
    const [ SliceCell, setSliceCell ] = useState(ShowItemsOnMobile)
    const [ SliceDesktop, setSliceDesktop ] = useState(ShowItemsOnDesktop)
    const [ SliceTv, setSliceTv ] = useState(ShowItemsOnTv)
   
    useEffect(() => {
        const w = window.innerWidth
        setWidth(w)
    },[])
    
    const StateDependency = {
        setStart,
        Start,
        SliceCell,
        setSliceCell,
        ShowItemsOnMobile,
        SliceDesktop,
        setSliceDesktop,
        ShowItemsOnDesktop, 
        setCurrentPage,
        currentPage,
        ShowItemsOnTv, 
        setSliceTv,
        SliceTv,
    }

    const DeviceExecuteDependecy = {
        width, 
        MaxItems, 
        ShowItemsOnMobile, 
        SliceCell, 
        ShowItemsOnDesktop, 
        SliceDesktop, 
        data, 
        ShowItemsOnTv, 
        SliceTv, 
        Start,
        CellWidth:sm,
        DekstopWidth:md,
        TvWidth:lg
    }

if(CountPageLimit) {
    useMemo(() => {
        
            (function(Device){
                
                if(Pages.includes(1)){
                    setPages(prev => prev.includes(currentPage) ? Pages:[...Pages, currentPage])
                }

            })(Device(DeviceExecuteDependecy));

    }, [currentPage])
}
    
    useMemo(() => {

        (function(Device){
            const existWidth = width !== 0
            const device = Device['device']
           
            if(existWidth && device){
                for ( let count = 1; count - 1 < existCountSalt(CountPageLimit, Device); count++) {
                    setPages(prev => [...prev,count])
                }
            }

        })(Device(DeviceExecuteDependecy));
        
    }, [width])
    

    const { DeviceData, DeviceLastPage, NextPage, ReturnPage, ExactPage, DeviceName, DeviceSlice } = MainFactory(StateDependency, Device(DeviceExecuteDependecy))
    
    return {
        Result:MainFactory(StateDependency, Device(DeviceExecuteDependecy)),
        currentPage,
        Pages,
        DeviceData,
        DeviceLastPage,
        NextPage: () => currentPage === DeviceLastPage ? () => {}:NextPage(),
        ReturnPage:() => currentPage === 1 ? () => {}:ReturnPage(),
        ExactPage:(pg:number) => ExactPage(pg),
        MainHtml:() => MainHtml(
                {
                    CountPages,
                    Pages,
                    arrowWeight,
                    classStyle,
                    currentPage
                }, {
                    DeviceData,
                    DeviceName,
                    DeviceSlice,
                    NextPage: () => currentPage === DeviceLastPage ? () => {}:NextPage(),
                    ReturnPage:() => currentPage === 1 ? () => {}:ReturnPage(),
                    ExactPage:(pg:number) => ExactPage(pg), 
                    DeviceLastPage
                })
    }
}


export default useEasyPagination
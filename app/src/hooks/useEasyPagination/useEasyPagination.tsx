import { useEffect, useMemo, useState } from 'react'
import { IProps } from './useEasyPagination.types'
import { existCountSalt } from './functions/existCountSalt'
import { Device } from './functions/Device'
import { MainHtml } from './Components/MainHtml'
import { MainFactory } from './functions/MainFactory'


export default function useEasyPagination({
    data, 
    sliceCell, 
    sliceDesktop, 
    sliceTv, 
    CountPageLimit, 
    arrowWeight, 
    classStyle,
    CountPages
}:IProps) {
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
    
    const StateDependency = {
        setStart,
        Start,
        SliceCell,
        setSliceCell,
        sliceCell,
        SliceDesktop,
        setSliceDesktop,
        sliceDesktop,
        setCurrentPage,
        currentPage,
        sliceTv,
        setSliceTv,
        SliceTv,
    }
    const DeviceExecuteDependecy = {
        width, 
        MaxItems, 
        sliceCell, 
        SliceCell, 
        sliceDesktop, 
        SliceDesktop, 
        data, 
        sliceTv, 
        SliceTv, 
        Start
    }
    const DeviceDependecy = Device(DeviceExecuteDependecy)
    

if(CountPageLimit) {
    useMemo(() => {
        
            (function(Device){
               
                if(currentPage > existCountSalt(CountPageLimit, Device)){
                    setPages(prev => prev.includes(currentPage) ? [...Pages]:[...Pages, currentPage])
                }

            })(Device(DeviceExecuteDependecy));
    }, [currentPage])
}
    
    useMemo(() => {

        (function(Device){
            const existWidth = width !== 0
            const device = Device.device
            if(device === 'cell' && existWidth ){

                for ( let count = 1; count - 1 < existCountSalt(CountPageLimit, Device ); count++) {
                    setPages(prev => [...prev,count])
                }
            }
            if(device === 'desktop' && existWidth){
               
                for ( let count = 1; count - 1 < existCountSalt(CountPageLimit, Device); count++) {
                    setPages(prev => [...prev,count])
                }
                
            } 
            if(device === 'tv'&& existWidth) {

                for ( let count = 1; count - 1 < existCountSalt(CountPageLimit, Device); count++) {
                    setPages(prev => [...prev,count])
                }
               
            }
        })(Device(DeviceExecuteDependecy));
        
    }, [width])
    
    
    

    const { DeviceData, DeviceLastPage, NextPage, ReturnPage, ExactPage, DeviceName, DeviceSlice } = MainFactory(StateDependency, DeviceDependecy)

    return {
        Result:MainFactory(StateDependency, DeviceDependecy),
        currentPage,
        Pages,
        DeviceData,
        NextPage: () => currentPage === DeviceLastPage ? () => {}:NextPage(),
        ReturnPage:() => currentPage === 1 ? () => {}:ReturnPage(),
        ExactPage:(pg:number) => ExactPage(pg),
        MainHtml:MainHtml({
            CountPages,
            Pages,
            arrowWeight,
            classStyle,
            currentPage
        }, {
            DeviceData,
            DeviceName,
            DeviceSlice,
            NextPage, 
            ReturnPage, 
            ExactPage, 
            DeviceLastPage
        })
    }
}
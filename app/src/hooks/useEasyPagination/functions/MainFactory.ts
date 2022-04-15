import { IDevice, IMainFactory } from "../useEasyPagination.types"

export const MainFactory = ( {
    setStart, 
    setCurrentPage, 
    setSliceCell, 
    setSliceDesktop, 
    Start,
    sliceCell,
    SliceCell,
    currentPage,
    SliceDesktop,
    sliceDesktop,
    sliceTv,
    SliceTv,
    setSliceTv
},
{ device, lastPage, slice, Data }:IDevice,
   
    ):IMainFactory => {

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
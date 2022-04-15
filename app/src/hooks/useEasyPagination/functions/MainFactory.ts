import { IDevice, IMainFactory, States } from "../useEasyPagination.types"

export const MainFactory = ( {
    setStart, 
    setCurrentPage, 
    setSliceCell, 
    setSliceDesktop, 
    Start,
    ShowItemsOnMobile,
    SliceCell,
    currentPage,
    SliceDesktop,
    ShowItemsOnDesktop,
    ShowItemsOnTv,
    SliceTv,
    setSliceTv
}:States,
{ device, lastPage, slice, Data }:IDevice,
   
    ):IMainFactory => {

    if(device === 'cell'){
       
        return {
            DeviceName: device,
            ReturnPage: () => { 
                setStart(Start - ShowItemsOnMobile)
                setSliceCell(SliceCell - ShowItemsOnMobile)
                setCurrentPage(currentPage - 1)
            },
            NextPage:() => {
                setStart(Start + ShowItemsOnMobile)
                setSliceCell(ShowItemsOnMobile + SliceCell)
                setCurrentPage(currentPage + 1)
            },
            ExactPage:(pg:number) => {
                setCurrentPage(pg)
                setSliceCell(pg)
                setStart(pg - ShowItemsOnMobile)
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
                setStart(Start - ShowItemsOnDesktop)
                setSliceDesktop(SliceDesktop - ShowItemsOnDesktop)
                setCurrentPage(currentPage - 1)
            },
            NextPage: () => {
                setStart(Start + ShowItemsOnDesktop)
                setSliceDesktop(ShowItemsOnDesktop + SliceDesktop)
                setCurrentPage(currentPage + 1)
            },
            ExactPage: (pg:number) => {
                setCurrentPage(pg)
                setSliceDesktop(pg * ShowItemsOnDesktop)
                setStart(ShowItemsOnDesktop * (pg - 1))
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
                setStart(Start - ShowItemsOnTv)
                setSliceTv(SliceTv - ShowItemsOnTv)
                setCurrentPage(currentPage - 1)
            },
            NextPage:() => {
                setStart(Start + ShowItemsOnTv)
                setSliceTv(ShowItemsOnTv + SliceTv)
                setCurrentPage(currentPage + 1)
            },
            ExactPage:(pg:number) => {
                setCurrentPage(pg)
                setSliceTv(pg * ShowItemsOnTv)
                setStart(ShowItemsOnTv * (pg - 1))
            },
            DeviceSlice: slice,
            DeviceData:Data,
            DeviceLastPage:lastPage,
        }
    }
}
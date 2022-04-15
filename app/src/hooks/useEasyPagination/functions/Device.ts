import { Devices, IDevice } from "../useEasyPagination.types"

export const Device = ({
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
    CellWidth,
    DekstopWidth,
    TvWidth
} : Devices) :IDevice => {
    const cell = CellWidth ? CellWidth:500
    const desktop = DekstopWidth ? DekstopWidth:1200
    const tv =  TvWidth ? TvWidth:1300

    if(width < cell){
        const lastPage = Math.ceil(MaxItems / ShowItemsOnMobile)
        const slice = `slice(${Start}-${SliceCell})`
        const Data = data.slice(Start, SliceCell)

        return {
            device:'cell',
            lastPage,
            slice,
            Data
        }
    }
    if(width < desktop && width < tv && width > cell){
        const lastPage = Math.ceil(MaxItems / ShowItemsOnDesktop)
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
        const lastPage = Math.ceil(MaxItems / ShowItemsOnTv)
        const slice = `slice(${Start}-${SliceTv})`
        const Data = data.slice(Start, SliceTv)

        return {
            device:'tv',
            lastPage,
            slice,
            Data
        }
    }

    throw new Error('Unnexpect Error')
}
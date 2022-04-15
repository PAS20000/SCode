import { IDevice } from "../useEasyPagination.types"

export const Device = ({width, MaxItems, sliceCell, SliceCell, sliceDesktop, SliceDesktop, data, sliceTv, SliceTv,Start}):IDevice => {
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
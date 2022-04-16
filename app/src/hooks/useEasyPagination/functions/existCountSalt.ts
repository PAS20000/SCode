import { CountPageLimit, IDevice } from "../useEasyPagination.types"

export const existCountSalt = (CountPageLimit:CountPageLimit,{ device, lastPage, Data }:IDevice):number | any => {

    if(CountPageLimit){
            if(device === 'cell' && CountPageLimit.cell > lastPage){
                //console.table(Data)
                console.error(
                    `Count page limit cannot be greater than last page, LastPage: ${lastPage}, CountPageLimit: ${CountPageLimit.cell}`
                )
            }
            if(device === 'desktop' && CountPageLimit.desktop > lastPage){
                //console.table(Data)
                console.error (
                    `Count page limit cannot be greater than last page, LastPage: ${lastPage}, CountPageLimit: ${CountPageLimit.desktop}`
                )
            }
            if(device === 'tv' && CountPageLimit.tv > lastPage){
                //console.table(Data)
                console.error (
                    `Count page limit cannot be greater than last page, LastPage: ${lastPage}, CountPageLimit: ${CountPageLimit.tv}`
                )
            }
            if(device === 'cell'){
                return CountPageLimit.cell
            }
            if(device === 'desktop'){
                return CountPageLimit.desktop
            }
            if(device === 'tv'){
                return CountPageLimit.tv
            }

            console.error ('Unexpected error')

        } else {
            return lastPage
        }
    }

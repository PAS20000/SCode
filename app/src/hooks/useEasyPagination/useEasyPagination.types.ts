export interface IMainFactory {
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

export type CountPageLimit = {
    cell:number
    desktop:number
    tv:number
}

export interface IMainHtmlProps {
    currentPage:number
    classStyle:Styles[number] 
    arrowWeight:Range[number]
    CountPages:boolean 
    Pages:Array<number>
}

export interface IProps {
    data:Array<any>
    sliceCell:number
    sliceDesktop:number
    sliceTv:number
    arrowWeight?:Range[number]
    classStyle?:Styles[number],
    CountPageLimit?:CountPageLimit
    CountPages?:boolean
}

export interface IDevice {
    device:string
    lastPage:number
    slice:string
    Data:Array<any>
}

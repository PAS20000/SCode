export interface IMainFactory {
    DeviceName:string,
    ReturnPage: Function
    NextPage: Function
    ExactPage:Function
    DeviceSlice: string
    DeviceData: Array<any>
    DeviceLastPage:number
}

export type States = {
    setStart:Function
    Start:number
    SliceCell:number
    setSliceCell:Function
    ShowItemsOnMobile:number
    SliceDesktop:number
    setSliceDesktop:Function
    ShowItemsOnDesktop:number 
    setCurrentPage:Function
    currentPage:number
    ShowItemsOnTv:number 
    setSliceTv:Function
    SliceTv:number
}

type Range = [100,200,300,400,500]

export type Styles = ['default','redCircle', 'orangeCircle', 'blueCircle', 'purpleCircle', 'greenCircle']

export type Devices = {
    width:number
    MaxItems:number 
    ShowItemsOnMobile:number 
    SliceCell:number 
    ShowItemsOnDesktop:number 
    SliceDesktop:number 
    data:Array<any> 
    ShowItemsOnTv:number 
    SliceTv:number 
    Start:number 
    CellWidth:number 
    DekstopWidth:number 
    TvWidth:number 
}

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

/*type Style = {
    color?:string
    background?:string
    width?:number | string
    height?:number | string
    margin?:number | string
    marginLeft?:number | string
    marginRight?:number | string
    marginTop?:number | string
    marginBotton?: number | string
    padding?:number | string
    hover?:StyleResume
}
type StyleResume = {
    c?:string
    bg?:string
    w?:number | string
    h?:number | string
    m?:number | string
    ml?:number | string
    mr?:number | string
    mt?:number | string
    mb?:number | string
    p?:number | string
}

export type classNames = {
    Buttons:Style | StyleResume
    PagesCard:Style | StyleResume
}
*/
export interface IProps {
    data:Array<any>
    ShowItemsOnMobile:number
    ShowItemsOnDesktop:number
    ShowItemsOnTv:number
    arrowWeight?:Range[number]
    classStyle?:Styles[number],
    CountPageLimit?:CountPageLimit
    CountPages?:boolean
    sm?:number 
    md?:number 
    lg?:number 
}

export interface IDevice {
    device:string
    lastPage:number
    slice:string
    Data:Array<any>
}

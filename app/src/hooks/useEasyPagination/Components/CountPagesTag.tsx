const CountPagesTag = ({currentPage, DeviceLastPage}) => {

    return(
        <span>
            {currentPage}...{DeviceLastPage}
            {currentPage === DeviceLastPage && '🚀'}
        </span>
    )
}

export default CountPagesTag
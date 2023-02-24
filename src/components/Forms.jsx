const Forms = () => {

    return (
        <div className='flex md:justify-evenly items-center m-5 py-3' >
            <div className="flex flex-col flex-wrap gap-9
            md:flex-row md:items-center md:justify-between md:w-[90%]">
                <div className="">
                    <i className="absolute p-3"><ion-icon name="search-outline"></ion-icon></i>
                    <input type="text" placeholder="Search for a country..." className="
                        py-3 px-8 rounded-md
                        dark:bg-dark-blue
                    "/>
                </div>
                <div className="w-10/12 md:w-1/4" >
                    <select name="region" className="
                    p-3 border-none rounded-md w-full
                    bg-white
                    dark:bg-dark-blue
                    "
                        placeholder="Filter by Region" >
                        <option value="no" selected disabled>Filter by Region</option>
                        <option value="africa">Africa</option>
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Forms
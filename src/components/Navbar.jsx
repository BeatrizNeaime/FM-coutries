import { useContext} from 'react'

import Context from '../contexts/Context'

const Navbar = () => {

    const { tema, setTema } = useContext(Context);

    const changeTheme = () => {
        setTema(tema => ({
            ...tema,
            isDark: !tema.isDark
        }));
        tema.isDark === true ? setTema(tema => ({ ...tema, classe: '' })) : setTema(tema => ({ ...tema, classe: 'dark' }))
    }

    return (
        <div className={`
        ${tema.classe} 
        flex items-center justify-evenly px-10 py-3 bg-white
         
        dark:bg-dark-blue dark:text-very-light-gray`
        }>
            <div className="sm:w-[60%] align-middle">
                <h2 className='font-[800]'>Where in the world?</h2>
            </div>
            <div className="flex">
                <button onClick={changeTheme} className="flex items-center gap-2" >
                    <ion-icon name={tema.isDark === true ? "moon-outline" : "moon"}></ion-icon>
                    <span className='hidden md:inline' >Dark Mode</span>
                </button>
            </div>
        </div>
    )
}

export default Navbar
const Infos = ({ name, content }) => {
    return (
        <span className='flex gap-2' >
            <p className='font-semibold' >{name}: </p> <p className='opacity-70' >{content}</p>
        </span>
    )
}

export default Infos
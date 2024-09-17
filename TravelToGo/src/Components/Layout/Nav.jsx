import logo from '/icons/logo.svg?url'

function Nav(){
    return(
        <div className='nav'>
            <img className='nav--logo' src={logo} alt='logo' width={50} height={50} />
            <h1 className='nav--title'>Travel 2 Go</h1>
        </div>
    )
}

export default Nav;
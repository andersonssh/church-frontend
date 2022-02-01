function Navbar({menu}){
    return (
        <div>    
            {menu == 'igreja' && (
                <div>menu da igreja</div>
            )}
            {menu == 'dbv' && (
                <div>menu dos desbravadores</div>
            )}
        </div>
    )
}

export default Navbar
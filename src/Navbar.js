import { Input } from 'antd'
import React from 'react';


export const Navbar = () => {
    return (
    <div>
        <nav className="navbar navbar-expand navbar-light" style = {{marginTop: '30px'}}>
        <span> <a className="navbar-brand" href="#"> <svg width="30" height="56" viewBox="0 0 30 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="56" rx="15" fill="#FF9153"/>
</svg>
</a>
      <a className = 'logos pt-3'>IMINN</a> </span>

            <div className="collapse navbar-collapse" style = {{marginLeft: '180px'}}>
            <span id = 'search'>
            <Input  style = {{height: '57px', width: '403.0404968261719px',left: '100px',top: '0px',borderRadius: '35px'}} size="large" placeholder="Find Game Code" prefix={<i className="fas fa-search pr-2" style = {{color: '#FF8252'}}></i>} />
            </span>
                <ul className="navbar-nav ml-auto text-center">
                
                <li className="nav-item nav-noti">
                    <a className="nav-link" href="#"><svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 7.66675C17.5 5.94284 16.8152 4.28954 15.5962 3.07055C14.3772 1.85157 12.7239 1.16675 11 1.16675C9.27609 1.16675 7.62279 1.85157 6.40381 3.07055C5.18482 4.28954 4.5 5.94284 4.5 7.66675C4.5 15.2501 1.25 17.4167 1.25 17.4167H20.75C20.75 17.4167 17.5 15.2501 17.5 7.66675Z" stroke="#7D7F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
                </li>
                <li className="nav-item nav-display">
                    <a className="nav-link" href="#"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.90419 2.53575L1.16669 9.99992V16.4999C1.16669 17.0746 1.39496 17.6257 1.80129 18.032C2.20762 18.4383 2.75872 18.6666 3.33335 18.6666H20.6667C21.2413 18.6666 21.7924 18.4383 22.1988 18.032C22.6051 17.6257 22.8334 17.0746 22.8334 16.4999V9.99992L19.0959 2.53575C18.9165 2.17477 18.64 1.87099 18.2974 1.65855C17.9548 1.44612 17.5598 1.33347 17.1567 1.33325H6.84335C6.44026 1.33347 6.04522 1.44612 5.70265 1.65855C5.36008 1.87099 5.08356 2.17477 4.90419 2.53575V2.53575Z" stroke="#7D7F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
                </li>
                <li className="nav-item nav-display">
                    <a className="nav-link pl-2" href="#"><i class="fas fa-badge"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5767 4.99419C22.0234 4.44061 21.3664 4.00147 20.6433 3.70187C19.9202 3.40226 19.1452 3.24805 18.3625 3.24805C17.5798 3.24805 16.8048 3.40226 16.0817 3.70187C15.3586 4.00147 14.7017 4.44061 14.1484 4.99419L13 6.14252L11.8517 4.99419C10.734 3.87652 9.21815 3.24863 7.63753 3.24863C6.05691 3.24863 4.54103 3.87652 3.42336 4.99419C2.30569 6.11186 1.6778 7.62774 1.6778 9.20836C1.6778 10.789 2.30569 12.3049 3.42336 13.4225L4.57169 14.5709L13 22.9992L21.4284 14.5709L22.5767 13.4225C23.1303 12.8692 23.5694 12.2122 23.869 11.4892C24.1686 10.7661 24.3228 9.99105 24.3228 9.20836C24.3228 8.42566 24.1686 7.65064 23.869 6.92756C23.5694 6.20448 23.1303 5.54751 22.5767 4.99419V4.99419Z" stroke="#7D7F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</i></a>
                </li>
                <li className="nav-item nav-display">
                    <a className="nav-link" href="#"><i class="fas fa-cog fa-2x"></i></a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                </form>
            </div>
            </nav>
            
        </div>
    )
}

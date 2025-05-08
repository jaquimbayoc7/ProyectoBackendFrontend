
export function useLayout(pathname: string){
    const routes = [{
        path:'/',
        name:'about'
    },{
        path:'/resume',
        name:'Resumen'
    },{
        path:'/portfolio',
        name:'Portafolio'
    },
    {
        path:'/blog',
        name:'Blog'
    },{
        path:'/contact',
        name:'Contacto'
    }
        
    ];

    const title = pathname === "/"
        ? "About"
        : pathname === "/resume"
        ? "Resume"
        : pathname === "/contact"
        ? "Contact"
        : pathname === "/portfolio"
        ? "Portfolio"
        : "Blog";
        return{
           title, routes
        }
}
'use client'
import { useRouter } from "next/navigation";

const HistorialVisita: React.FC = () => {

    const token = localStorage.getItem('token');
    const router = useRouter();

    return(
      <div className="flex h-screen w-full items-center bg-zinc-300 bg-cover text-xl">
        
        <div className="BarraIZQ rounded-xl bg-[#384E55] ml-2 h-128 w-64 shadow-lg backdrop-blur-md max-sm:px-8 text-center">
            <img src="https://static.wixstatic.com/media/8db992_3c6f3144b95c4690a72c5ea5c6bd9176~mv2.png/v1/crop/x_24,y_0,w_251,h_172/fill/w_351,h_240,al_c,lg_1,q_85,enc_auto/8db992_3c6f3144b95c4690a72c5ea5c6bd9176~mv2.png" width="150" alt="" srcSet="" className="ml-10 brightness-200 saturate-0 grayscale contrast-200"/>
            <hr className="rounded-xl h-0.5 w-60 ml-2 bg--200 border-0 bg-[#DF4C17]"/>
            <div className="flex flex-col">
              <div className="flex flex-col mb-16">
                <button className="mt-7 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md" onClick={() => router.push('profile')}>Plan</button>
                <button className="mt-7 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md" onClick={() => router.push('aceptar_visita')}>Aceptar Visita</button>
                <button className="mt-7 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md" onClick={() => router.push('factor_carga')}>Factor de Carga</button>
              </div>
              <button className="mt-64 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md" onClick={() => router.push('/')}>Cerrar Sesión</button>
            </div>
        </div>
          
        <div className="Botones">
          <div className="flex flex-row absolute inset-x-80 top-5">
              <div className="relative inset-x-20">
                  <button className="mr-40 rounded-3xl bg-[#384E55] px-20 py-3 text-white text-opacity-1000 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-sky-800 backdrop-blur-md" onClick={() => router.push('aceptar_visita')}>Solicitudes</button>
                  <button className="rounded-3xl bg-[#384E55] px-10 py-3 text-white text-opacity-1000 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-sky-800 backdrop-blur-md" onClick={() => router.push('historial_visita')}>Historial de Solicitudes</button>
              </div>
          </div>  
        </div>

        <div className="Header flex flex-row absolute inset-x-80 top-24">
          <div className="relative inset-x-14 mr-2.5">
            <h1 className="rounded-3xl bg-[#456570] px-32 py-3 text-opacity-1000 shadow-xl">
              Visita
            </h1>
          </div>
          <div className="relative inset-x-44">
            <h1 className="rounded-3xl bg-[#456570] px-32 py-3 text-opacity-1000 shadow-xl">
              Estado
            </h1>
          </div>
        </div>          
      </div>
    )
}
export default HistorialVisita
'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import axios from 'axios'

const AceptarVisita: React.FC = () => {

  const router = useRouter();

  const [visitaData, setVisitaData] = useState<any[]>([]);

  async function getVisita() {
    try {
      const response = await axios.get('http://localhost:3000/visita/allvisitas');
      return response.data;
    } catch (error) {
      throw new Error('Error fetching data from backend');
    }
  }

  const opcionVisita = async (tipo: boolean, correo: string) => {
    const data = {
      estado: tipo,
      correo: correo,
    };
    try {
      const response = await axios.patch(`http://localhost:3000/visita/updateEstado`, data);

      if (tipo === true) {
        const response = await axios.post(`http://localhost:3000/auth/password`, { correo: correo });
        console.log(response.data)
        window.location.reload();
      };
      return response.data;
    } catch (error) {
      throw new Error('Error fetching reportes from backend');
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const visitaData = await getVisita();
        setVisitaData(visitaData);
      } catch (error) {
        console.error();
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex h-screen w-full items-center bg-zinc-300 bg-cover text-xl">

      <div className="BarraIZQ rounded-xl bg-[#384E55] ml-2 h-128 w-64 shadow-lg backdrop-blur-md max-sm:px-8 text-center">
        <img src="https://static.wixstatic.com/media/8db992_3c6f3144b95c4690a72c5ea5c6bd9176~mv2.png/v1/crop/x_24,y_0,w_251,h_172/fill/w_351,h_240,al_c,lg_1,q_85,enc_auto/8db992_3c6f3144b95c4690a72c5ea5c6bd9176~mv2.png" width="150" alt="" srcSet="" className="ml-10 brightness-200 saturate-0 grayscale contrast-200" />
        <hr className="rounded-xl h-0.5 w-60 ml-2 bg--200 border-0 bg-[#DF4C17]" />
        <div className="flex flex-col">
          <div className="flex flex-col mb-16">
            <button className="mt-7 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md" onClick={() => router.push('profile')}>Plan</button>
            <button className="mt-7 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md" onClick={() => router.push('aceptar_visita')}>Aceptar Visita</button>
            <button className="mt-7 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md" onClick={() => router.push('factor_carga')}>Factor de Carga</button>
          </div>
          <button className="mt-64 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md" onClick={() => router.push('/')}>Cerrar Sesión</button>
        </div>
      </div>

      <div>
        <div className="Botones flex flex-row absolute inset-x-80 top-5">
          <div className="ml-16">
            <button className="mr-40 rounded-3xl bg-[#384E55] px-20 py-3 text-white text-opacity-1000 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-sky-800 backdrop-blur-md" onClick={() => router.push('aceptar_visita')}>Solicitudes</button>
            <button className="mr-7 rounded-3xl bg-[#384E55] px-10 py-3 text-white text-opacity-1000 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-sky-800 backdrop-blur-md" onClick={() => router.push('historial_visita')}>Historial de Solicitudes</button>
          </div>
        </div>
      </div>

      <div className="px-3 py-4 flex justify-center absolute inset-x-80 top-20">
        <table className="w-full text-md bg-[#384E55]">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-right p-3">Aceptar/Rechazar</th>
              <th></th>
            </tr>
            {visitaData.map((vis) => (
              <tr className="hover:bg-sky-800 shadow-lg backdrop-blur-md">
                {vis.estado === null ? (
                  <>
                    <td className="p-3 px-5 bg-transparent">{vis.correo}</td>
                    <td key={vis.correo} className="p-3 px-5 flex justify-end"><button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => opcionVisita(true, vis.correo)}>Aceptar</button>
                      <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => opcionVisita(false, vis.correo)}>Rechazar</button></td>
                  </>
                ) : null}
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default AceptarVisita
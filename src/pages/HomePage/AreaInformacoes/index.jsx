import React from 'react';
import './areaInfo.css'

import cliente from '../../../assets/cliente.svg'

function index({ref}) {
  return (
    <div className='area-informacoes' onClick={ref}>
         <section className='descricao'>
            <h2 className='title-infoArea'>Nossa Empresa</h2>
            <p className='desc--empresa'>
                Somos uma empresa com mais de 10 anos de mercado,
                temos os melhores preços para que você possa commprar suas criptomoedas.
            </p>
            <p className='desc--empresa'>
                Comprar criptomoedas requer segurança, privcidade e ótimos preços, para proporcionar a você uma experiência única e incomparável!!
            </p>

            <h2 className='title-infoArea'>Missão, Visão e Valores</h2>
            <p className='desc--empresa'>
                Missão: Ser um time obstinado em prever e atender as necessidades dos clientes e consumidores sempre agregando valores.
            </p>
            <p className='desc--empresa'>
               Visão: Ser a empresa líder em atender as necessidades dos clientes sempre agregando valores
            </p>
            <p className='desc--empresa'>
               Valores:  honestidade, respeito e dedicação.
            </p>
        </section>
    </div>
  )
}

export default index;

import { useState } from 'react' 
import './styles.css';

export default function BarraDePequisa() {
	const [termoPesquisa, setTermoPesquisa] = useState('');
	console.log(termoPesquisa);
	return(
		<input 
			type='saerch'
			placeholder='Digite o que você procura' 
			className='barra-pesquisa'
			value={termoPesquisa}
			onChange={(evento) => setTermoPesquisa(evento.target.value)} />
	)
}
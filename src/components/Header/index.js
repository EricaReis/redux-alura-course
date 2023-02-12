import styles from './Header.module.scss';
import TituloComImagem from './TituloComImagem/index';
import TituloSemImagem from './TituloSemImagem/index';

export default function Header({ titulo, descricao, className = '', imagem}) {
  return (
    <header className={styles.header}>
      {titulo && !imagem &&
        <TituloSemImagem
          titulo={titulo}
          descricao={descricao}
        />
      }
      {titulo && imagem &&
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        />
      }
    </header>
  )
}
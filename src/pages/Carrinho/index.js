import Header from 'components/Header/index';
import styles from './Carrinho.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import Item from 'components/Item/index';
import { resetarCarrinho } from 'store/reducers/carrinho';

export default function Carrinho() {    
 const dispatch = useDispatch();
 const { carrinho, total } = useSelector(state => {
        let total = 0;
        const regexp = new RegExp(state.busca, 'i');
        const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
            const item = state.itens.find(item => item.id === itemNoCarrinho.id);
            total += (item.preco * itemNoCarrinho.quantidade);
            if (item.titulo.match(regexp)){
                itens.push({
                    ...item,
                    quantidade: itemNoCarrinho.quantidade
                });
            }
            return itens;
        }, []);
        return {
            carrinho: carrinhoReduce,
            total
        };
    });

    return (
        <div>
            <Header 
                titulo='Carrinho de compras' 
                descricao='Confira produtos que você adicionou ao carrinho'
            />
            <div className={styles.carrinho}>
                {carrinho.map(item => <Item carrinho key={item.id} {...item} />)}
                <div className={styles.total}>
                    <strong>
                        Resumo da compra
                    </strong>
                    <spam>
                        Subtotal: <strong>R$ {total.toFixed(2)}</strong>
                    </spam>
                </div>
                <button 
                    className={styles.finalizar}
                    onClick={() => dispatch(resetarCarrinho())}
                >
                    Finalizar compra
                </button>
            </div>
        </div>
    )
}
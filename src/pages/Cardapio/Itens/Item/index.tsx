import classNames from 'classnames';
import styles from './Item.module.scss';


interface IItem {
    item : PropsItem;
}

interface PropsItem {
    title: string;
    description: string;
    photo: string;
    size: number;
    serving: number;
    price: number;
    id: number;
    category: {
        id: number;
        label: string;
    }
}

export default function Item(item : IItem) {
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={item.item.photo} alt={item.item.title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2> {item.item.title} </h2>
                    <p> {item.item.description} </p>
                </div>
                <div className={styles.item__tags}>
                    <div className={classNames({
                        [styles.item__tipo] : true,
                        [styles[`item__tipo__${item.item.category.label.toLowerCase()}`]]: true
                    })}>{item.item.category.label}</div>
                    <div className={styles.item__porcao}>{item.item.size}g</div>
                    <div className={styles.item__qtdpessoas}>{item.item.serving} pessoa{item.item.serving === 1 ? '' : 's'}</div>
                    <div className={styles.item__valor}>R$ {item.item.price.toFixed(2)}</div>
                </div>
            </div>
        </div>  
    );
}
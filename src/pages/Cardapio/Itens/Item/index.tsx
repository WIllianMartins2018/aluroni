import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    return (
        <div className={styles.item} onClick={() => navigate(`/prato/${item.item.id}`)}>
            <div className={styles.item__imagem}>
                <img src={item.item.photo} alt={item.item.title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2> {item.item.title} </h2>
                    <p> {item.item.description} </p>
                </div>
                <TagsPrato category={item.item.category} size={item.item.size} serving={item.item.serving} 
                    price={item.item.price} />
            </div>
        </div>  
    );
}
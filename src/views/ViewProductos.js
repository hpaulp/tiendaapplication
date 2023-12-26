import { Footer } from '../components/Footer';
import { ListaProductos } from '../components/ListaProductos';


export const ViewProductos = () => {

    return(
        <div className='verdetalle'>
            
            <ListaProductos></ListaProductos>
            <Footer></Footer>
        </div>
    );
};

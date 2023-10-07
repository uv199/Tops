import Product from '../../../Utils/Product.json'
import CardCom from '../../Components/Card/CardCom';
import './ProductCom.css'

function ProductCom({ data }) {
    return (
        <>
            <div className="product-com">
                <h1 style={{ textAlign: 'center' }}><span>Our</span> Products</h1>
                <hr className='bottom-border' />
                <p className='p-txt' style={{ textAlign: 'center', fontSize: '18px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus id tempore cupiditate<br /> porro dicta, illo facere reprehenderit autem tenetur est iure eos. </p>
                <div className='productlist d-flex'>
                    {
                        Product?.map?.((e) => {
                            return <CardCom data={e} />
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default ProductCom;

import { getProductBySlug } from '../api/fetchProducts';
import { setLoading } from '../store/features/common';
import store from '../store/store';
import content from '../data/content.json'; // If it's in a 'data' folder located in the parent directory.


export const loadProductById = async ({params}) =>{
    try{
        // store.dispatch(setLoading(true));
        // const product = await getProductBySlug(params?.slug);
        const product =content?.products?.find((product)=>product?.id?.toString()===params?.productId?.toString())
        // store.dispatch(setLoading(false));
        return {product};
    }
    catch(err){

    }
}
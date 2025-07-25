import { api } from '@/api/config';
import { Publication } from '@/types';

export const publicationsService = () => {

    const getAllPublications = async () => {
        try{
            const response = await api.get('/v1/posts');

            if(response.data)
                return response.data as Publication[];
            else
                return [] as Publication[];
        } catch(e){
            return 'Something went wrong';
        }
    }

    return {
        getAllPublications,
    };
}
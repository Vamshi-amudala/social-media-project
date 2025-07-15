import { useForm } from 'react-hook-form'
import * as yup from 'yup';

export const CreateForm = () => {

    const schema = yup.object().shape({
        title: yup.string().required('Title is required'),
        description: yup.string().required('Description is required').min(10, 'Description must be at least 10 characters long'),
    });

    return (

        <form>
            <input placeholder='Title...'/>
            <textarea placeholder='Description...' />
            <input type="Submit" />
        </form>
    );
};